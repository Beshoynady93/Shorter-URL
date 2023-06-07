import { useRef, useState } from 'react';
import LinksDisplay from '../links-display/links-display.component';
import ShortenBGDesktop from '../../assets/images/bg-shorten-desktop.svg';
import ShortenBGMobil from '../../assets/images/bg-shorten-mobile.svg';
import { renderBG } from '../../utils/renderBG';

import './shorten-url.styles.scss';

function ShortenURL() {
  const [shortLinks, setShortLinks] = useState([]);

  const userLink = useRef();
  const invalidMessage = useRef();

  const shortenLink = async (e) => {
    e.preventDefault();
    const link = userLink.current.value;
    if (!link) {
      userLink.current.classList.add('shorten-link-input__no-link');
      invalidMessage.current.classList.add(
        'shorten-link-input__invalid-message'
      );
      return;
    }
    try {
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
      const { result } = await res.json();

      if (!res.ok) {
        userLink.current.classList.add('shorten-link-input__no-link');
        invalidMessage.current.classList.add(
          'shorten-link-input__invalid-message'
        );
        userLink.current.value = '';
        return;
      }

      setShortLinks((previousLink) => [
        ...previousLink,
        { code: result.code, link, shortLink: result.full_short_link },
      ]);
      userLink.current.value = '';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="shorten-link-container">
      <form
        className="shorten-link-form"
        style={{
          backgroundImage: `url(${renderBG(ShortenBGDesktop, ShortenBGMobil)})`,
        }}
      >
        <div className="input-container">
          <input
            placeholder="shorten a link here"
            ref={userLink}
            type="text"
            className="shorten-link-input"
            required
          />
          <span className="input-message" ref={invalidMessage}>
            Please enter a valid link.
          </span>
        </div>

        <button
          className="btn shorten-link__button"
          type="submit"
          onClick={shortenLink}
        >
          shorten it!
        </button>
      </form>
      <LinksDisplay links={shortLinks} />
    </div>
  );
}

export default ShortenURL;

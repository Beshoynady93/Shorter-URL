import { useRef } from 'react';

import './links-display.styles.scss';

function LinksDisplay({ links }) {
  const copiedLink = useRef();

  const formatLink = (link) => {
    if (link.slice(0, 8) === 'https://') return link;
    else return `https://${link}`;
  };

  const copyText = (e) => {
    const link = copiedLink.current.textContent;
    navigator.clipboard.writeText(link);
    const clickedButton = e.currentTarget;
    clickedButton.textContent = 'copied!';
    clickedButton.classList.add('copied');
  };

  return links.map((link) => {
    return (
      <div className="link-container" key={link.code}>
        <span className="original-link">
          <a href={formatLink(link.link)} target="_blank" rel="noreferrer">
            {link.link}
          </a>
        </span>
        <span className="short-link" ref={copiedLink}>
          <a href={link.shortLink} target="_blank" rel="noreferrer">
            {link.shortLink}
          </a>
        </span>
        <button className="btn copy-link__button" onClick={copyText}>
          copy
        </button>
      </div>
    );
  });
}

export default LinksDisplay;

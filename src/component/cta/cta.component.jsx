import BoostBgDesktop from '../../assets/images/bg-boost-desktop.svg';
import BoostBgMobile from '../../assets/images/bg-boost-mobile.svg';
import { renderBG } from '../../utils/renderBG';

import './cta.styles.scss';

const Cta = () => {
  return (
    <section
      className="cta-container"
      style={{
        backgroundImage: `url(${renderBG(BoostBgDesktop, BoostBgMobile)})`,
      }}
    >
      <h2 className="cta-title">boost your links today</h2>
      <button className="btn cta-button">get started</button>
    </section>
  );
};

export default Cta;

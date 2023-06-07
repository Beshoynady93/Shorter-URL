import BackgroundImg from '../../assets/images/illustration-working.svg';

import './hero.styles.scss';

function Hero() {
  return (
    <section className="hero-section">
      <div className="img-container">
        <img src={BackgroundImg} alt="" />
      </div>
      <div className="hero-section__details">
        <h1 className="title">More than just shorter links</h1>
        <p className="description">
          {`Build your brand's recognition and get detailed insights on how your
          links are performing`}
        </p>
        <button className="btn button">get started</button>
      </div>
    </section>
  );
}

export default Hero;

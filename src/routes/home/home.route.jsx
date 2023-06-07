import Hero from '../../component/hero/hero.component';
import Shorten from '../../component/shorten/shorten.component';
import Cta from '../../component/cta/cta.component';

import './home.styles.scss';

const Home = () => {
  return (
    <div className="home-page">
      <main>
        <Hero />
        <Shorten />
        <Cta />
      </main>
    </div>
  );
};
export default Home;

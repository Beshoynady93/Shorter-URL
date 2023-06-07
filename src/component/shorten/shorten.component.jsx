import ShortenURL from '../shorten-url/shorten-url.component';
import Statitics from '../statistics/statistics.component';

import './shorten.styles.scss';

function Shorten() {
  return (
    <section className="shorten-section">
      <ShortenURL />
      <Statitics />
    </section>
  );
}

export default Shorten;

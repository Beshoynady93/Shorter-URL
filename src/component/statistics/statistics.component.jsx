import BrandRecognitionIcon from '../../assets/images/icon-brand-recognition.svg';
import DetailedRecordsIcon from '../../assets/images/icon-detailed-records.svg';
import FullyCustomizableIcon from '../../assets/images/icon-fully-customizable.svg';

import './statistics.styles.scss';

const Statitics = () => {
  return (
    <section className="statistics-section">
      <div className="statistics-title">
        <h2>advanced statistics</h2>
        <p>
          track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>
      <div className="statistics-details">
        <div className="statistics__card">
          <div className="icon-container">
            <img
              src={BrandRecognitionIcon}
              alt=""
              className="statistics__card-icon"
            />
          </div>
          <h3 className="statistics__card-title">brand recognition</h3>
          <p className="statistics__card-details">
            {`Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.`}
          </p>
        </div>
        <div className="statistics__card">
          <div className="icon-container">
            <img
              src={DetailedRecordsIcon}
              alt=""
              className="statistics__card-icon"
            />
          </div>
          <h3 className="statistics__card-title">Detailed Records</h3>
          <p className="statistics__card-details">
            {`Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.`}
          </p>
        </div>
        <div className="statistics__card">
          <div className="icon-container">
            <img
              src={FullyCustomizableIcon}
              alt=""
              className="statistics__card-icon"
            />
          </div>
          <h3 className="statistics__card-title">Fully Customizable</h3>
          <p className="statistics__card-details">{`Improve brand awareness and content discoverability through customizable links, supercharging audience engagement. `}</p>
        </div>
      </div>
    </section>
  );
};

export default Statitics;

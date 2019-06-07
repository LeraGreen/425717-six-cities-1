import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import City from "../city/city.jsx"
import Map from "../map/map.jsx";
import HotelCard from "../hotel-card/hotel-card.jsx";

class HotelsPage extends PureComponent {
  constructor(props) {
    super(props);

    this._onCardClick = this._onCardClick.bind(this);
    this._onCityClick = this._onCityClick.bind(this);
  }

  _onCardClick(index) {
    this.props.onCardClick(index);
  };

  _onCityClick(name) {
    this.props.onCityClick(name);
  };

  render() {
    const {hotels, cities, leaflet, mapData, activeCity} = this.props;
    const activeCityHotels = hotels.filter((item) => item.city === activeCity);
    const activeCityData = cities.find((item) => {
      if (item.city === activeCity) {
        return item;
      }
    });

    const map = <Map
      hotels={activeCityHotels}
      city={activeCityData}
      leaflet={leaflet}
      mapData={mapData}
    />;
    const listItems = activeCityHotels.map((item, i) => 
      <HotelCard
        key={i}
        hotel={item}
        index={i}
        onCardClick={this._onCardClick}
      />
    );
    const listCities = cities.map((item, i) => 
      <City
        key={i}
        city={item.city}
        onCityClick={this._onCityClick}
        onCardClick={this._onCardClick}
        isActive={activeCity === item.city}
      />
    );

    return <React.Fragment>
      <div style={{display: `none`}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"></img>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="cities tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {listCities}
            </ul>
          </section>
        </div>
        <div className="cities__places-wrapper">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in {activeCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
                { /*
                <select className="places__sorting-type" id="places-sorting">
                  <option className="places__option" value="popular" selected="">Popular</option>
                  <option className="places__option" value="to-high">Price: low to high</option>
                  <option className="places__option" value="to-low">Price: high to low</option>
                  <option className="places__option" value="top-rated">Top rated first</option>
                </select>
                */ }
              </form>
              <div className="cities__places-list places__list tabs__content">
                {listItems}
              </div>
            </section>
            <div className="cities__right-section">
              {map}
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>;
  }
}

// HotelsPage.propTypes = {
//   hotels: PropTypes.arrayOf(PropTypes.shape({
//     description: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     type: PropTypes.string.isRequired,
//     rating: PropTypes.number.isRequired,
//     photo: PropTypes.string.isRequired,
//     coordinates: PropTypes.arrayOf(PropTypes.number).isRequired
//   })).isRequired,
//   cities: PropTypes.arrayOf(PropTypes.shape({
//     city: PropTypes.string,
//     location: PropTypes.shape({
//       latitude: PropTypes.number,
//       longitude: PropTypes.number,
//       zoom: PropTypes.number
//     }).isRequired
//   })).isRequired,
//   leaflet: PropTypes.object.isRequired,
//   mapData: PropTypes.shape({
//     city: PropTypes.arrayOf(PropTypes.number).isRequired,
//     zoom: PropTypes.number.isRequired,
//     isZoomControl: PropTypes.bool.isRequired,
//     isMarker: PropTypes.bool.isRequired,
//     iconUrl: PropTypes.string.isRequired,
//     iconSize: PropTypes.arrayOf(PropTypes.number).isRequired
//   }).isRequired
// };

export default HotelsPage;

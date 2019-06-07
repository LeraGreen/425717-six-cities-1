const hotels = [
  {
    city: `Paris`,
    description: `Неняшное место в Париже`,
    price: 120,
    type: `Apartment`,
    rating: 93,
    photo: `img/apartment-01.jpg`,
    coordinates: [52.3909553943508, 4.85309666406198]
  },
  {
    city: `Paris`,
    description: `Няшное место в Париже`,
    price: 200,
    type: `Private Room`,
    rating: 80,
    photo: `img/apartment-02.jpg`,
    coordinates: [52.369553943508, 4.85309666406198]
  },
  {
    city: `Cologne`,
    description: `Квартира в Кологне`,
    price: 80,
    type: `Private Room`,
    rating: 100,
    photo: `img/apartment-03.jpg`,
    coordinates: [52.3909553943508, 4.929309666406198]
  },
  {
    city: `Cologne`,
    description: `Колонна в Кологне`,
    price: 90,
    type: `Apartment`,
    rating: 80,
    photo: `img/apartment-02.jpg`,
    coordinates: [52.3809553943508, 4.939309666406198]
  },
  {
    city: `Amsterdam`,
    description: `Хостел в Амстере`,
    price: 90,
    type: `Apartment`,
    rating: 80,
    photo: `img/apartment-02.jpg`,
    coordinates: [52.3809553943508, 4.939309666406198]
  },
  {
    city: `Brussels`,
    description: `Хостел в Брюсселе`,
    price: 90,
    type: `Apartment`,
    rating: 80,
    photo: `img/apartment-02.jpg`,
    coordinates: [52.3809553943508, 4.939309666406198]
  },
  {
    city: `Dusseldorf`,
    description: `Нормальная хата в Дюссельдорфа`,
    price: 90,
    type: `Apartment`,
    rating: 80,
    photo: `img/apartment-02.jpg`,
    coordinates: [52.3809553943508, 4.939309666406198]
  }
];

const cities = [
  {
    city: `Paris`,
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 10
    }
  },
  {
    city: `Cologne`,
    location: {
      latitude: 50.941357,
      longitude: 6.958307,
      zoom: 10
    }
  },
  {
    city: `Brussels`,
    location: {
      latitude: 50.85045,
      longitude: 4.34878,
      zoom: 10
    }
  },
  {
    city: `Amsterdam`,
    location: {
      latitude: 52.37403,
      longitude: 4.88969,
      zoom: 10
    }
  },
  {
    city: `Hamburg`,
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 10
    }
  },
  {
    city: `Dusseldorf`,
    location: {
      latitude: 51.22172,
      longitude: 6.77616,
      zoom: 10
    }
  }
];

export {hotels, cities};

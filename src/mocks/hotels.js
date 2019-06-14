const hotels = [
  {
    city: `Paris`,
    description: `Неняшное место в Париже`,
    price: 120,
    type: `Apartment`,
    rating: 93,
    photo: `img/apartment-01.jpg`,
    coordinates: [48.858093, 2.294694]
  },
  {
    city: `Paris`,
    description: `Няшное место в Париже`,
    price: 200,
    type: `Private Room`,
    rating: 80,
    photo: `img/apartment-02.jpg`,
    coordinates: [48.849127, 2.396053]
  },
  {
    city: `Cologne`,
    description: `Квартира в Кологне`,
    price: 80,
    type: `Private Room`,
    rating: 100,
    photo: `img/apartment-03.jpg`,
    coordinates: [50.999999, 6.982900]
  },
  {
    city: `Cologne`,
    description: `Колонна в Кологне`,
    price: 90,
    type: `Apartment`,
    rating: 80,
    photo: `img/apartment-02.jpg`,
    coordinates: [50.937778, 6.982968]
  },
  {
    city: `Amsterdam`,
    description: `Хостел в Амстере`,
    price: 90,
    type: `Apartment`,
    rating: 80,
    photo: `img/apartment-02.jpg`,
    coordinates: [52.364045, 4.878791]
  },
  {
    city: `Brussels`,
    description: `Хостел в Брюсселе`,
    price: 90,
    type: `Apartment`,
    rating: 80,
    photo: `img/apartment-02.jpg`,
    coordinates: [50.848023, 4.359833]
  },
  {
    city: `Dusseldorf`,
    description: `Нормальная хата в Дюссельдорфа`,
    price: 90,
    type: `Apartment`,
    rating: 80,
    photo: `img/apartment-02.jpg`,
    coordinates: [51.251528, 6.770632]
  }
];

const cities = [
  {
    city: `Paris`,
    location: {
      coordinates: [48.864716, 2.349014],
      zoom: 10
    }
  },
  {
    city: `Cologne`,
    location: {
      coordinates: [50.941357, 6.958307],
      zoom: 10
    }
  },
  {
    city: `Brussels`,
    location: {
      coordinates: [50.85045, 4.34878],
      zoom: 10
    }
  },
  {
    city: `Amsterdam`,
    location: {
      coordinates: [52.37403, 4.88969],
      zoom: 10
    }
  },
  {
    city: `Hamburg`,
    location: {
      coordinates: [53.551086, 9.993682],
      zoom: 10
    }
  },
  {
    city: `Dusseldorf`,
    location: {
      coordinates: [51.22172, 6.77616],
      zoom: 10
    }
  }
];

export {hotels, cities};

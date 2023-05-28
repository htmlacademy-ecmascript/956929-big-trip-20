const mockDestination = [
  {
    id: 0,
    name: 'Moscow',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    pictures : [
      {
        src: `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
        description: 'Moscow description city'
      },
      {
        src: `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
        description: 'Moscow description city'
      }
    ]
  },
  {
    id: 1,
    name: 'Kazan',
    description: 'Cras aliquet varius magna, non porta ligula feugiat eget.',
    pictures : [
      {
        src: `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
        description: 'Kazan description city'
      },
      {
        src: `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
        description: 'Kazan description city'
      }
    ]
  },
  {
    id: 2,
    name: 'Sochi',
    description: 'Таким образом консультация с широким активом позволяет оценить значение модели развития.',
    pictures : [
      {
        src: `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
        description: 'Sochi description city'
      },
      {
        src: `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
        description: 'Sochi description city'
      }
    ]
  },
  {
    id: 3,
    name: 'New York',
    description: 'Бла-бла-бла',
    pictures : [
      {
        src: `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
        description: 'New York description city'
      },
      {
        src: `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
        description: 'New York description city'
      }
    ]
  },
  {
    id: 4,
    name: 'Las Vegas',
    description: 'Ура Лас Вегас',
    pictures : [
      {
        src: `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
        description: 'Las Vegas description city'
      },
      {
        src: `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
        description: 'Las Vegas description city'
      }
    ]
  },
  {
    id: 5,
    name: 'Edinburgh',
    description: 'Какой то текст',
    pictures : [
      {
        src: `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
        description: 'Edinburgh description city'
      },
      {
        src: `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
        description: 'Edinburgh description city'
      }
    ]
  },
] ;


function getMockDestinations() {
  return mockDestination;
}

export {getMockDestinations};


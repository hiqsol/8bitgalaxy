import Card from "./Card.js";

class Deck {
  get(name) {
    let all = this.all();
    let specs = all[name];
    return specs ? new Card(this.parseSpecs(specs)) : null;
  }

  parseSpecs(s) {
    let type = typeof(s);
    if (type === 'object') {
      return s;
    }
    if (type === 'string') {
      return {};
    }
    
    throw new Error('wrong specs');
  }

  all() {
    return {
      'HumanBase7A': 'D7,A7,UP5',
      'Base7C': {
        race: 'Human',
        type: 'Base',
        level: 7,
        klass: 'Colonization',

        defense: 7,
        attack: 0,
        colonization: 7,
        production: 0,
        science: 0,
        cooperation: 2,

        utilizationType: 'Production',
        utilizationValue: 5,
      },

      'HumanBase6A': '',
      'Base6C': {
        race: 'AI',
        type: 'Base',
        level: 6,
        klass: 'Colonization',
        defense: 5,
        attack: 0,
        colonization: 6,
        production: 0,
        science: 0,
      },

      'Base5S': {
        race: 'Human',
        type: 'Base',
        level: 5,
        klass: 'Science',
        defense: 4,
        attack: 0,
        colonization: 0,
        production: 0,
        science: 5,

        utilizationType:  'Production',
        utilizationValue: 3,
      },

      'Colony4P': {
        race: 'Human',
        type: 'Colony',
        level: 4,
        klass: 'Production',
        defense: 8,
        attack: 0,
        colonization: 0,
        production: 6,
        science: 0,
      },
      'Colony5S': {
        race: 'Human',
        type: 'Colony',
        level: 5,
        klass: 'Science',
        defense: 5,
        science: 5,
      },
      'Colony6P': {
        race: 'Human',
        type: 'Colony',
        level: 6,
        klass: 'Production',
        defense: 8,
        attack: 0,
        colonization: 0,
        production: 5,
        science: 1,
      },

      'Ship1C': {
        race: 'Human',
        type: 'Ship',
        level: 2,
        klass: 'Colonization',
        defense: 1,
        attack: 0,
        colonization: 1,
        production: 0,
        science: 0,

        alternativeType: 'Science',
        alternativeValue: 1,
      },

      'Ship2A': {
        race: 'Human',
        type: 'Ship',
        level: 2,
        klass: 'Attack',
        defense: 2,
        attack: 2,
        colonization: 0,
        production: 0,
        science: 0,

        alternativeType: 'Science',
        alternativeValue: 1,
      },

      'Ship3S': {
        race: 'Human',
        type: 'Ship',
        level: 3,
        klass: 'Science',
        defense: 2,
        science: 3,

        alternativeType: 'Production',
        alternativeValue: 1,
      },
      'Ship4S': {
        race: 'Human',
        type: 'Ship',
        level: 4,
        klass: 'Science',
        defense: 2,
        science: 4,

        alternativeType: 'Production',
        alternativeValue: 1,
      },

      'Hero2A': {
        race: 'Human',
        type: 'Hero',
        level: 2,
        klass: 'Attack',
        defense: 2,
        attack: 2,
        colonization: 0,
        production: 0,
        science: 0,

        alternativeType: 'Science',
        alternativeValue: 1,
      }
    }
  }
}

export default Deck;

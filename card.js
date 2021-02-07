class Pos {
  constructor(c, x, y, m) {
    this.context = c;
    this.x_value = x;
    this.y_value = y;
    this.multiplier = m;
  }
  get c() { return this.context; }
  get x() { return this.x_value*this.multiplier; }
  get y() { return this.y_value*this.multiplier; }
  get m() { return this.multiplier; }

  move(x,y) {
    return new Pos(this.c, this.x_value+x, this.y_value+y, this.m);
  }

  type2color(type) {
    switch (type) {
      case 'Attack':
        return 'red';
      case 'Colonization':
        return 'green';
      case 'Production':
        return 'blue';
      case 'Science':
        return 'yellow';
    }
  }
}

class Card {
  constructor(specs) {
    this.specs = specs;
  }

  static getConstructor(type) {
    return eval(type+'Card');
  }

  draw(p) {
    this.setup(p);
    this.body(p);
    this.parts(p);
    this.border(p);
  }

  body(p) {
    p.c.fillStyle = 'white';
    p.c.fillRect(p.x, p.y, p.m*this.width, p.m*this.height);
  }

  border(p) {
    p.c.beginPath();
    p.c.strokeStyle = 'black';
    p.c.lineWidth = 4;
    p.c.rect(p.x, p.y, p.m*this.width, p.m*this.height);
    p.c.stroke();
  }

  drawPart(p, x, y, part, value, type) {
    var cons = CardPart.getConstructor(part);
    var part = new cons(value, type);
    part.draw(p.move(x, y));
  }

  getPartConstructor(type) {
    return eval(type+'Card');
  }

  setup(p) {
    p.c.textAlign='center'; 
    p.c.textBaseline = 'middle';
  }
}

class BaseCard extends Card {
  constructor(specs) {
    super(specs);
    this.width = 7;
    this.height = 4;
  }

  parts(p) {
    var s = this.specs;
    this.drawPart(p, 0, 0, 'Level', s.level, s.klass);
    this.drawPart(p, 1, 0, 'Defense', s.defense);
    this.drawPart(p, 2, 0, 'Attack', s.attack);
    this.drawPart(p, 3, 0, 'Colonization', s.colonization);
    this.drawPart(p, 4, 0, 'Production', s.production);
    this.drawPart(p, 5, 0, 'Science', s.science);
    this.drawPart(p, 6, 0, 'Utilization', s.utilizationValue ?? '', s.utilizationType ?? '');
  }
}

class ShipCard extends Card {
  constructor(specs) {
    super(specs);
    this.width = 4;
    this.height = 7;
  }

  parts(p) {
    var s = this.specs;
    this.drawPart(p, 0, 0, 'Level', s.level, s.klass);
    this.drawPart(p, 0, 1, 'Defense', s.defense);
    this.drawPart(p, 0, 2, 'Attack', s.attack);
    this.drawPart(p, 0, 3, 'Colonization', s.colonization);
    this.drawPart(p, 0, 4, 'Production', s.production);
    this.drawPart(p, 0, 5, 'Science', s.science);
    this.drawPart(p, 0, 6, 'Utilization', s.utilizationValue ?? '', s.utilizationType ?? '');
  }
}

class ColonyCard extends Card {
  constructor(specs) {
    super(specs);
    this.width = 5;
    this.height = 6;
  }

  parts(p) {
    var s = this.specs;
    this.drawPart(p, 0, 0, 'Level', s.level, s.klass);
    this.drawPart(p, 1, 0, 'Defense', s.defense);
    this.drawPart(p, 2, 0, 'Colonization', s.colonization);
    this.drawPart(p, 3, 0, 'Production', s.production);
    this.drawPart(p, 4, 0, 'Science', s.science);
  }
}

class HeroCard extends Card {
  constructor(specs) {
    super(specs);
    this.width = 5;
    this.height = 7;
  }

  parts(p) {
    var s = this.specs;
    this.drawPart(p, 0, 0, 'Level', s.level, s.klass);
    this.drawPart(p, 1, 0, 'Defense', s.defense);
    this.drawPart(p, 2, 0, 'Attack', s.attack);
    this.drawPart(p, 3, 0, 'Production', s.production);
    this.drawPart(p, 4, 0, 'Science', s.science);
  }
}

class CardPart {
  static getConstructor(type) {
    return eval(type+'Part');
  }

  constructor(value, type) {
    this.value = value;
    this.type = type;
  }

  draw(p) {
    this.symbol(p);
    this.border(p);
    this.number(p);
  }

  border(p) {
    p.c.beginPath();
    p.c.strokeStyle = 'black';
    p.c.lineWidth = 1;
    p.c.rect(p.x, p.y, p.m, p.m);
    p.c.stroke();
  }

  symbol(p) {
  }

  letterSymbol(p, style, letter) {
    if (! this.value) {
      return;
    }
    p.c.font = '900 '+ p.m + 'px Arial';
    p.c.fillStyle = style;
    p.c.fillText(letter, p.x + p.m/2, p.y + p.m/2 + 2);
  }

  number(p, style = 'black') {
    if (! this.value) {
      return;
    }
    p.c.font = '900 30px Arial';
    p.c.lineWidth = 2;
    p.c.strokeStyle = 'white';
    p.c.strokeText(this.value, p.x + p.m/2, p.y + p.m/2);
    p.c.fillStyle = style;
    p.c.fillText(this.value, p.x + p.m/2, p.y + p.m/2);
  }
}

class LevelPart extends CardPart {
  symbol(p) {
    p.c.fillStyle = p.type2color(this.type);
    p.c.fillRect(p.x, p.y, p.m, p.m);
  }

  number(p) {
    p.c.font = '900 40px Arial';
    p.c.fillStyle = 'black';
    p.c.fillText(this.value, p.x + p.m/2, p.y + p.m/2 + 2);
  }
}

class DefensePart extends CardPart {
  symbol(p) {
    this.letterSymbol(p, 'gray', 'D');
  }
}

class AttackPart extends CardPart {
  symbol(p) {
    this.letterSymbol(p, 'red', 'A');
  }
}

class ColonizationPart extends CardPart {
  symbol(p) {
    this.letterSymbol(p, 'green', 'C');
  }
}

class ProductionPart extends CardPart {
  symbol(p) {
    this.letterSymbol(p, 'blue', 'P');
  }
}

class SciencePart extends CardPart {
  symbol(p) {
    this.letterSymbol(p, 'yellow', 'S');
  }
}

class UtilizationPart extends CardPart {
  symbol(p) {
    this.letterSymbol(p, 'grey', 'U');
  }

  number(p) {
    super.number(p, p.type2color(this.type));
  }
}

class Specs {
  type = 'Ship';
  level = 2;
  klass = 'Attack'
  defense = 2;
  attack = 2;
  colonization = 0;
  production = 0;
  science = 0;

  alternativeType = 'Science';
  alternativeValue = 1;

  utilizationType = 'Production';
  utilizationValue = 1;

  cooperativeType = 'Attack';
  cooperativeValue = '2';
}

class Deck {
  get(name) {
    var all = this.all();
    var specs = all[name];
    var cons = Card.getConstructor(specs.type);
    return new cons(specs);
  }

  all() {
    return {
      'Base4A': {
        type: 'Base',
        level: 4,
        klass: 'Attack',
        defense: 4,
        attack: 4,
        colonization: 0,
        production: 0,
        science: 0,

        utilizationType: 'Production',
        utilizationValue: 5,
      },

      'Base5C': {
        type: 'Base',
        level: 5,
        klass: 'Colonization',
        defense: 4,
        attack: 0,
        colonization: 5,
        production: 0,
        science: 0,
      },


      'Colony6P': {
        type: 'Colony',
        level: 6,
        klass: 'Production',
        defense: 8,
        attack: 0,
        colonization: 0,
        production: 6,
        science: 1,
      },

      'Ship2A': {
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

      'Hero2A': {
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

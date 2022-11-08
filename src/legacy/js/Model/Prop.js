import Assert from "./Assert.js";

class Prop {
  constructor(name) {
    this._name = Prop.assertName(name);
  }

  get name() { return this._name; }

  static get Names()            { return Names; }
  static get Name()             { return Names.Name; }
  static get Type()             { return Names.Type; }
  static get Race()             { return Names.Race; }
  static get Level()            { return Names.Level; }
  static get Klass()            { return Names.Klass; }
  static get Requires()         { return Names.Requires; }
  static get Require1()         { return Names.Require1; }
  static get Require2()         { return Names.Require2; }
  static get Require3()         { return Names.Require3; }
  static get Defense()          { return Names.Defense; }
  static get Attack()           { return Names.Attack; }
  static get Colonization()     { return Names.Colonization; }
  static get Production()       { return Names.Production; }
  static get Science()          { return Names.Science; }
  static get Cooperation()      { return Names.Cooperation; }
  static get Alternative()      { return Names.Alternative; }
  static get Utilization()      { return Names.Utilization; }

  static assert(sample) {
    if (sample instanceof(Prop)) {
      return sample;
    }
    if (typeof(sample) === 'string') {
      return new Prop(sample);
    }
    if (typeof(sample) === 'object') {
      let c = sample.constructor.name;
      if (c.includes('Klass')) {
        return new Prop(sample.name);
      }
    }
    Assert.error('wrong Prop', sample);
  }

  static assertName(name) {
    if (typeof(name) !== 'string') {
      Assert.error('wrong Prop given', name);
    }
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    if (Names[name] === undefined) {
      Assert.error('wrong Prop name', name);
    }
    return Names[name];
  }
}

const Names = Object.freeze({
  Name:               'Name',
  Type:               'Type',
  Race:               'Race',
  Level:              'Level',
  Klass:              'Klass',
  Requires:           'Requires',
  Require1:           'Require1',
  Require2:           'Require2',
  Require3:           'Require3',
  Defense:            'Defense',
  Attack:             'Attack',
  Colonization:       'Colonization',
  Science:            'Science',
  Production:         'Production',
  Cooperation:        'Cooperation',
  Alternative:        'Alternative',
  Utilization:        'Utilization',
})

export default Prop;

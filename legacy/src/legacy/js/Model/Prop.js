import Assert from "./Assert.js";

class Prop {
  constructor(name) {
    this._name = Prop.assertName(name);
  }

  get name() { return this._name; }

  static get specs()            { return Names.specs; }
  static get altspecs()         { return Names.altspecs; }
  static get Names()            { return Names; }
  static get None()             { return Names.None; }
  static get Name()             { return Names.Name; }
  static get Type()             { return Names.Type; }
  static get Race()             { return Names.Race; }
  static get Text()             { return Names.Text; }
  static get Level()            { return Names.Level; }
  static get Extracost()        { return Names.Extracost; }
  static get Klass()            { return Names.Klass; }
  static get Power()            { return Names.Power; }
  static get Requires()         { return Names.Requires; }
  static get Require1()         { return Names.Require1; }
  static get Require2()         { return Names.Require2; }
  static get Require3()         { return Names.Require3; }
  static get Attack()           { return Names.Attack; }
  static get Colonization()     { return Names.Colonization; }
  static get Production()       { return Names.Production; }
  static get Science()          { return Names.Science; }
  static get Cooperation()      { return Names.Cooperation; }
  static get Alternative()      { return Names.Alternative; }

  static isPlusable(name) {
    return name === Prop.Cooperation || name === Prop.Extracost;
  }

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

  static fromPrefix(prefix) {
    switch (prefix) {
      case 'a': return Prop.Alternative;
      case 'c': return Prop.Cooperation;
      case 'e': return Prop.Extracost;
      case 'l': return Prop.Level;
      case 'p': return Prop.Power;
      case 'r': return Prop.Requires;
    }
    return null;
  }

  static assertName(name) {
    if (typeof(name) !== 'string') {
      Assert.error('wrong Prop given', name);
    }
    if (Names[name]) return name;
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    if (Names[name] === undefined) {
      Assert.error(`wrong Prop name '${name}'`, name);
    }
    return Names[name];
  }
}

const Names = Object.freeze({
  Name:               'Name',
  None:               'None',
  Type:               'Type',
  Race:               'Race',
  Text:               'Text',
  Level:              'Level',
  Extracost:          'Extracost',
  Klass:              'Klass',
  Power:              'Power',
  Requires:           'Requires',
  Require1:           'Require1',
  Require2:           'Require2',
  Require3:           'Require3',
  Attack:             'Attack',
  Colonization:       'Colonization',
  Science:            'Science',
  Production:         'Production',
  Cooperation:        'Cooperation',
  Alternative:        'Alternative',
  specs:              'specs',
  altspecs:           'altspecs',
})

export default Prop;

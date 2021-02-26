class Spec {
  constructor(name) {
    this._name = Spec.assertName(name);
  }

  get name() { return this._name; }

  static get Names()            { return Names; }
  static get Name()             { return Names.Name; }
  static get Type()             { return Names.Type; }
  static get Race()             { return Names.Race; }
  static get Level()            { return Names.Level; }
  static get Klass()            { return Names.Klass; }
  static get Defense()          { return Names.Defense; }
  static get Attack()           { return Names.Attack; }
  static get Colonization()     { return Names.Colonization; }
  static get Production()       { return Names.Production; }
  static get Science()          { return Names.Science; }
  static get Cooperation()      { return Names.Cooperation; }
  static get UtilizationKlass() { return Names.UtilizationKlass; }
  static get UtilizationValue() { return Names.UtilizationValue; }

  static assert(sample) {
    if (sample instanceof(Spec)) {
      return sample;
    }
    if (typeof(sample) === 'string') {
      return Spec.fromString(sample);
    }
    throw new Error('not a Spec:' + sample.constructor.name)
  }

  static fromString(name) { return new Spec(name); }

  static assertName(name) {
    if (typeof(name) !== 'string') {
      throw new Error('wrong Spec given: ' + typeof(name));
    }
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    if (Names[name] === undefined) {
      throw new Error('wrong Spec name: ' + name)
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
  Defense:            'Defense',
  Attack:             'Attack',
  Colonization:       'Colonization',
  Science:            'Science',
  Production:         'Production',
  Cooperation:        'Cooperation',
  Utilizationklass:   'UtilizationKlass',
  UtilizationKlass:   'UtilizationKlass',
  Utilizationvalue:   'UtilizationValue',
  UtilizationValue:   'UtilizationValue',
})

export default Spec;

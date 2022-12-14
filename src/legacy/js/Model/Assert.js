class Assert {
  static string(sample) {
    if (typeof(sample) === 'string') {
      return sample;
    }
    throw new Error('not a string:' + typeof(sample));
  }

  static arrayOf(sample, type) {
    Assert.array(sample);
    if (!sample[0] instanceof type) Assert.error('not array of '+type.name, sample);
    return sample;
  }
  static array(sample) {
    if (!Array.isArray(sample)) Assert.error('not array', sample);
  }

  static assert(condition, text, sample = null) {
    if (!condition) Assert.error(text, sample);
  }

  static error(text, sample) {
    console.log(sample);
    throw new Error(text);
  }
}

export default Assert;

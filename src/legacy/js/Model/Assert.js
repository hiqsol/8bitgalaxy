class Assert {
  static string(sample) {
    if (typeof(sample) === 'string') {
      return sample;
    }
    throw new Error('not a string:' + typeof(sample));
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

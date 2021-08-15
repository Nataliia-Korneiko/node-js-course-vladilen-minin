module.exports = {
  ifeq(a, b, options) {
    // console.log(a, b);
    if (a == b) {
      return options.fn(this);
    }
    return options.inverse(this);
  },
};

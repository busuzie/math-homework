const mathHomework = {
  add: function(a: number, b: number): number {
    return a + b;
  },
  subtract: function(a: number, b: number): number {
    return a - b;
  },
  multiply: function(a: number, b: number): number {
    return a * b;
  },
  divide: function(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  },
};

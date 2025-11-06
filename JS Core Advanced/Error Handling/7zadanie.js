function safeDivide(a, b) {
  try {
    if (b === 0) throw new Error("Деление на ноль невозможно");
    return a / b;
  } catch (error) {
    return error.message;
  }
}

console.log(safeDivide(10, 0)); 

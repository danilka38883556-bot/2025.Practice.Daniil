function sumFirstLastDigit(num) {
  const str = Math.abs(num).toString();
  const first = parseInt(str[0]);
  const last = parseInt(str[str.length - 1]);
  return first + last;
}

console.log(sumFirstLastDigit(12345)); 

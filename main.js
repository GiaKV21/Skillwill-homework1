//დავალება 1

function checkEquality(a, b) {
  if (String(a) === String(b)) {
    return "ტოლია";
  } else {
    return "არ არის ტოლი";
  }
}

console.log(checkEquality(5, "5"));
console.log(checkEquality(10, 10));
console.log(checkEquality("hello", "hi"));
console.log(checkEquality(true, "true"));

//დავალება 2

function toCelsius(fahrenheit) {
  if (isNaN(fahrenheit)) {
    return false;
  }
  return ((fahrenheit - 32) * 5) / 9;
}
console.log(toCelsius(100));
console.log(toCelsius("abc"));
console.log(toCelsius("50"));

//დავალება 3

function calculate(a, b, operation) {
  if (isNaN(a)) {
    return false;
  }

  if (isNaN(b)) {
    return false;
  }

  const x = Number(a);
  const y = Number(b);

  if (operation === "+") {
    return x + y;
  } else if (operation === "-") {
    return x - y;
  } else if (operation === "*") {
    return x * y;
  } else if (operation === "/") {
    if (y === 0) {
      return false;
    }
    return x / y;
  } else {
    return false;
  }
}

console.log(calculate(10, 5, "+"));
console.log(calculate(10, 5, "-"));
console.log(calculate(10, 5, "*"));
console.log(calculate(10, 5, "/"));
console.log(calculate(10, "abc", "+"));
console.log(calculate(10, 5, "%"));
console.log(calculate(10, 0, "/"));

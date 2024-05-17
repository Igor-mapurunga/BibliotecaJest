function Primo(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false; 
    }
  }
  return true; 
}
function isInteiro(numero) {
  if (!Number.isInteger(numero)) {
    return false;
  }
  return true;
}
function somatorio(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
function mdc(a, b) {
  if (b === 0) {
    return a;
  }
  return mdc(b, a % b);
}
console.log(mdc(18, 24))

function quicksort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quicksort(left), pivot, ...quicksort(right)];
}


describe('Testes para a função Primo', () => {
  test('primeiro teste', () => {
    expect(Primo(2)).toBe(true);
  }),
  test('segundo teste', () => {
    expect(Primo(4)).toBe(false);
  })
})

describe('Testes para a função isInteiro', () => {
  test('primeiro teste', () => {
    expect(isInteiro(1.5)).toBe(false);
  }),
  test('segundo teste', () => {
    expect(isInteiro(2)).toBe(true);
  })
})

describe('Testes para a função somatorio', () => {
  test('primeiro teste', () => {
    expect(somatorio(5)).toBe(15);
  }),
  test('segundo teste', () => {
    expect(somatorio(3)).toBe(6);
  })
})
describe('Testes para a função fibonacci', () => {
  test('primeiro teste', () => {
    expect(fibonacci(0)).toBe(0);
  }),
  test('segundo teste', () => {
    expect(fibonacci(13)).toBe(233);
  })
})

describe('Testes para a função mdc', () => {
  test('primeiro teste', () => {
    expect(mdc(18, 24)).toBe(6);
  }),
  test('segundo teste', () => {
    expect(mdc(15, 45)).toBe(15);
  })
})

describe('Testes para a função quicksort', () => {
  test('primeiro teste', () => {
    expect(quicksort([10, 5, 2, 3])).toEqual([2, 3, 5, 10]);
  }),
  test('segundo teste', () => {
    expect(quicksort([4, 2, 9, 1, 5, 3, 7, 6, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  })
})

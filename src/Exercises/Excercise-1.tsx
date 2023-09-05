// 1. funkcję countCharacters liczącą ilość znaków w stringu

export const countCharacters = (string: string): number => string.length;

// 2. funkcję isEven mówiącą czy liczba jest parzysta czy nie (zwracająca boolean)

export const isEven = (number: number): boolean =>
  number % 2 === 0 ? true : false;

// // 3. funkcję getParityMessage która na podstawie boolean zwraca
//  komunikat ta liczba jest parzysta/ta liczba nie jest parzysta

export const getParityMessage = (boolean: boolean): string =>
  boolean ? "jest parzysta" : "nie jest parzysta";

// 4. funkcję processString która na podstawie stringa, wypisuje
//  go, wypisuje liczbę jego znaków oraz informację czy liczba znaków
// jest/nie jest parzysta. Funkcja ta powinna wywoływać 3
// powyższe funkcje (zwraca string)

export const processString = (string: string): string => {
  const number = countCharacters(string);
  const boolean = isEven(number);
  return `${string} ma ${number} znaków i ${getParityMessage(boolean)}`;
};

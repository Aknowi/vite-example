interface AnalyzeResult {
  string: string;
}

function Exercise7({ string }: AnalyzeResult) {
  function countCharacters(string: string): number {
    return string.length;
  }

  function isEven(number: number): boolean {
    return number % 2 === 0;
  }

  function getParityMessage(isEven: boolean): string {
    return isEven ? "This number is even" : "This number is odd";
  }

    if (!string) {
      string = "Nie podano stringa";
      return string;
    }
    const number = countCharacters(string);
    const boolean = isEven(number);
    const isEvenMessage = getParityMessage(boolean);

  return (
    <div className="card">
      <h2>Exercise 7</h2>
      <p>User name: {string}</p>
      <p>Name's number of letter: {number}</p>
      <p>Is number even?: {isEvenMessage}</p>
    </div>
  );
}

export default Exercise7;

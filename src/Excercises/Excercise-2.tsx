import { useState } from "react";

// Type null

// Type undefiend

type Name = "Ania" | "Kuba" | "Stranger";

function Exercise2() {
  const [greeting, setGreeting] = useState<string | null>(null);

  function greeting2(greet?: string, name?: Name): string {
    if (!greet) {
      greet = "Hello";
    }

    if (!name) {
      name = "Stranger";
    }

    return `${greet} ${name}`;
  }

  return (
    <div className="card">
      <h2>Exercise 2</h2>
      {greeting ? greeting : "Hello stranger"}
      <button onClick={() => setGreeting("Hello Ania")}>Change greeting</button>
      {greeting2("Hi", "Kuba")}
    </div>
  );
}

export default Exercise2;

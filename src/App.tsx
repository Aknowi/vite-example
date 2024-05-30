import "./App.css";
import Excercise1 from "./Excercises/Excercise-1";
import Excercise2 from "./Excercises/Excercise-2";
import Excercise3 from "./Excercises/Excercise-3";
import Excercise7 from "./Excercises/Excercise-7";

const person = {
  name: "Anton",
  age: 98,
  isAdmin: false,
};

function App() {
  return (
    <>
      <h1>Typescript training</h1>
      <Excercise1 />
      <Excercise2 />
      <Excercise3 name={person.name} />
      <Excercise7 string={person.name}/>
    </>
  );
}

export default App;

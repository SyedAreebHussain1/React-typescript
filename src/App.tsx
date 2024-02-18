import React, { useState } from "react";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Container } from "./components/Container";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { LoggedIn } from "./components/state/LoggedIn";
import { User } from "./components/state/User";
import { Counter } from "./components/state/Counter";
const App: React.FC = () => {
  const [state, setState] = useState("");
  const personName = { first: "Bruce", last: "Wayne" };
  const personList = [
    { first: "John", last: "sina" },
    { first: "Varun", last: "Kumar" },
    { first: "Princess", last: "Diana" },
  ];
  return (
    <div className="App">
      {/* <Greet name="areeb" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={personList} />
      <Heading heading="Test">Placeholder text</Heading>
      <Status status="success" />
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Greet name="Saim" messageCount={10} isLoggedIn={true} /> */}
      {/* Event props T-6*/}
      {/* <Button handleClick={(e, id) => console.log("Button click", e, id)} />
      <br />
      <Input
        type="text"
        value={state}
        handleChange={(e) => setState(e.target.value)}
      />
      <Button handleClick={(e) => console.log(state)} /> */}
      {/* styling  */}
      {/* <Container styles={{ border: "1px solid red", padding: "1rem" }} /> */}

      {/* // props types and tips */}
      {/* <Person name={personName} />
      <PersonList names={personList} /> */}
      {/* props topic end */}

      {/* <LoggedIn /> */}
      {/* <User /> */}

      <Counter />
    </div>
  );
};

export default App;

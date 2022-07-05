import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });
  const changeMessage = () => {
    setPerson({ ...person, message: "Hello worldino" });
  };
  // we can as well set as many statevalues
  // const [name, setName] = useState('peter') etc etc
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>
        Change msg
      </button>
    </>
  );
};

export default UseStateObject;

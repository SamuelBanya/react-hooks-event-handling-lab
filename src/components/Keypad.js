// Code Keypad Component Here
import React from "react";

function Keypad() {
  console.log("Keypad test");

  function enterPasswordEvent() {
    console.log("Entering password...");
  }

  return <input onChange={() => enterPasswordEvent()} type="password" />;
}

export default Keypad;

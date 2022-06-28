// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
  console.log("Test");

  function focusEventHandler() {
    console.log("Good!");
  }

  function blurEventHandler() {
    console.log("Hey! Eyes on me!");
  }

  return (
    <button onFocus={focusEventHandler} onBlur={blurEventHandler}>
      Eyes on me
    </button>
  );
}

export default EyesOnMe;

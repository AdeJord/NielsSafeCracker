import React, { useState } from "react";
import GuessCode1 from "./GuessCode1";
import GuessCode from "./GuessCode";
import Modal from "../UiElements/Modal";
import "../App.css";

const Game = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [code, setCode] = useState([]);
  const [input, setInput] = useState([]);
  const [inGame, setInGame] = useState(false);
  const [codeLength, setCodeLength] = useState(code);

  const codeToNumber = code.toString();

  const SubmitCodeHandler = (e) => {
    setCode(input);
    setShowModal(true);
    // convert final code array into a number then log
    //maybe set the Play button to only work if number has been submitted/confirmed

    console.log(code);
    console.log(`Code set ${code}`);
  };

  //NEED TO MAKE IT SO THE CODE ENTERED IS NOT ALL OF THE NUMBERS SEPERATELY
  const inputChangeHandler = (e) => {
    setInput(e.target.value);
    setCode(e.target.value);
  };

  const modalCloseHandler = () => {
    setShowModal(false);
  };

  const playGameHandler = () => {
    setInGame(true);
    setCodeLength(code.length);
    // console.log(`Code set ${code}`);
  };

  if (inGame === false) {
    return (
      <>
        {showModal && (
          <Modal
            background='gray'
            header="You have submitted code "
            content={code}
            footer="MAKE A NOTE OF THIS CODE!!!  Once the game starts, 
            the only way to get back to this page is to enter the correct code, Click to continue"
            onClick={modalCloseHandler}
          />
        )}

        <p>Enter Code</p>
        <input
          onChange={inputChangeHandler}
          style={{
            height: "50px",
            width: "200px",
            fontSize: "40px",
            textAlign: "center",
          }}
          type="number"
        />
        <br />
        <button onClick={SubmitCodeHandler} type="button">
          SUBMIT CODE
        </button>
        <br />
        <button type="button" onClick={playGameHandler}>
          PLAY GAME
        </button>
      </>
    );
  } else {
    return (
      <>
        <h1>Crack The Code</h1>
        <GuessCode1
          charInCode={codeLength}
          code={code}
          codeToNumber={codeToNumber}
        />
      </>
    );
  }
};

export default Game;

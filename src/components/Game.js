import React, { useState } from "react";
import GuessCode from "./GuessCode";
import Modal from "../UiElements/Modal";
import "../App.css";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  header: {
    fontSize: "60px",
  },
  input: {
    height: "10vh",
    width: "4em",
    fontSize: "4em",
    textAlign: "center",
    borderRadius: "5px",
    marginBottom: "20px",
    borderRadius: "30px",
  },
  submitBtn: {
    height: "10vh",
    width: "55vw",
    //TODO make this more responsive
    fontSize: "4.5vw",
    textAlign: "center",
    borderRadius: "30px",
    background: 'gray',
    color: 'white'
  },
  playBtn: {
    background: 'gray',
    color: 'white',
    height: "10vh",
    width: "55vw",
    fontSize: "5vw",
    textAlign: "center",
    borderRadius: "30px",
    
  },
});

const Game = (props) => {
  const classes = useStyles();

  const [showModal, setShowModal] = useState(false);
  const [code, setCode] = useState([]);
  const [input, setInput] = useState([]);
  const [inGame, setInGame] = useState(false);
  const [codeLength, setCodeLength] = useState(code);
  const [inputValid, setInputIsValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const codeToNumber = code.toString();

  const SubmitCodeHandler = (e) => {
    setCode(input);
    setShowModal(true);
    setSubmitted(true);
    // convert final code array into a number then log
    //maybe set the Play button to only work if number has been submitted/confirmed
    //Make sure the number entered is less than 6 or more than 0

    if (!submitted) {
      return;
    }
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
        {showModal && <Modal content={code} onClick={modalCloseHandler} />}

        <p className={classes.header}>Enter Code</p>
        <input
          onChange={inputChangeHandler}
          className={classes.input}
          type="number"
        />
        <br />
        {!submitted && (
          <button
            className={classes.submitBtn}
            onClick={SubmitCodeHandler}
            type="button"
            // disabled={!submitted} // Disable the button if 'submitted' is false
          >
            SUBMIT CODE
          </button>
        )}
        <br />
        {submitted && (
          <button
            className={classes.playBtn}
            type="button"
            onClick={playGameHandler}
          >
            PLAY GAME
          </button>
        )}
      </>
    );
  } else {
    return (
      <>
        <h1>Crack The Code</h1>
        <GuessCode
          charInCode={codeLength}
          code={code}
          codeToNumber={codeToNumber}
        />
      </>
    );
  }
};

export default Game;

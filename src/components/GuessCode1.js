import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import SuccessModal from "../UiElements/SuccessModal";
import FailModal from "../UiElements/FailModal";
import KeyPad from "./KeyPad";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
    width: "90%",
    height: "95%",
    fontSize: "1.3em",
    borderRadius: "15px",
  },
}));

const NumPad = (props) => {
  const classes = useStyles();
  const codeLength = props.charInCode;
  const [guessedCodeState, setGuessedCodeState] = useState(
    Array(codeLength).fill("") // if you put something in here the numbers will not show in the box (Not and empty string)
  );
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailModal, setShowFailModal] = useState(false);


// WE NEED TO WORK HERE!!!  SET THE NEW BOXES WITH CORRECTLTY GUESSED NUMBERS (TO GREEN AND THE WRONG ONES TO RED)MAYBE??

  const restart = () => {

    //*******************************MY BIT************************************* */

    // compare the guessed code to the code
    const CheckCode = (props) => {
      console.log("checkCode");
      const guessedCode = guessedCodeState.join("");
      const code = props.code;
      if (guessedCode === code) {
        return true;
        console.log("correct");
      } else {
        return false;
        console.log("incorrect");
      }
    };

<CheckCode 
code='123'/>;

    //*******************************MY BIT************************************* */



    setGuessedCodeState(Array(codeLength).fill(""));
  };

  const footerLeftClick = () => {
    window.location.reload();
  };

  const footerRightClick = () => {
    setShowSuccessModal(false);
    restart();
  };

  const failModalCloseHandler = () => {
    setShowFailModal(false);
    restart();
  };
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  

  const handleNumberClick = async (number) => {
    var setCode = props.code;
    var guessedCode = props.codeToNumber;






    if (guessedCodeState.filter((val) => val === "").length > 0) { // Checks all the boxes are not filled? or filled?
      // Handle the number click event
      const updatedCodeState = [...guessedCodeState]; // Create a new array with the current state values
      const emptyBoxIndex = updatedCodeState.findIndex((val) => val === ""); // finds the first empty value in the array so it can be replaced with nummber (Below)
      updatedCodeState[emptyBoxIndex] = number; // Update the clicked number in the corresponding empty box from above
      setGuessedCodeState(updatedCodeState); // Update the state with the new array
      await delay(1500);

      if (updatedCodeState.filter((val) => val === "").length === 0) {
        const stringCode = updatedCodeState.join("");
        // If all the boxes are filled, perform the necessary action
        if (setCode === stringCode) {
          //Checks the codes match
          setShowSuccessModal(true);
        } else {
          setShowFailModal(true);
        }
      }
    }
  };






  const BoxContainer = () => {
    const renderBoxes = () => {
      const boxes = [];

      for (let i = 0; i < codeLength; i++) {
        boxes.push(
          <div key={i} className="box" id={"id" + [i]}>
            {guessedCodeState[i]}
          </div>
        );
      }
      return boxes;
    };

    const boxes = renderBoxes(codeLength);

    return <div className="box-container">{boxes}</div>;
  };

  return (
    <>
      {showSuccessModal && (
        <SuccessModal
          header="CONGRATULATIONS"
          content="YOU CRACKED THE CODE!"
          footerLeftClick={footerLeftClick}
          footerRightClick={footerRightClick}
        />
      )}
      {showFailModal && <FailModal onClick={failModalCloseHandler} />}
      <BoxContainer />
      <KeyPad 
      handleNumberClick = {handleNumberClick}/>
    </>
  );
};

export default NumPad;

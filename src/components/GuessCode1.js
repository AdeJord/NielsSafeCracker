import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Modal from "../UiElements/Modal";
import FailModal from "../UiElements/FailModal";

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
    Array(codeLength).fill("")
  );
  const [showModal, setShowModal] = useState(false);
  const [showFailModal, setShowFailModal] = useState(false);
  const restart = () => {
    setGuessedCodeState(Array(codeLength).fill(''));
  };

  const modalCloseHandler = () => {
    setShowModal(false);
  };

  const failModalCloseHandler = () => {
    setShowFailModal(false);
    restart()
    // setGuessedCodeState([]) // this bit empties the boxes but needs to reset the game! how do I do that?
  };

  const handleNumberClick = (number) => {
    var setCode = props.code;
    var guessedCode = props.codeToNumber;
    console.log(setCode);
    console.log(guessedCode);

    if (guessedCodeState.filter((val) => val === "").length > 0) {
      // Handle the number click event
      console.log(`Clicked number: ${number}`);
      const updatedCodeState = [...guessedCodeState]; // Create a new array with the current state values
      const emptyBoxIndex = updatedCodeState.findIndex((val) => val === "");
      updatedCodeState[emptyBoxIndex] = number; // Update the clicked number in the corresponding empty box
      setGuessedCodeState(updatedCodeState); // Update the state with the new array

      console.log("guessedCodeState: " + updatedCodeState);
      console.log("number: " + number);
      console.log("END LOOP");

      if (updatedCodeState.filter((val) => val === "").length === 0) {
        const stringCode = updatedCodeState.join("");
        // If all the boxes are filled, perform the necessary action

        if (setCode === stringCode) //Checks the codes match
        {
          // console.log('props.code ' + (props.code));
          // console.log('GUESSED CODE (string)  ' + stringCode)
          // console.log('SUCCESS!!!!!!!!!!!!!!!!!!!!!')
          // console.log(`props.code ${props.code}`)
          // console.log(`setCode ${setCode}`)
          // console.log(`Guessed Code ${guessedCode}`) // Returns the SetCode (111) whereas I typed 123
          setShowModal(true);
          console.log("SUCCESS");
        } else {
          console.log("FAIL");
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
      {showModal && (
        <Modal
          header="SUCCESS "
          content="WELL DONE!!!"
          footer="You did it!!"
          onClick={modalCloseHandler}
        />
      )}
      {showFailModal && (
        <FailModal
          header="INCORRECT "
          content="Try Again"
          onClick={failModalCloseHandler}
        />
      )}
      <BoxContainer />
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => handleNumberClick(1)}
            >
              1
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => handleNumberClick(2)}
            >
              2
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => handleNumberClick(3)}
            >
              3
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => handleNumberClick(4)}
            >
              4
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => handleNumberClick(5)}
            >
              5
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => handleNumberClick(6)}
            >
              6
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => handleNumberClick(7)}
            >
              7
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => handleNumberClick(8)}
            >
              8
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => handleNumberClick(9)}
            >
              9
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              className={classes.button}
              disabled
            ></Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => handleNumberClick(0)}
            >
              0
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              className={classes.button}
              disabled
            ></Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default NumPad;

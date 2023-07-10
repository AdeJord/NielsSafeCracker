import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import SuccessModal from "../UiElements/SuccessModal";
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
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailModal, setShowFailModal] = useState(false);

  const restart = () => {
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
  // need to understand the below line
  const delay = ms => new Promise(res => setTimeout(res, ms));
 // 

 
  const handleNumberClick = async (number) => {

    var setCode = props.code;
    var guessedCode = props.codeToNumber;


    if (guessedCodeState.filter((val) => val === "").length > 0) {
      // Handle the number click event
      const updatedCodeState = [...guessedCodeState]; // Create a new array with the current state values
      const emptyBoxIndex = updatedCodeState.findIndex((val) => val === "");
      updatedCodeState[emptyBoxIndex] = number; // Update the clicked number in the corresponding empty box
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
      {showFailModal && (
        <FailModal
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
            {/* <Button
              color="primary"
              variant="contained"
              className={classes.button}
              disabled
            ></Button> */}
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
            {/* <Button
              color="primary"
              className={classes.button}
              disabled
            ></Button> */}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default NumPad;

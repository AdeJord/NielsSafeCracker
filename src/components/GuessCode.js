import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

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

const updateBox = () => {
  
}

const NumPad = (props) => {
  const classes = useStyles();
  var codeLength = props.charInCode;
  var guessedCodeArray = [];

  const [test, setTest] = useState('tit');
  const [inputValue, setInputValue] = useState(props.numberClicked)

  const [guessedCodeState, setGuessedCodeState] = useState(guessedCodeArray);
  const [guessedNumState, setGuessedNumState] = useState('');
  var numberClicked = guessedNumState

  // const handleNumberClick = (number) => {

  //   if (guessedCodeArray.length <= codeLength){
  //   // Handle the number click event
  //   console.log(`Clicked number: ${number}`);
  //   guessedCodeArray.push(number);
  //   setGuessedNumState(guessedCodeArray)

    
  //   //why does this do what it does? Only log the number clicked?
  //   // setTest(number)

  //   //SET INNERTEXT OF BOX TO NUMBER?!?!!??!?!!?

  //   console.log("guessedCodeArray :- " + guessedCodeArray);
  //   console.log("guessedCodeState :- " + guessedCodeState);
  //   console.log("number :- " + number);
  //   console.log('END LOOP')
  //   } else {console.log('DONE')}
  // };

  const handleNumberClick = (number) => {
    if (guessedCodeArray.length < codeLength) {
      console.log(`Clicked number: ${number}`);
      const updatedCodeArray = [...guessedCodeArray, number]; // Create a new array with the updated values
      guessedCodeArray = updatedCodeArray; // Update the reference of the local variable
      setGuessedCodeState(updatedCodeArray); // Update the state with the new array
      setGuessedNumState(updatedCodeArray.join('')); // Update the state with the joined string of numbers
  
      console.log("guessedCodeArray: " + guessedCodeArray);
      console.log("guessedCodeState: " + guessedCodeState);
      console.log("number: " + number);
      console.log('END LOOP');
  
      if (updatedCodeArray.length === codeLength) {
        // If all the boxes are filled, perform the necessary action
        console.log('DONE');
      }
    } else {
      console.log('DONE');
    }
  };

  // from ai **************But adjusted my me**************
  //RETURNS AS MANY BOXES AS THERE ARE CHARACTERS IN THE CODE



  const BoxContainer = (number) => {
    const renderBoxes = () => {
      const boxes = [];

      // THE PROBLEM - It is rendering the boxes empty (As it should), BUT, when a button is clicked
      // it is saving it into the guessed CodeArray and the guessedCodeState but not rendering it
      // in the box.
      // THE ANSWER? i think? - It needs to update the guessedCodeState/guessedCodeArray onClick of the button
      // (which it does) AND ALSO update the box content (Which it does NOT).
      // ie. When Button 1 is clicked, (it already updates the array and state),
      // BUTS IT NEEDS TO TELL someone(WHO?) That it needs to rerender with the new the contents of the
      // box with the number of the button that has just been pressed.
      // ie. 1.

      //INNERTEXT???
      //Set Box to a blank string, then change the innertext when button is pressed?

      for (let i = 0; i < codeLength; i++) {
        boxes.push(
          <div key={i} className="box" id={"id" + [i]}>
            {guessedCodeState[i]}
          </div>
        );
      }
      return boxes;
    };

    //*********is (codeLength) really required? */
    const boxes = renderBoxes(codeLength);

    return <div className="box-container">{boxes}</div>;
  };
  // end from ai *********************************************

  return (
    // as many boxes as there is numbers in the code
    <>
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
      <p>SUBMIT</p>
    </>
  );
};

export default NumPad;

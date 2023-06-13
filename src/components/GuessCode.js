import React, { useState } from "react";
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
    borderRadius: '15px'
  },
}));

const NumPad = (props) => {
  const classes = useStyles();
  var codeLength = props.charInCode;
  const handleNumberClick = (number) => {
    // Handle the number click event
    console.log(`Clicked number: ${number}`);
  };

  // from ai *************************************************
  const BoxContainer = () => {
    const renderBoxes = () => {

      const boxes = [];
  
      for (let i = 0; i < codeLength; i++) {
        boxes.push(<div key={i} className="box"></div>);
        console.log(codeLength)
      }
      return boxes;
    }
  

    // const charInCode = inputNumber.toString().length;
    const boxes = renderBoxes(codeLength);
    console.log(codeLength)
  
    return (
      <div className="box-container">
        {boxes}
      </div>
    );
  }
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

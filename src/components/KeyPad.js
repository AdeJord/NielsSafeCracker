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


const KeyPad = (props) => {

  const classes = useStyles();

return (
    <>
    <div className={classes.root}>
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => props.handleNumberClick(1)}
        >
          1
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => props.handleNumberClick(2)}
        >
          2
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => props.handleNumberClick(3)}
        >
          3
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => props.handleNumberClick(4)}
        >
          4
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => props.handleNumberClick(5)}
        >
          5
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => props.handleNumberClick(6)}
        >
          6
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => props.handleNumberClick(7)}
        >
          7
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => props.handleNumberClick(8)}
        >
          8
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => props.handleNumberClick(9)}
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
          onClick={() => props.handleNumberClick(0)}
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
)
};


export default KeyPad;

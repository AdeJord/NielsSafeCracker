import logo from "./logo.svg";
import "./App.css";
import Game from "./components/Game";
import { useState, useRef } from "react";
import GuessCode from "./components/GuessCode";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    background: "gray",
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    alignItems: "center",
  },
  passwordInput: {
    height: "30px",
    width: "200px",
    fontSize: "20px",
    textAlign: "center",
  },
});

function App() {
  const classes = useStyles();

  const [auth, setAuth] = useState(false);
  const passwordRef = useRef(null);
  const [password, setPassword] = useState("");

  const passwordInput = (e) => {
    setPassword(e.target.value);
  };

  const passwordSubmit = () => {
    // check entered password hash is the same as hashedPassword
    console.log(password);
    if (password === "N13l02") {
      setAuth(true);
    } else {
      alert("Incorrect Password Entered, Try again");
      //clear what has been entered for password
      if (passwordRef.current) {
        passwordRef.current.value = "";
      }
    }
  };

  if (auth) {
    return (
      <div className="App">
        <header className="App-header">
          <Game />
        </header>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <h2> Enter Password </h2>
        <input
          type="password"
          onChange={passwordInput}
          className={classes.passwordInput}
          ref={passwordRef}
        ></input>
        <button
          type="button"
          onClick={passwordSubmit}
          className={classes.passwordInput}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default App;

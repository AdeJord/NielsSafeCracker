import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  modalRoot: {
    boxShadow: "5px 10px 35px 10px #7C7373",
    borderRadius: "10px",
    position: "fixed",
    padding: "10px",
    top: "12%",
    left: "13.5%",
    width: "70vw",
    height: "auto",
    background: "#69b871",
    zIndex: "1",
  },
  modalHeader: {
    textAlign: "center",
    fontSize: "1em",
  },
  modalContent: {
    borderRadius: "3px",
    textAlign: "center",
    fontSize: "50px",
    background: "white",
    // '@media (max-width: 768px)' : {
    //   fontSize: "small",
    // }
  },
  modalFooter: {
    paddingTop: "30px",
    paddingBottom: "20px",
    textAlign: "center",
    fontSize: "3vh",
  },
});

const Modal = (props) => {
  const classes = useStyles();

  const content = (
    <div onClick={props.onClick}>
      <div className={classes.modalRoot}>
        <div className={classes.modalHeader}>
          <h2>You have submitted code</h2>
        </div>
        <div className={classes.modalContent}>{props.content}</div>
        <div className={classes.modalFooter}>
          <strong>MAKE A NOTE OF THIS NUMBER!!!</strong>
          <p> Once the game starts, the only way to get
          back to this page is to enter the correct code or start again!</p>
          <p style={{ color: 'blue'}}> CONTINUE</p>
          <p>To Play</p>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal"));
};

export default Modal;

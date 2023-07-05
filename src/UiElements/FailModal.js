import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  modalRoot: {
    border: '6px solid black',
    borderRadius: "20px",
    position: "fixed",
    top: "10%",
    left: "12%",
    width: "75vw",
    height: "auto",
    background: "#222222",
    boxShadow: '0px 0px 20px 10px #FF0000',
  },
  modalHeader: {
    borderRadius: "10px",
    paddingTop: '50px',
    textAlign: "center",
    background: '#222222',
    height: '40vh',
    fontSize: "8vw",
    color: "#FF0000",
    letterSpacing: "9px",
    textShadow: ".7vw .2vh .5vh tomato",
  },
  modalContent: {
    borderRadius: "10px",
    textAlign: "center",
    fontSize: "90px",
    background: "#990000",
    color: "#FFFFFF",
    letterSpacing: "3px",
    marginBottom: '100px',
    textShadow: "0px 0px 10px #FF0000",
  },
  modalFooter: {
    textAlign: "center",
    fontSize: "30px",
    color: "#2B2423",
    letterSpacing: "2px",
    padding: '30px',
    textShadow: "1px 1px 3px  #FF0000",
  },
});


const Modal = (props) => {
  const classes = useStyles();

  const content = (
    <div onClick={props.onClick}>
      <div className={classes.modalRoot}>
        <div className={classes.modalHeader}>
          <h3>WRONG CODE ENTERED</h3>
        </div>
        <div className={classes.modalContent}>{props.content}</div>
        <div className={classes.modalFooter}>Try Again
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal"));
};

export default Modal;

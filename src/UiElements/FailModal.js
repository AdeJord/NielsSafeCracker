import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({

  modalRoot: {
    // boxShadow: '5px 15px 15px 10px #FF0000',
    border: '6px solid black',
    borderRadius: "20px",
    position: "fixed",
    top: "10%",
    left: "12%",
    width: "75vw",
    height: "auto",
    background: "#FF0000",
  },
  modalHeader: {
    borderRadius: "10px",
    paddingTop: '50px',
    textAlign: "center",
    background: '#FF0000',
    height: '30vh',
    fontSize: "40px",
    color: "black",
    letterSpacing: "9px",
  },
  modalContent: {
    borderRadius: "10px",
    textAlign: "center",
    fontSize: "90px",
    background: "#990000",
    color: "#FFFFFF",
    letterSpacing: "3px",
    marginBottom: '100px'
  },
  modalFooter: {
    textAlign: "center",
    fontSize: "50px",
    color: "#2B2423",
    letterSpacing: "2px",
    padding: '30px'
  },
});

const Modal = (props) => {
  const classes = useStyles();

  const content = (
    <div onClick={props.onClick}>
      <div className={classes.modalRoot}>
        <div className={classes.modalHeader}>
          <h3>{props.header}</h3>
        </div>
        <div className={classes.modalContent}>{props.content}</div>
        <div className={classes.modalFooter}>{props.footer}
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal"));
};

export default Modal;

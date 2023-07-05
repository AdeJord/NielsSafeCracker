import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  modalRoot: {
    boxShadow: "0px 0px 20px 10px #FF0000",
    borderRadius: "20px",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "1px",
    height: "1px",
    background: "linear-gradient(to right, #FF9800, #FF5722)",
    zIndex: "1",
    animation: "$zoomIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
  },
  modalHeader: {
    textAlign: "center",
    fontSize: "x-large",
    fontWeight: "bold",
    color: "#FFFFFF",
    textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
  },
  modalContent: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    height: "55vh",
    textAlign: "center",
    fontSize: "70px",
    background: "linear-gradient(to right, #FF5722, #FF0000)",
    color: "#FFFFFF",
    padding: "20px",
    animation: "$flash 1s infinite",
    boxShadow: "0px 0px 10px 2px rgba(255, 255, 255, 0.8)",
  },
  modalFooter: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
  },  
  modalFooterLeft: {
    width: '50%',
    // background: 'red'
  },
  modalFooterRight: {
    width: '50%',
    // background: 'green'
  },
  
  "@keyframes zoomIn": {
    "0%": {
      width: "1px",
      height: "1px",
    },
    "100%": {
      width: "90vw",
      height: "90vh",
    },
  },
  "@keyframes flash": {
    "0%": {
      opacity: 1,
      transform: "scale(.75)",
    },
    "50%": {
      opacity: 0.5,
      transform: "scale(1.1)",
    },
    "100%": {
      opacity: 1,
      transform: "scale(.75)",
    },
  },
});

const Footer = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.modalFooter}>
        <div className={classes.modalFooterLeft} onClick={props.footerLeftClick}></div>
        <div className={classes.modalFooterRight} onClick={props.footerRightClick}></div>
        </div>
    </>
  );
};

const Modal = (props) => {
  const classes = useStyles();

  const content = (
    <div onClick={props.onClick}>
      <div className={classes.modalRoot}>
        <div className={classes.modalHeader}>
          <h3>{props.header}</h3>
        </div>
        <div className={classes.modalContent}>{props.content}</div>
        <div className={classes.modalFooter}>
          <Footer footerLeftClick={props.footerLeftClick} footerRightClick={props.footerRightClick} />
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal"));
};

export default Modal;

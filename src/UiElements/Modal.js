import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({

  modalRoot: {
    boxShadow: '5px 10px 35px 10px #7C7373',
    borderRadius: "10px",
    position: "fixed",
    padding: "10px",
    top: "30%",
    left: "24%",
    width: "50vw",
    height: "auto",
    background: "gray",
    zIndex: "1",
  },
  modalHeader: {
    textAlign: "center",
    fontSize: "large",
  },
  modalContent: {
    borderRadius: "3px",
    textAlign: "center",
    fontSize: "30px",
    background: "white",
    // '@media (max-width: 768px)' : {
    //   fontSize: "small",
    // }
  },
  modalFooter: {
    paddingTop: "20px",
    textAlign: "center",
    fontSize: "large",
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

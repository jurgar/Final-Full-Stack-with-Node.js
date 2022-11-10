import "./Modal.css";

import Button from "../Button";

const Modal = (props) => {
  const classes = `modal ${props.className}`;

  return (
    <div className={classes}>
      <h2>Do you really want to remove member: {props.id} ?</h2>
      <div className="modal-buttons">
        <Button class="buttons" func={props.funcDelete}>
          Yes
        </Button>
        <Button class="buttons" func={props.funcExit}>
          No
        </Button>
      </div>
    </div>
  );
};

export default Modal;

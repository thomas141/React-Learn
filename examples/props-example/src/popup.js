import PropTypes from "prop-types";
import { useState } from "react";

function Popup(props) {
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    setIsClosed(true);
    props.onClose();
  };

  return (
    <div>
      <div>{isClosed ? "Closed" : props.children}</div>
      <button onClick={handleClose}>Close</button>
    </div>
  );
}

Popup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

Popup.defaultProps = {
  onClose: () => {},
};

export default Popup;

import Modal from "react-modal";
import OutsideClickHandler from "react-outside-click-handler";

const ModalComponent = ({
  isOpen = false,
  onRequestClose = () => {},
  customModal = false,
  style = {
    content: {
      height: "fit-content",
    },
  },
  children = <></>,
}) => (
  <Modal
    isOpen={isOpen}
    style={{
      overlay: {
        backgroundColor: "rgba(40,40,40,0.7)",
        zIndex: 11,
        // backgroundColor: 'rgba(193, 199, 208,0.6)',
        ...style.overlay,
      },
      content: {
        border: 0,
        width: "36rem",
        minHeight: "fit-content",
        height: "fit-content",
        top: "50%",
        left: "50%",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        padding: customModal ? "0 2.4rem 2.4rem 2.4rem" : "2.4rem",
        borderRadius: "1.2rem",
        ...style.content,
      },
    }}
  >
    <OutsideClickHandler onOutsideClick={onRequestClose}>
      {children}
    </OutsideClickHandler>
  </Modal>
);

export default ModalComponent;

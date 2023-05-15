import Modal from "./Modal";

function ModalPicture({ detailPhoto, isOpen, onClose }) {
  return (
    <>
      <Modal
        style={{
          content: {
            width: "40rem",
            height: "43rem",
            maxHeight: "80rem",
          },
        }}
        isOpen={isOpen}
        onRequestClose={onClose}
      >
        <div>
          <img
            src={detailPhoto?.url}
            alt={`image random`}
            height="800"
            width="800"
            loading="lazy"
          />
          <h6 className="text-md sm:text-lg font-bold mt-4 text-gray-700 text-center">
            {detailPhoto?.title}
          </h6>
        </div>
      </Modal>
    </>
  );
}

export default ModalPicture;

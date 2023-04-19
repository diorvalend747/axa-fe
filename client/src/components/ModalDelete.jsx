import Modal from "./Modal";

const ModalWarning = ({
  isOpen = false,
  onClickSubmit = () => {},
  onClickCancel = () => {},
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={() => onClickCancel()}>
      <div>
        {/* <img src={WarningSVG} /> */}
        <div className="text-md text-center">
          Are you sure to delete this post?
        </div>
      </div>
      <div className="flex justify-center items-center mt-8">
        <button
          onClick={() => onClickCancel()}
          className="block uppercase mx-auto shadow bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded"
        >
          Cancel
        </button>
        <button
          onClick={() => onClickSubmit()}
          className="block uppercase mx-auto shadow bg-red-600 hover:bg-red-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded"
        >
          Delete
        </button>
      </div>
    </Modal>
  );
};

export default ModalWarning;

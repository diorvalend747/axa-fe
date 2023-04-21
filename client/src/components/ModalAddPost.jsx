import Modal from "./Modal";

const ModalAddPost = ({
  isOpen = false,
  onClickSubmit = () => {},
  onClickCancel = () => {},
  setPostForm = () => {},
  postForm,
  editMode = false,
}) => {
  const _handleFormChange = (target, value) => {
    setPostForm((prevState) => {
      return {
        ...prevState,
        [target]: value,
      };
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onClickCancel()}
      style={{
        content: {
          width: "36rem",
          height: "36.5rem",
          maxHeight: "80rem",
        },
      }}
    >
      <div className="mx-auto w-full max-w-lg">
        <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
          <div className="w-full flex justify-start text-gray-600 mb-3"></div>
          <h1 className="text-gray-800 font-xl font-bold tracking-normal leading-tight mb-6">
            {editMode ? "Edit Post" : "Create New Post"}
          </h1>
          <label
            htmlFor="title"
            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >
            Title
          </label>
          <input
            id="title"
            value={postForm?.title}
            onChange={(event) => _handleFormChange("title", event.target.value)}
            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-12 flex items-center pl-3 text-sm border-gray-300 rounded border"
            placeholder="What's on your mind?"
          />

          <label
            htmlFor="body"
            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >
            Body
          </label>
          <div className="relative mb-5 mt-7">
            <textarea
              value={postForm?.body}
              onChange={(event) =>
                _handleFormChange("body", event.target.value)
              }
              id="body"
              className="mb-8 h-40 py-3 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Write here"
            />
          </div>
          <div className="flex items-center justify-between w-full">
            <button
              disabled={!postForm?.body || !postForm?.title}
              onClick={() => onClickSubmit()}
              className="disabled:bg-gray-100 disabled:border disabled:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-10 py-2 text-sm"
            >
              {editMode ? "Edit" : "Post"}
            </button>
            <button
              className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
              onClick={() => onClickCancel()}
            >
              Cancel
            </button>
          </div>
          <button
            className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
            role="button"
          ></button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalAddPost;

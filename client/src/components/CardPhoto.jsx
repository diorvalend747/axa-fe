const CardTrack = ({ data, setShowModal, setDetailPhoto = () => {} }) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <>
            <div
              onClick={() => {
                setShowModal(true);
                setDetailPhoto(item);
              }}
              key={index}
              className="cursor-pointer"
            >
              <img
                src={item?.thumbnailUrl}
                alt={`photo ${index + 1}`}
                className="rounded-xl w-full"
              />
              <h6 className="text-md sm:text-lg font-bold mt-3 text-gray-700">
                {item?.title}
              </h6>
            </div>
          </>
        );
      })}
    </>
  );
};

export default CardTrack;

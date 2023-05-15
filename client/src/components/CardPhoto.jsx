const CardTrack = ({
  photo,
  index,
  setShowModal,
  setDetailPhoto = () => {},
}) => {
  return (
    <>
      <div
        onClick={() => {
          setShowModal(true);
          setDetailPhoto(photo);
        }}
        key={index}
        className="cursor-pointer"
      >
        <img
          src={photo?.thumbnailUrl}
          alt={`photo ${index + 1}`}
          className="rounded-xl w-full"
          loading="lazy"
        />
        <h6 className="text-md sm:text-lg font-bold mt-3 text-gray-700">
          {photo?.title}
        </h6>
      </div>
    </>
  );
};

export default CardTrack;

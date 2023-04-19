const SkeletonLoaderPhoto = () => {
  return (
    <>
      {Array(1, 2, 3, 4, 5, 6, 7, 8).map((item, index) => {
        return (
          <>
            <div key={index}>
              {/* <div className="flex gap-2"> */}
              <div className="rounded-xl w-full bg-gray-300 h-48"></div>
              <div className="flex-1 space-y-2 py-6">
                <div className="h-4 bg-gray-300 rounded"></div>
              </div>
              {/* </div> */}
            </div>
          </>
        );
      })}
    </>
  );
};

export default SkeletonLoaderPhoto;

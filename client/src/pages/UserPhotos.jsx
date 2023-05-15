import { useState } from "react";
import { useParams, useLocation } from "react-router";
import Sidebar from "../components/Sidebar";
import CardPhoto from "../components/CardPhoto";
import ModalPicture from "../components/ModalPicture";
import SkeletonLoaderPhoto from "../components/SkeletonLoaderPhoto";
import useFetchPhotos from "../hooks/useFetchPhotos";

function UserPhoto() {
  const [showModal, setShowModal] = useState(false);
  const [detailPhoto, setDetailPhoto] = useState({});

  const { albumId } = useParams();
  const location = useLocation();

  const [isLoadingPhotos, userPhotos] = useFetchPhotos(albumId);

  return (
    <>
      <div className="flex overflow-hidden">
        <div className="md:flex-shrink-0 md:w-64">
          <Sidebar />
        </div>
        <div className="flex-grow mx-auto container p-7">
          <h3 className="text-gray-700 text-3xl font-medium mb-7">
            Photos - {location?.state?.title}
          </h3>
          <div className="grid gap-5 md:gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 transition-all">
            {isLoadingPhotos ? (
              <SkeletonLoaderPhoto />
            ) : (
              userPhotos.map((photo, index) => {
                return (
                  <CardPhoto
                    index={index}
                    photo={photo}
                    setShowModal={setShowModal}
                    setDetailPhoto={setDetailPhoto}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
      <ModalPicture
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        detailPhoto={detailPhoto}
      />
    </>
  );
}

export default UserPhoto;

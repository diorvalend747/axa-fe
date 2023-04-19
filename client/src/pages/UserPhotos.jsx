import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import CardPhoto from "../components/CardPhoto";
import ModalPicture from "../components/ModalPicture";
import SkeletonLoaderPhoto from "../components/SkeletonLoaderPhoto";
import config from "../api/base";

function UserPhoto() {
  const [isLoadingPhotos, setLoading] = useState(false);
  const [userPhotos, setUserPhotos] = useState([]);
  const [user, setUser] = useState({
    name: null,
    userName: null,
    userId: null,
  });
  const [showModal, setShowModal] = useState(false);
  const [detailPhoto, setDetailPhoto] = useState({});

  const { albumId } = useParams();
  const location = useLocation();

  const _getUserPhotos = async () => {
    try {
      setLoading(true);
      const { data } = await config.get(`/albums/${albumId}/photos`);
      setUserPhotos(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const _getUser = async () => {
    try {
      const { data } = await config.get(
        `/users/${location?.state?.user?.userId}`
      );
      setUser({
        name: data?.name,
        userName: data?.username,
        userId: data?.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    _getUser();
  }, [location?.state?.user?.userId]);

  useEffect(() => {
    _getUserPhotos();
  }, []);

  return (
    <>
      <div className="flex overflow-hidden">
        <div className="basis-1/5">
          <Sidebar user={user} />
        </div>
        <div className="container p-7 ml-7">
          <h3 className="text-gray-700 text-3xl font-medium mb-7">
            {location?.state?.title}
          </h3>
          <div className="grid gap-5 md:gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 transition-all">
            {isLoadingPhotos ? (
              <SkeletonLoaderPhoto />
            ) : (
              <CardPhoto
                data={userPhotos}
                setShowModal={setShowModal}
                setDetailPhoto={setDetailPhoto}
              />
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

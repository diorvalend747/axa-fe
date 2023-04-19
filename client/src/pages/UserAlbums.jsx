import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Sidebar from "../components/Sidebar";
import Album from "../components/Album";
import SkeletonLoader from "../components/SkeletonLoader";
import config from "../api/base";

function UserAlbum() {
  const [isLoadingAlbums, setLoading] = useState(false);
  const [userAlbums, setUserAlbums] = useState([]);
  const [user, setUser] = useState({
    name: null,
    userName: null,
    userId: null,
  });

  const { userId } = useParams();

  const _getUserAlbums = async () => {
    setLoading(true);
    const response = await config.get(`/users/${userId}/albums`);
    setUserAlbums(response?.data);
    setLoading(false);
  };

  const _getUser = async () => {
    const { data } = await config.get(`/users/${userId}`);
    setUser({
      name: data?.name,
      userName: data?.username,
      userId: data?.id,
    });
  };

  useEffect(() => {
    _getUser();
  }, [userId]);

  useEffect(() => {
    _getUserAlbums();
  }, []);

  return (
    <>
      <div className="flex overflow-hidden">
        <div className="basis-1/5">
          <Sidebar user={user} />
        </div>
        <div className="container p-7 ml-7">
          <h3 className="text-gray-700 text-3xl font-medium">
            {user.name} Albums
          </h3>
          {isLoadingAlbums ? (
            <div className="mt-6">
              <SkeletonLoader />
            </div>
          ) : (
            <Album data={userAlbums} user={user} />
          )}
        </div>
      </div>
    </>
  );
}

export default UserAlbum;

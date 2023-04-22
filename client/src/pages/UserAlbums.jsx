import { useParams, useLocation } from "react-router";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import Album from "../components/Album";
import SkeletonLoader from "../components/SkeletonLoader";
import useFetchAlbums from "../hooks/useFetchAlbums";

function UserAlbum() {
  const { userId } = useParams();
  const location = useLocation();
  const [isLoadingAlbums, userAlbums] = useFetchAlbums(userId);
  const userDetail = useSelector((state) => state.user);

  return (
    <>
      <div className="flex overflow-hidden">
        <div className="basis-1/5">
          <Sidebar />
        </div>
        <div className="container p-7">
          <h3 className="text-gray-700 text-3xl font-medium">
            {userDetail.name || location?.state?.name}'s Albums
          </h3>
          {isLoadingAlbums ? (
            <div className="mt-6">
              <SkeletonLoader />
            </div>
          ) : (
            <Album data={userAlbums} user={location?.state} />
          )}
        </div>
      </div>
    </>
  );
}

export default UserAlbum;

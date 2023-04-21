import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Sidebar from "../components/Sidebar";
import Album from "../components/Album";
import SkeletonLoader from "../components/SkeletonLoader";
import useFetchAlbums from "../hooks/useFetchAlbums";
import { dataUser } from "../util";

function UserAlbum() {
  const { userId } = useParams();
  const [isLoadingAlbums, userAlbums] = useFetchAlbums(userId);

  const userDetail = JSON.parse(dataUser);

  return (
    <>
      <div className="flex overflow-hidden">
        <div className="basis-1/5">
          <Sidebar />
        </div>
        <div className="container p-7 ml-7">
          <h3 className="text-gray-700 text-3xl font-medium">
            {userDetail.name} Albums
          </h3>
          {isLoadingAlbums ? (
            <div className="mt-6">
              <SkeletonLoader />
            </div>
          ) : (
            <Album data={userAlbums} user={userDetail} />
          )}
        </div>
      </div>
    </>
  );
}

export default UserAlbum;

import { useState, useEffect } from "react";
import config from "../api/base";

export default function useFetchAlbums(userId) {
  const [isLoadingAlbums, setLoading] = useState(true);
  const [userAlbums, setUserAlbums] = useState([]);

  const _getUserAlbums = async () => {
    try {
      const { data } = await config.get(`/users/${userId}/albums`);
      setUserAlbums(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    _getUserAlbums();
  }, []);

  return [isLoadingAlbums, userAlbums];
}

import { useState, useEffect } from "react";
import config from "../api/base";

export default function useFetchPhotos(albumId) {
  const [isLoadingPhotos, setLoading] = useState(true);
  const [userPhotos, setUserPhotos] = useState([]);

  const _getUserPhotos = async () => {
    try {
      const { data } = await config.get(`/albums/${albumId}/photos`);
      setUserPhotos(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    _getUserPhotos();
  }, []);

  return [isLoadingPhotos, userPhotos];
}

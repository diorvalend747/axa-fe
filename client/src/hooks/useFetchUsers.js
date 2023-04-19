import { useState, useEffect } from "react";
import config from "../api/base";

export default function useFetchUsers() {
  const [isLoading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const _getUsers = async () => {
    const { data } = await config.get("/users");
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    _getUsers();
  }, []);

  return [isLoading, users];
}

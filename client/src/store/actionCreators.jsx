import { SET_USER } from "./actionTypes";

export function setUser(value) {
  return {
    type: SET_USER,
    payload: value,
  };
}

import { user } from "./strings";

export function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key) {
  return localStorage.getItem(key);
}

export function removeItem(key) {
  localStorage.removeItem(key);
}

export const token = getItem("token");

export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
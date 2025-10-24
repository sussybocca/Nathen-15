import localforage from "localforage";

export const saveData = async (key, value) => {
  await localforage.setItem(key, value);
};

export const loadData = async (key) => {
  return await localforage.getItem(key);
};

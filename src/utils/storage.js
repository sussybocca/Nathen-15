// src/utils/storage.js
import localforage from "localforage";

const APP_KEY = "nathen_apps";

export const saveApp = async (app) => {
  const apps = (await localforage.getItem(APP_KEY)) || [];
  apps.push(app);
  await localforage.setItem(APP_KEY, apps);
};

export const loadApps = async () => {
  return (await localforage.getItem(APP_KEY)) || [];
};

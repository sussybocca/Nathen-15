import localforage from "localforage";

const APP_KEY = "nathen_apps";

// Save a single app
export const saveApp = async (app) => {
  const apps = (await localforage.getItem(APP_KEY)) || [];
  apps.push(app);
  await localforage.setItem(APP_KEY, apps);
};

// Load all apps (named export)
export const loadApps = async () => {
  return (await localforage.getItem(APP_KEY)) || [];
};

// Alias for backwards compatibility with App.jsx
export const loadData = loadApps;

import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Taskbar from "./components/Taskbar";
import Window from "./components/Window";
import DevConsole from "./apps/DevConsole";
import EmojiLogoBuilder from "./components/EmojiLogoBuilder";
import HomeScreen from "./components/HomeScreen";
import { loadData } from "./utils/storage";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [windows, setWindows] = useState([]);
  const [apps, setApps] = useState([]);

  // Load saved apps on startup
  useEffect(() => {
    const initApps = async () => {
      const savedApps = (await loadData("apps")) || [];
      setApps(savedApps);
    };
    initApps();
  }, []);

  const openApp = (AppComponent, title) => {
    setWindows((prev) => [
      ...prev,
      { id: Date.now(), component: <AppComponent />, title },
    ]);
  };

  const closeApp = (id) => {
    setWindows((prev) => prev.filter((win) => win.id !== id));
  };

  const addAppToHome = (app) => {
    setApps((prev) => [...prev, app]);
  };

  return (
    <div className="os-container">
      {/* Show Loading Screen first */}
      {loading && <LoadingScreen onLoaded={() => setLoading(false)} />}

      {/* Show HomeScreen if not loading and no windows are open */}
      {!loading && windows.length === 0 && (
        <HomeScreen apps={apps} openApp={openApp} />
      )}

      {/* Render open windows */}
      {windows.map((win) => (
        <Window
          key={win.id}
          title={win.title}
          onClose={() => closeApp(win.id)}
        >
          {win.component}
        </Window>
      ))}

      {/* Taskbar is always visible */}
      <Taskbar openApp={openApp} />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Taskbar from "./components/Taskbar";
import Window from "./components/Window";
import DevConsole from "./apps/DevConsole";
import SampleApp from "./apps/SampleApp";
import EmojiLogoBuilder from "./components/EmojiLogoBuilder";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [windows, setWindows] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // fake loading
    return () => clearTimeout(timer);
  }, []);

  const openApp = (AppComponent, title) => {
    setWindows((prev) => [
      ...prev,
      { id: Date.now(), component: <AppComponent />, title }
    ]);
  };

  const closeApp = (id) => {
    setWindows((prev) => prev.filter((win) => win.id !== id));
  };

  return (
    <div className="os-container">
      {loading && <LoadingScreen />}
      {windows.map((win) => (
        <Window
          key={win.id}
          title={win.title}
          onClose={() => closeApp(win.id)}
        >
          {win.component}
        </Window>
      ))}
      <Taskbar openApp={openApp} />
    </div>
  );
};

export default App;

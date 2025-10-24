// src/components/HomeScreen.jsx
import React, { useEffect, useState } from "react";
import { loadApps } from "../utils/storage";

const HomeScreen = ({ openApp }) => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    loadApps().then(setApps);
  }, []);

  return (
    <div
      className="home-screen"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        gap: "10px",
        height: "100%",
      }}
    >
      {apps.map((app) => (
        <button
          key={app.id}
          onClick={() => openApp(app.component, app.name)}
          style={{
            flex: "1 1 40%",
            minWidth: "120px",
            minHeight: "60px",
            fontSize: "1rem",
          }}
        >
          {app.emoji} {app.name}
        </button>
      ))}
    </div>
  );
};

export default HomeScreen;

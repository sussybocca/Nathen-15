import React from "react";

const HomeScreen = ({ apps, openApp }) => {
  return (
    <div className="home-screen">
      {apps.length === 0 && <p>No apps installed. Open Dev Console to create one!</p>}
      <div className="app-grid">
        {apps.map((app) => (
          <div
            key={app.id}
            className="app-icon"
            onClick={() => openApp(app.component, app.name)}
          >
            <div className="app-logo">{app.logo}</div>
            <div className="app-name">{app.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;

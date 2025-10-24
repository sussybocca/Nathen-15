// src/apps/DevConsole.jsx
import React, { useState, useEffect } from "react";
import { saveApp, loadApps } from "../utils/storage";
import Editor from "@monaco-editor/react";

const DevConsole = ({ onAppCreated }) => {
  const [appName, setAppName] = useState("");
  const [emoji, setEmoji] = useState("🆕");
  const [files, setFiles] = useState({ "App.jsx": "export default function App() { return <div>Hello</div>; }" });
  const [activeFile, setActiveFile] = useState("App.jsx");

  // Handle editing file content
  const handleCodeChange = (newCode) => {
    setFiles((prev) => ({ ...prev, [activeFile]: newCode }));
  };

  // Dynamically compile the main App.jsx file
  const compileApp = () => {
    try {
      const code = files["App.jsx"];
      // eslint-disable-next-line no-new-func
      const Comp = new Function("React", `${code}; return App;`)(React);
      return Comp;
    } catch (err) {
      console.error("Compilation error:", err);
      return () => <div style={{ color: "red" }}>Error in your code</div>;
    }
  };

  const saveUserApp = () => {
    if (!appName) return;
    const component = compileApp();

    const newApp = {
      id: Date.now(),
      name: appName,
      emoji,
      component,
      files, // store the whole file structure
    };

    saveApp(newApp);
    onAppCreated && onAppCreated(newApp);
    setAppName("");
    setEmoji("🆕");
  };

  return (
    <div style={{ display: "flex", height: "100%" }}>
      {/* File Explorer */}
      <div style={{ width: "200px", borderRight: "1px solid #444", padding: "5px" }}>
        <h3>Files</h3>
        {Object.keys(files).map((file) => (
          <div
            key={file}
            style={{ cursor: "pointer", background: activeFile === file ? "#333" : "transparent", padding: "3px" }}
            onClick={() => setActiveFile(file)}
          >
            {file}
          </div>
        ))}
        <button onClick={() => setFiles({ ...files, [`newFile${Date.now()}.js`]:"" })}>New File</button>
      </div>

      {/* Editor */}
      <div style={{ flex: 1, padding: "5px" }}>
        <input
          type="text"
          placeholder="App Name"
          value={appName}
          onChange={(e) => setAppName(e.target.value)}
          style={{ marginBottom: "5px", width: "150px" }}
        />
        <input
          type="text"
          placeholder="Emoji"
          value={emoji}
          onChange={(e) => setEmoji(e.target.value)}
          style={{ width: "50px", textAlign: "center", marginLeft: "5px" }}
        />
        <Editor
          height="60vh"
          language="javascript"
          value={files[activeFile]}
          onChange={handleCodeChange}
          theme="vs-dark"
        />
        <button onClick={saveUserApp} style={{ marginTop: "5px" }}>Save App</button>
      </div>
    </div>
  );
};

export default DevConsole;

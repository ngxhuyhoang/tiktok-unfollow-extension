import { useState } from "react";

const App = () => {
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);

    chrome.tabs.query(
      { active: true, currentWindow: true },
      (tabs: chrome.tabs.Tab[]) => {
        if (!tabs || tabs.length === 0) return;
        if (!tabs[0].id) return;

        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ["content-script.js"],
        });
      }
    );
  };

  const handleStop = () => {
    setIsStarted(false);
  };

  return (
    <div>
      <h1>TikTok Unfollow Extension</h1>
      <p>Status: {isStarted ? "Running" : "Stopped"}</p>
      <button onClick={isStarted ? handleStop : handleStart}>
        {isStarted ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default App;

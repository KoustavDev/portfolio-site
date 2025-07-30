import React from "react";

const loader = () => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-background">
      <div className="terminal-loader">
        <div className="terminal-header">
          <div className="terminal-title">Status</div>
          <div className="terminal-controls">
            <div className="control close"></div>
            <div className="control minimize"></div>
            <div className="control maximize"></div>
          </div>
        </div>
        <div className="text">Loading...</div>
      </div>
    </div>
  );
};

export default loader;

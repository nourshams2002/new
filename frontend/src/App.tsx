import React, { useState } from "react";
import MediaList from "./components/MediaList";
import MediaUpload from "./components/MediaUpload";

function App() {
  const [refresh, setRefresh] = useState(0);

  return (
    <div className="container">
      <div className="header">
        <h1>MINLY</h1>
      </div>
      <main>
        <MediaList key={refresh} />
        <MediaUpload onUploadSuccess={() => setRefresh((prev) => prev + 1)} />
      </main>
    </div>
  );
}

export default App;

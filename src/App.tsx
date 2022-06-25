import React, { useState } from "react";

const App = () => {
  //http://localhost:3000/?default=<img src onerror="console.log('hacked!')"/>
  //http://localhost:3000/?deafult=<h1>hello</h1>
  const defaultText = decodeURI(
    document.location.href.substring(
      document.location.href.indexOf("default=") + 8
    )
  );
  const [text, setText] = useState("");

  return (
    <div className="App">
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export default App;

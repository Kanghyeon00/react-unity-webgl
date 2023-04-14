import './App.css';
import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";


function App() {

  const unityContext = new UnityContext({
    loaderUrl: "../Build/Build.loader.js",
    dataUrl: "../Build/Build.data",
    frameworkUrl: "../Build/Build.framework.js",
    codeUrl: "../Build/Build.wasm",
  });

  return (
    <div className="App">
      <p style={{fontSize : '24px'}}>Test</p>
      <Unity style={{
        width : '70vh',
        height : '100vw',
      }} unityContext={unityContext} />;
    </div>
  );
}

export default App;

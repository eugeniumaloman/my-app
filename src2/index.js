import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const mainTop = {
  bootstrapGalleryText: "Bootstrap Gallery",
  buttonText: "Download Now!",
}

const mainCenter = {
  headerText: "HTML Image Gallery",
  subheaderText: "Right here you can see by yourself how exacrly the HTML Image Gallery should look like. Feel free to use these awesome, super customizable and mobile-friendly galleries to make website more interesting and appealing for its visitors.",
  downloadGalleryText: "Download Gallery"
}

ReactDOM.render(
  <React.StrictMode>
    <App mainTopProp={mainTop} mainCenterProp={mainCenter} />
  </React.StrictMode>,
  document.getElementById('root')
);

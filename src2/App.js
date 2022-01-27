import Main from './Main';

function App(props) {
  const {
    mainTopProp: { bootstrapGalleryText, buttonText },
    mainCenterProp: { headerText, subheaderText, downloadGalleryText },
  } = props;

  return <Main 
  bootstrapGalleryText={bootstrapGalleryText} 
  buttonText={buttonText} 
  headerText={headerText} 
  subheaderText={subheaderText}
  downloadGalleryText={downloadGalleryText}
  />;
}

export default App;

import MainCenter from './MainCenter';
import MainTop from "./MainTop";
import './Main.css'

const Main = ({bootstrapGalleryText, buttonText, headerText, subheaderText, downloadGalleryText}) => {
    return ( 
    <div className="main">
        <div className="main-wrapper">
            <MainTop bootstrapGalleryText={bootstrapGalleryText} buttonText={buttonText}/>
            <MainCenter headerText={headerText} subheaderText={subheaderText} downloadGalleryText={downloadGalleryText}/>
        </div>
    </div>
    );
}

export default Main;
import './MainCenter.css'

const MainCenter = ({headerText, subheaderText, downloadGalleryText}) => {
    return (
        <div className="main-center">
            <h1 className="padding-bottom">{headerText}</h1>
            <p className="subtext padding-bottom">{subheaderText}</p>
            <a href="#" className="download-gallery">{downloadGalleryText}</a>
        </div>
    );
}

export default MainCenter;
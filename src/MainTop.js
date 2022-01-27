import './MainTop.css'

const MainTop = ({bootstrapGalleryText, buttonText}) => {
    return (
        <div className="main-top">
            <p className="bootstrap-gallery">{bootstrapGalleryText}</p>
            <button className="download-button">{buttonText}</button>
        </div>
    );
}

export default MainTop;
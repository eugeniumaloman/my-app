import './MainCenter.css'

const MainCenter = ({headerText, subheaderText, downloadGalleryText}) => {
    return (
        <div class="main-center">
            <h1 class="padding-bottom">{headerText}</h1>
            <p class="subtext padding-bottom">{subheaderText}</p>
            <a href="#" class="download-gallery">{downloadGalleryText}</a>
        </div>
    );
}

export default MainCenter;
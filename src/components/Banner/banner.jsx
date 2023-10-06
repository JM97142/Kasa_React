// import ImgBanner from
import '../Style/banner.css'
function Banner(props) {
    return (
        <div className="banner">
            <img src={props.image} className="banner-img" alt="banner" />
            <h1>{props.title}</h1>
        </div>
    )
}

export default Banner;
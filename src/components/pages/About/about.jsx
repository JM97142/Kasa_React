import '../../Style/about.css';
import Banner from '../../Banner/banner';
import imgBanner from '../../Assets/about_banner.png';

function About() {
    return (
        <div className='about-body'>
            <Banner image={imgBanner} />
        </div>
    )
}

export default About
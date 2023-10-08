import '../../Style/about.css';
// Components
import Banner from '../../Banner/banner';
import imgBanner from '../../Assets/about_banner.png';
import Dropdown from '../../Dropdown/dropdown';
// Data
import { aboutContent } from '../../../data/aboutContent';

function About() {
    const titleDropdown = aboutContent.map((content, index) =>
        <button key={index} className='about-btn'>{content.title}</button>
    )


    return (
        <div className='about-body'>
            <Banner image={imgBanner} />
            <Dropdown title={titleDropdown} />
        </div>
    )
}

export default About
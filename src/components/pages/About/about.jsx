import '../../Style/about.css';
// Components
import Banner from '../../Banner/Banner';
import imgBanner from '../../Assets/about_banner.png';
import CollapseList from '../../CollapseList/CollapseList';

function About() {
    return (
        <div className='about-body'>
            <Banner image={imgBanner} />
            <CollapseList />
        </div>
    )
}

export default About
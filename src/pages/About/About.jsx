//Data
import { aboutContent } from '../../data/aboutContent.js'
// Components
import Banner from '../../components/Banner/Banner.jsx'
import imgBanner from '../../assets/about_banner.png'
import Collapse from '../../components/Collapse/Collapse.jsx'

function About() {
    return (
        <div className='about-wrapper'>
            <Banner image={imgBanner} />
            <div className='btn-wrapper'>
                {aboutContent.map((content, index) =>
                    <Collapse key={index} title={content.title} description={content.description} />
                )}
            </div>
        </div>
    )
}

export default About;
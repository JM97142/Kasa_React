//Data
import { aboutContent } from '../../../data/aboutContent'
// Components
import Banner from '../../Banner/Banner'
import imgBanner from '../../Assets/about_banner.png'
import Collapse from '../../Collapse/Collapse'

import '../../Style/about.css'

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
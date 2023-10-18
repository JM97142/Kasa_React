//Data
import { aboutContent } from '../../../data/aboutContent'
// Components
import Banner from '../../Banner/Banner'
import imgBanner from '../../Assets/about_banner.png'
import Collapse from '../../Collapse/Collapse'

import '../../Style/about.css'

function About() {
    return (
        <div className='about-body'>
            <Banner image={imgBanner} />
            {aboutContent.map((content, index) =>
                <Collapse title={content.title} description={content.description} />
            )}
        </div>
    )
}

export default About;
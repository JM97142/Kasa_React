import '../../Style/index.css';
import Card from '../../Card/card'
import Banner from '../../Banner/banner'
import imgBanner from '../../Assets/home_banner.png'
import { listLocations } from '../../../data/locations';

function App() {
  const titleBanner = 'Chez vous, partout et ailleurs';
  // Récupération du titre des logements
  const titleLocation = listLocations.map(location =>
    <h2 key={location.id} className="card-name">{location.title}</h2>
  )

  return (
    <div className='home-body'>
      <div className='home-banner'>
        <Banner image={imgBanner} title={titleBanner} />
      </div>
      <Card title={titleLocation} />
    </div>
  )
}

export default App;
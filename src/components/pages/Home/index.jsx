import '../../Style/index.css'
// Components
import CardsList from '../../CardsList/CardsList'
import Banner from '../../Banner/Banner'
import imgBanner from '../../Assets/home_banner.png'

function App() {
  const titleBanner = 'Chez vous, partout et ailleurs'

  return (
    <div className='home-wrapper'>
      <Banner image={imgBanner} title={titleBanner} />
      <CardsList />
    </div>
  )
}

export default App;
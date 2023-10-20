// Components
import CardsList from '../../components/CardsList/CardsList.jsx'
import Banner from '../../components/Banner/Banner.jsx'
import imgBanner from '../../assets/home_banner.png'

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
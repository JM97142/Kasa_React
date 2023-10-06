import '../../Style/index.css';
import Card from '../../Card/card'
import Banner from '../../Banner/banner'

function App() {
  return (
    <section className='home-body'>
      <div className='homme-banner'>
        <Banner />
      </div>
      <Card />
    </section>
  )
}

export default App;
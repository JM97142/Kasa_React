import '../../Style/index.css';
import Card from '../../Card/card'

function App() {
  const Mylocation = { title: 'toto' };
  return (
    <div>
      <h1 className='title'>Accueil</h1>
      <Card location={Mylocation} />
    </div>
  )
}

export default App;

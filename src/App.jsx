import './App.css'
import './pokedex.css'
import './fonts.css'
import { Themetoggler } from './components/themetoggler/themetoggler.jsx'
import ImagePokemon from './components/pastapokedex/imagePokemon.jsx'

function App() {

return (
    <>
    <Themetoggler />
    <div className='pokedex-header'>
    <img src="../src/assets/pokedex-icon-19.png" alt="pokedex-icone" className='pokedex-icon' />
    <h1>POKEDEX</h1>
    </div>
    <main className="pokedex-container">
    <div className="">
    <button className='pokedex-button-2'></button>
      <ImagePokemon />
      <button className='pokedex-button'></button>
      <img src="../src/assets/628181-200.png" alt="button-pokedex" className='pokedex-arrows'/>
    </div>
    </main>
    </>
  )
}

export default App
import './themetoggler.css'
import './themetoggler.js'

export const Themetoggler = () => {
    return (
        <div>
            <button className='botao-sol' id='btn-sol' name='btn-sol' onClick={() => document.body.classList.toggle('dark-mode')}>
                <img src="./src/assets/pngwing3.png" alt="botao-toggler" className='imagem-botao'/>
            </button>
        </div>
    )
}
import NavBar from '../components/navBar/NavBar'
// import Body from '../components/body/Body'
// import Footer from '../components/footer/Footer'
import {Link} from 'react-router-dom'
import style from './Lancamentos.module.css'

const Lancamentos = () => {
    return (
        <>
            <NavBar/>
            <p className={style.lancamento}>meus lançamentos aqui!</p>

    
        </>
    )
}

export default Lancamentos
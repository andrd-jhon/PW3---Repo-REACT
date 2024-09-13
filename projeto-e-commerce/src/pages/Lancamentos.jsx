// import NavBar from '../components/navBar/NavBar'
// import Body from '../components/body/Body'
// import Footer from '../components/footer/Footer'
import {Link} from 'react-router-dom'
const Lancamentos = () => {
    return (
        <>
            {/* <NavBar/> */}
            <p>meus lançamentos aqui!</p>
            <Link to="/">
                <input type="button" value="Voltar para Home"/>
            </Link>
            {/* <Footer/> */}
        </>
    )
}

export default Lancamentos
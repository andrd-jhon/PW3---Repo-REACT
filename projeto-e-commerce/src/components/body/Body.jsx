import style from './Body.module.css'
import Produtos from '../produtos/Produtos'
const Body = () => {
    return (
        <>
            <div className={style.body}>
                <Produtos/>
                <Produtos/>
                <Produtos/>
                <Produtos/>
                <Produtos/>
                <Produtos/>
            </div>
        </>
    )
}

export default Body
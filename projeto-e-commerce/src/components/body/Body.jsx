import style from './Body.module.css'
import Produtos from '../produtos/Produtos'
import ListRoupas from '../../../crud/listRoupas'

const Body = () => {
    return (
        <>
            <div className={style.container}>
                {/* <Produtos
                    nomeProduto={"GEOVANNA FEIOSA"}
                />
                <Produtos/>
                <Produtos/>
                <Produtos/>
                <Produtos/>
                <Produtos/> */}
                
                <ListRoupas/>
            
            </div>
        </>
    )
}

export default Body
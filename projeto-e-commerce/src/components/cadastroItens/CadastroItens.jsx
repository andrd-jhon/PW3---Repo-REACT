import style from './CadastroItens.module.css'

const CadastroItens = () => {
    return (
        <>
            <div className={style.container}>
                <h2 className={style.h2Cad}>Cadastro</h2>
                <form action="#" method="post" id="register-form">
                    <div className={style.nomeP}>
                        <label htmlFor="email">Nome do Produto:</label>
                        <input type="email" id="email" name="email" required/>
                    </div>
                    <div className={style.categoriaP}>
                        <label htmlFor="password">Categoria de produto:</label>
                        <input type="password" id="password" name="password" required/>
                    </div>
                    <div className={style.precoP}>
                        <label htmlFor="confirm-password">Preço:</label>
                        <input type="password" id="confirm-password" name="confirm-password" required/>
                        <div id="password-error" className="error"></div>
                    </div>
                    <div className={style.cadastrar}>
                        <input type="submit" value="Cadastrar"/>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CadastroItens
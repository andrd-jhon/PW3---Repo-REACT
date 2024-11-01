const CadastroItens = () => {
    return (
        <>
            <div className="container">
                <h2>Cadastro</h2>
                <form action="#" method="post" id="register-form">
                    <div className="form-group">
                        <label htmlFor="email">Nome do Produto:</label>
                        <input type="email" id="email" name="email" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Categoria de produto:</label>
                        <input type="password" id="password" name="password" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Preço:</label>
                        <input type="password" id="confirm-password" name="confirm-password" required/>
                        <div id="password-error" className="error"></div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Cadastrar"/>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CadastroItens
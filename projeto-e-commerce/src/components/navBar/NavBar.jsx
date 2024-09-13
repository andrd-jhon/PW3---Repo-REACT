import React from 'react'
import style from './NavBar.module.css'
import {Link} from 'react-router-dom'
const NavBar = () => {
    return (
        <>
           <div className={style.navcontainer}>
            <nav className={style.navbar}>
                <a href="">
                    <p className={style.logoicon}>ICONE LOGO</p>
                </a>
                <div >
                    <ul className={style.list}>
                        <li>
                            <a href="" className={style.listitem}>Home</a>
                        </li>
                        <li>
                            <Link to="/Lancamentos" className={style.listitem}>Lançamentos</Link>
                        </li>
                        <li>
                            <a href="" className={style.listitem}>Todos os Produtos</a>
                        </li>
                        <li>
                            <a href="" className={style.listitem}>Redes Sociais</a>
                        </li>
                        <li>
                            <Link to="/Cadastro" className={style.listitem}>Cadastrar Itens</Link>
                        </li>
                    </ul>
                </div>
            </nav>
           </div>
        </>
    )
}

export default NavBar
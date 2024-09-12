import React from 'react'
import style from './NavBar.module.css'

const NavBar = () => {
    return (
        <>
           <div class={style.navcontainer}>
            <nav class={style.navbar}>
                <a href="">
                    <p class={style.logoicon}>ICONE LOGO</p>
                </a>
                <div >
                    <ul class={style.list}>
                        <li>
                            <a href="" class={style.listitem}>Home</a>
                        </li>
                        <li>
                            <a href="" class={style.listitem}>Lançamentos</a>
                        </li>
                        <li>
                            <a href="" class={style.listitem}>Todos os Produtos</a>
                        </li>
                        <li>
                            <a href="" class={style.listitem}>Redes Sociais</a>
                        </li>
                    </ul>
                </div>
            </nav>
           </div>
        </>
    )
}

export default NavBar
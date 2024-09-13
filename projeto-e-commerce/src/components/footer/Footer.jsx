import React from 'react'
import style from './Footer.module.css'


const Footer = () => {
    return (
        <>
           <div className={style.footercontainer}>
            <nav>
                <div >
                    <ul className={style.iconslist}>
                        <li>
                            <a href="">Instagram</a>
                        </li>
                        <li>
                            <a href="">FaceBook</a>
                        </li>
                        <li>
                            <a href="">LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </nav>
           </div>
        </>
    )
}

export default Footer
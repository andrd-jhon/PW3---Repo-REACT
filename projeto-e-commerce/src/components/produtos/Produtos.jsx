import React from 'react'
import style from './Produtos.module.css'
import {Link} from 'react-router-dom'

const Produtos = ({nomeProduto, descricaoProduto, precoProduto}) => {
    return (
        <>
            <div className={style.container}>
            <div className={style.produto}>
                <img src="" alt="" />
                <div>
                    <label htmlFor="">{nomeProduto}</label>
                    <p>{descricaoProduto}</p>
                    <span>{precoProduto}</span>
                </div>
            </div>
            </div>
        </>
    )
}

export default Produtos
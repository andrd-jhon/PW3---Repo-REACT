import Produtos from "../src/components/produtos/Produtos";

import React from 'react'

/* IMPORTA O useState E useEffect PARA GUARDAR OS ESTADOS DE DADOS DOS PROJETOS */
import { useState, useEffect } from "react";


// import Container from '../layout/Container'
// import ContainerBook from '../layout/ContainerBook';

import style from './listRoupas.module.css'


const ListRoupas = () => {

    /* CRIAÇAO DO STATE DOS DADOS DOS LIVROS */
    const [roupas, setRoupas] = useState([]);

    /* RECUPERA OS DADOS DOS LIVROS DO BACKEND */
    useEffect(()=>{

        fetch('http://localhost:3001/roupas', {
            method: 'GET',
            mode:'cors',
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
        })
            .then((resp)=>resp.json())
            .then((data)=>{
                console.log('LIVROS: ' + data.data);
                setRoupas(data.data);
                console.log('STATE: ' + roupas);
            })
            .catch((err)=>{console.log(err)});

    }, []);

    return (

        

            <section className={style.list_book_container}>
                
                <h1>LIST ROUPAS</h1>
                    {
                        roupas.map((roupa)=>(
                            // console.log(book.nome_livro)
                            // <BookCard
                            //     cod_livro={book.cod_livro}
                            //     titulo={book.nome_livro}
                            //     autor={book.autor_livro}
                            //     imagem={cavernas}
                            //     key={book.cod_livro}
                            // />

                            <div className={style.container}>
                                    <Produtos
                                nomeProduto={roupa.roupaNome}
                                descricaoProduto={roupa.roupaPreco}
                                precoProduto={roupa.roupaDescricao}
                                />
                            </div>
                        ))
                    }
            </section>
    )
}

export default ListRoupas

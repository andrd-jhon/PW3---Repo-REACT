const roupaModel = require('../models/roupaModel')
const express = require('express')
const router = express.Router()
// const validation = require('../utils/validation');
// import {existsOrError} from '../utils/validation'

const produtos = [
    {
        name: 'Camiseta Gola V',
        preco: 49.99
    }
]





const { Utils } = require('sequelize');

router.get('/', (req, res)=>{

    return res.status(200).json({status:'API PW3ATV4'});

});

router.get('/roupas', (req, res) => {
    // res.status(200).json(produtos)
    // console.log(produtos)

    roupaModel.findAll(/*{where:{userEmail: "joao3@gmail.com"}}*/)
    
    .then(
        (response) => {
            console.log(response)
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'USUARIOS LISTADOS COM SUCESSO',
                    data:response
                }
            )
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO LISTAR OS LIVROS',
                errorObject:error
            }
        );
    });
    console.log('listando roupas')
})

router.post('/roupas', async (req, res)=>{

    res.status(200).send()

    // console.log('entrou no inserir usuarios')
    // let { userName, userEmail, userPassword, userPasswordConfirm } = req.body;

    // try {
    //     validation.existsOrError(userName, "nome não informado!")
    //     validation.existsOrError(userEmail, "E-mail não informado!")
    //     validation.existsOrError(userPassword, "Senha não informada!")
    //     validation.existsOrError(userPasswordConfirm, "Confirmação de senha não informada!")
    //     validation.equalsOrError(userPassword, userPasswordConfirm, "As senhas devem ser iguais!")

    //     const user = await userModel.findAll({where: {
    //         userEmail: `${userEmail}`
    //     }})
    //     console.log(user)

    //     validation.notExistsOrError(user, "Usuário já cadastrado")
        
    // }catch (msg){
    //     return res.status(400).send(msg)
    // }
    
    // delete req.body.userPasswordConfirm

    // userModel.create(
    //     {
    //         userName,
    //         userEmail,
    //         userPassword
    //     }
    // )
    // .then(
    //     ()=>{
    //         return res.status(201).json(
    //             {
    //                 errorStatus:false,
    //                 mensageStatus:'USUÁRIO CADASTRADO COM SUCESSO'
    //             }
    //         );
    //     }
    // )
    // .catch((error)=>{
    //     return res.status(400).json(
    //         {
    //             errorStatus:true,
    //             mensageStatus:'HOUVE UM ERRO AO SALVAR USUÁRIO',
    //             errorObject:error
    //         }
    //     );
    // });

    // return res.status(200).json({status:'TESTE DE INSERÇÃO DE LIVRO!'});

});


// router.get('/teste', async (req, res)=>{

//     let nomeTeste = "João vitor andrade"

//     const users = await userModel.findAll({where: {
//         userName: `${nomeTeste}`
//     }})
//     console.log(users.dataValues)
//     console.log(typeof(users))
//     console.log(users)

//     if(users.length > 0){
//         console.log("existe usuario")
//     }

//     try{
//         validation.notExistsOrError(users, "Usuário já cadastrado")
//     }catch (msg){
//         return res.status(400).send(msg)
//     }
//     return res.status(200).json({status:'TESTE DE CONEXÃO COM A API!'});

// });

module.exports = router
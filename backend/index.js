const express = require('express')
const app = express()
const cors = require('cors')
const routerProduto = require('./routes/routeProduto')


app.use(cors());


app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/', routerProduto);


app.listen(3001, (req, res) => {
    console.log('backend funcionando!')
})
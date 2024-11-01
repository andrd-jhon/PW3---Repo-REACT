const Sequelize = require('sequelize');

const connection = require('../config/database');

const roupaModel = connection.define(
    'tblRoupas',
    {
        roupaId:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        roupaNome:{
            type:Sequelize.STRING(200),
            allowNull:false
        },
        roupaPreco:{
            type:Sequelize.STRING(200),
            allowNull:false
        },
        roupaDescricao:{
            type:Sequelize.STRING(200),
            allowNull:false
        },
    },
    {
        timestamps: false
    }
);

// modeLivro.sync({force:true});

module.exports = roupaModel;
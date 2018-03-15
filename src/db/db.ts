import * as Sequelize from 'sequelize'
import { CMCCurrencySnapshot } from 'get-crypto-fiat-values'
import { LogEntry, Currency, CurrencyEntry } from './models'

const {
    MYSQL_DATABASE,
    MYSQL_ROOT_PASSWORD
} = process.env

const dbConfig = {
    host: 'mysql',
    database: MYSQL_DATABASE || 'time-capsule',
    username: 'root',
    password: MYSQL_ROOT_PASSWORD || '',
    dialect: 'mysql',
    logging: false,
    operatorsAliases: false
}

const database = new Sequelize(dbConfig)

database.authenticate().catch(() => {
    console.log('Could not connect to database!')
})

export default database

export const disconnectDatabase = () => {
    database.close()
}

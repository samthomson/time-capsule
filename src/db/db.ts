import * as Sequelize from 'sequelize'
import { CMCCurrencySnapshot } from 'get-crypto-fiat-values'
import { LogEntry, Currency, CurrencyEntry } from './models'

const {
    MYSQL_DATABASE,
    MYSQL_USER,
    MYSQL_PASSWORD
} = process.env

const dbConfig = {
    host: 'mysql',
    database: MYSQL_DATABASE || 'time-capsule',
    username: MYSQL_USER || 'root',
    password: MYSQL_PASSWORD || '',
    dialect: 'mysql',
    logging: false
}

const database = new Sequelize(dbConfig)

database.authenticate().catch(() => {
    console.log('Could not connect to database!')
})

export default database

export const disconnectDatabase = () => {
    database.close()
}

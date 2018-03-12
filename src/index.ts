// connect and write something to the db
console.log('time-capsule started')

import database, { disconnectDatabase } from './db/db'
import { LogEntry, Currency, CurrencyEntry } from './db/models'

database.sync().then(function() {
    return Currency.create({
      code: 'DOGE'
    })
  }).then(function(entry) {
    disconnectDatabase()
  })
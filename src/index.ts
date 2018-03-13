import database, {
  disconnectDatabase
} from './db/db'
import {
  createCurrencyEntry,
  createLogEntry,
  ensureCurrencyExists
} from './db/helpers'

import { getAllCryptoValues, CMCCurrencySnapshot } from 'get-crypto-fiat-values'

const main = async () => {

  // get a collection of all currencies with data from CMC
  const aAllCurrencyData: CMCCurrencySnapshot[] = await getAllCryptoValues() || []

  // ensure the db has tables created for the models we use
  await database.sync()
  
  // create a single log entry, which currency entries will relate to
  let oLogEntry = await createLogEntry()
  // save each currency entry
  for (
    let cCurrency = 0;
    cCurrency < aAllCurrencyData.length;
    cCurrency++
  ) {
    const oCMCCurrency = aAllCurrencyData[cCurrency]
    // check the currency itself exists, that we'll relate this entry to
    let oDBCurrency = await ensureCurrencyExists(oCMCCurrency)
    await createCurrencyEntry(oDBCurrency.id, oLogEntry.id, oCMCCurrency)
  }
  
  // finally, disconnect the db when we're done with it
  disconnectDatabase()
}


main()

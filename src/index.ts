import database, {
  disconnectDatabase
} from './db/db'
import {
  createCurrencyEntry,
  createLogEntry,
  ensureCurrencyExists
} from './db/helpers'

import { getAllCryptoValues, CMCCurrencySnapshot } from 'get-crypto-fiat-values'

let cMainIteration = 0

const main = async () => {
  const dateStartedScript = new Date().getTime()

  setTimeout(main, 60000)
  cMainIteration++
  console.log(`\n\nstarting time-capsule log, iteration: ${cMainIteration}`)

  // get a collection of all currencies with data from CMC
  const aAllCurrencyData: CMCCurrencySnapshot[] = await getAllCryptoValues() || []

  const dateGotCMCResult = new Date().getTime()

  console.log(`receiving ${aAllCurrencyData.length} currencies`)

  // ensure the db has tables created for the models we use
  await database.sync()
  
  // create a single log entry, which currency entries will relate to
  let oLogEntry = await createLogEntry()
  
  // save each currency entry
  let cSaved = 0
  for (
    let cCurrency = 0;
    cCurrency < aAllCurrencyData.length;
    cCurrency++, cSaved++
  ) {
    const oCMCCurrency = aAllCurrencyData[cCurrency]
    // check the currency itself exists, that we'll relate this entry to
    let oDBCurrency = await ensureCurrencyExists(oCMCCurrency)
    await createCurrencyEntry(oDBCurrency.id, oLogEntry.id, oCMCCurrency)
  }
  
  // finally, disconnect the db when we're done with it
  // disconnectDatabase()
  const dateScriptFinished = new Date().getTime()

  // log script performance / results
  oLogEntry.currenciesSaved = cSaved
  oLogEntry.CMCFetchTime = dateGotCMCResult - dateStartedScript
  oLogEntry.runtime = dateScriptFinished - dateStartedScript

  await oLogEntry.save()
  console.log(`saved ${cSaved} currency entries`)
  // console.log(`finished and disconnected`)
}

main()

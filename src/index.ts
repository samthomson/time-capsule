import database, { disconnectDatabase } from './db/db'
import { LogEntry, Currency, CurrencyEntry } from './db/models'

import { getCryptoUSDValue } from 'get-crypto-fiat-values'

const main = async () => {

  const sCMCCurrencyId: string = 'dogecoin'
  
  let dDogeUSD = await getCryptoUSDValue(sCMCCurrencyId)

  console.log('dogecoin is at $', dDogeUSD)
  
  database.sync().then(function() {

    const ensureCurrencyExists = Currency.findOrCreate({
      where: {
        currency_literal_id: sCMCCurrencyId
      },
      defaults: {
        currency_literal_id: sCMCCurrencyId,
        symbol: 'DOGE',
        name: 'Dogecoin'
      }
    })
    const createCurrencyEntry = (iCurrencyId: number, dPriceUSD: number) => {
      console.log('now save dogecoin at $', dPriceUSD)
      return CurrencyEntry.create({
        currency: iCurrencyId,
        price_usd: dPriceUSD
      })
    }

    return ensureCurrencyExists.then(oCurrency => {
      console.log('save dogecoin as at $', dDogeUSD)
      return createCurrencyEntry(oCurrency.id, dDogeUSD)
    })



  }).then(function(entry) {
    disconnectDatabase()
  })
}


main()

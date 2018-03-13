import { CMCCurrencySnapshot } from 'get-crypto-fiat-values'
import { LogEntry, Currency, CurrencyEntry } from './models'

export const createLogEntry: any = () => LogEntry.create()

export const ensureCurrencyExists: any = (oCurrency: CMCCurrencySnapshot) => Currency.findOrCreate({
    where: {
      currency_literal_id: oCurrency.id
    },
    defaults: {
      currency_literal_id: oCurrency.id,
      symbol: oCurrency.symbol,
      name: oCurrency.name
    }
  }).spread((oCurrency: any) => oCurrency.get({ plain: true }))

export const createCurrencyEntry: any = (iCurrencyId: number, iLogEntryId: number, oCurrency: CMCCurrencySnapshot) => {
    const { available_supply, last_updated, market_cap_usd, percent_change_1h, percent_change_24h, percent_change_7d, price_btc, price_usd, rank, total_supply, volume_usd_24h } = oCurrency

    return CurrencyEntry.create({
        currency: iCurrencyId,
        log_entry: iLogEntryId,
        rank,
        price_usd,
        price_btc,
        volume_usd_24h,
        market_cap_usd,
        available_supply,
        total_supply,
        percent_change_1h,
        percent_change_24h,
        percent_change_7d,
        last_updated
    })
}
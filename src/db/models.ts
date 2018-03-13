import * as Sequelize from 'sequelize'
import database from './db'

export const LogEntry = database.define(
    'log_entry',
    {
    },
    {
      timestamps: true,
      updatedAt: false,
      freezeTableName: true,
    }
)

export const Currency = database.define(
    'currency',
    {
      currency_literal_id: Sequelize.STRING,
      name: Sequelize.STRING,
      symbol: Sequelize.STRING,
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
)

export const CurrencyEntry = database.define(
    'currency_entry',
    {
      currency: Sequelize.INTEGER,
      log_entry: Sequelize.INTEGER,
      rank: Sequelize.INTEGER,
      price_usd: Sequelize.DECIMAL(32,24),
      price_btc: Sequelize.DECIMAL(32,24),
      volume_usd_24h: Sequelize.DECIMAL(32,4),
      market_cap_usd: Sequelize.DECIMAL(32,4),
      available_supply: Sequelize.DECIMAL(32,4),
      total_supply: Sequelize.DECIMAL(32,4),
      percent_change_1h: Sequelize.DECIMAL(8,4),
      percent_change_24h: Sequelize.DECIMAL(8,4),
      percent_change_7d: Sequelize.DECIMAL(8,4),
      last_updated: Sequelize.INTEGER
    },
    {
      timestamps: true,
      updatedAt: false,
      freezeTableName: true,
    }
)
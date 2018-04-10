import * as Sequelize from 'sequelize'
import database from './db'

export const LogEntry = database.define(
    'log_entry',
    {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      currenciesSaved: {
        type: Sequelize.SMALLINT.UNSIGNED,
        allowNull: true,
      },
      CMCFetchTime: {
        type: Sequelize.SMALLINT.UNSIGNED,
        allowNull: true,
      },
      runtime: {
        type: Sequelize.SMALLINT.UNSIGNED,
        allowNull: true,
      },
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
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      currency_literal_id: Sequelize.STRING(128),
      name: Sequelize.STRING(128),
      symbol: Sequelize.STRING(32),
    },
    {
      timestamps: true,
      freezeTableName: true,
    },
)

export const CurrencyEntry = database.define(
    'currency_entry',
    {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      currency: Sequelize.SMALLINT.UNSIGNED,
      log_entry: Sequelize.INTEGER.UNSIGNED,
      rank: Sequelize.SMALLINT.UNSIGNED,
      price_usd: Sequelize.DECIMAL(32,12),
      price_btc: Sequelize.DECIMAL(32,12),
      volume_usd_24h: Sequelize.DECIMAL(32,2),
      market_cap_usd: Sequelize.DECIMAL(32,4),
      available_supply: Sequelize.DECIMAL(32,4),
      total_supply: Sequelize.DECIMAL(32,4),
      percent_change_1h: Sequelize.DECIMAL(8,4),
      percent_change_24h: Sequelize.DECIMAL(8,4),
      percent_change_7d: Sequelize.DECIMAL(8,4),
      last_updated: Sequelize.INTEGER,
    },
    {
      timestamps: false,
      freezeTableName: true,
    },
)
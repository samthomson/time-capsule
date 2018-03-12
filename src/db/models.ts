import * as Sequelize from 'sequelize'
import database from './db'

export const LogEntry = database.define(
    'log_entry',
    {
      test: {
        type: Sequelize.STRING
      }
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
      code: {
        type: Sequelize.STRING
      }
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
)

export const CurrencyEntry = database.define(
    'currency_entry',
    {
      test: {
        type: Sequelize.STRING
      }
    },
    {
      timestamps: true,
      updatedAt: false,
      freezeTableName: true,
    }
)
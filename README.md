# Time capsule

It logs current market prices for all crypto currencies on coinmarketcap.com once a minute. Giving you a historic dataset you could use to train algorithms on.

Tech:
- Typescript, MySQL, docker


## run locally

- clone and cd into repo
- `docker-compose up`


## How it works


### pseudo-code:
- get all listed currencies on coinmarketcap
- create a `log_entry`
- foreach currency
    - see if it's in the db, if not create a new `currency`
    - create a `currency_entry` that relates to both a `currency` and `log_entry`


### Schema

#### tables
- log_entry
- currency
- currency_entry

#### relations
A `log_entry` pertains to when the script was run. It has the time it was run. It relates one to many to `currency_entry`. The `currency_entry` relates one to one to a `currency`.
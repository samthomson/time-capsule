# Time capsule

It logs current market prices for all crypto currencies on coinmarketcap.com once a minute. Giving you a historic dataset you could use to train algorithms on.

Tech:
- Typescript, MySQL, docker


## run locally

- clone and cd into repo
- setup contianers: `docker-compose up`
- enter main app container: `docker-compose run app bash`
- start script: `yarn run start`


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

## run on a server

- set up a vps
- install docker: https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04
- install docker-compose: https://www.digitalocean.com/community/tutorials/how-to-install-and-run-a-node-js-app-on-centos-6-4-64bit
- clone repo (into `/usr/src` is a suitable place)
- create env: `cd /usr/src/time-capsule && cp .env.sample .env`
- edit env, set desired db name and password: `nano .env`
- build our containers `docker-compose up -d`
- enter the app container: `docker-compose run app bash`
- test run the script `yarn run once`

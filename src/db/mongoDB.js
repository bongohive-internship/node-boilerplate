const debug = require('debug')('server:debug')
import config from 'config'
import mongoose from 'mongoose'
class Database {
    constructor() {
    }
    connect(environment) {
        if (environment === "development") {
            mongoose
                .connect(config.get('database'),{useNewUrlParser:true})
                .then(() => debug('database connected in dev mode'))
                .catch((err) => debug("Database connection err", err));
        } else if (environment === "test") {
            mongoose
                .connect(config.get('database'),{useNewUrlParser:true})
                .then(() => console.log('database connected in test mode'))
                .catch((err) => console.log("Database connection err", err));
        }else if (environment == "production") {
            mongoose
                .connect(config.get('database'),{useNewUrlParser:true})
                .then(() => console.log('database connected in production mode'))
                .catch((err) => console.log("Database connection err", err));
        }
    }

}
module.exports = new Database()

let environment = require('./environment').environment;

let serverURLs = {
    "dev": {
        "NODE_SERVER": "http://localhost",
        "NODE_SERVER_PORT": "3000",
        "MONGO_DB": "mongodb://localhost:27017/secondcars",
        "EMAIL_USER": 'toothfairysanjeet@gmail.com',
        "EMAIL_PASS": 'Sanj1234A',
        "EMAIL_HOST": 'smtp.gmail.com',
        "EMAIL_PORT": 465,
        "EMAIL_SECURE": true,
        "CRON_PATTERN": '15 * * * * *',
    },
    "staging": {
        "NODE_SERVER": "http://11.11.11.11",
        "NODE_SERVER_PORT": "3000",
        "MONGO_DB": "deployment:kaur@123@ds331145.mlab.com:25375/secondcars",
        "EMAIL_USER": 'toothfairysanjeet@gmail.com',
        "EMAIL_PASS": 'Sanj1234A',
        "EMAIL_HOST": 'smtp.gmail.com',
        "EMAIL_PORT": 465,
        "EMAIL_SECURE": true,
        "CRON_PATTERN": '5 * * * * *',
    }
}
//mongodb://deployment:kaur%40123@ds225375.mlab.com:25375/chat"
let config = {
    "DB_URL": {
        "url": `${serverURLs[environment].MONGO_DB}`
    },
    "NODE_SERVER_PORT": {
        "port": `${serverURLs[environment].NODE_SERVER_PORT}`
    },
    "NODE_SERVER_URL": {
        "url": `${serverURLs[environment].NODE_SERVER}`
    },
    "OTP_EMAIL_CONFIG": {
        "host": `${serverURLs[environment].EMAIL_HOST}`,
        "port": `${serverURLs[environment].EMAIL_PORT}`,
        "secure": `${serverURLs[environment].EMAIL_SECURE}`,
        "auth": {
            "user": `${serverURLs[environment].EMAIL_USER}`,
            "pass": `${serverURLs[environment].EMAIL_PASS}`,
        }
    },
};

module.exports = {
    config: config
};

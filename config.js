module.exports = {
    PORT: process.env.PORT || 3000,
    MONGODB: process.env.HEROKU_CONFIG_VAR || 'mongodb://127.0.0.1:27017/mascotaDeVuelta2'
}

module.exports = {
    PORT: process.env.PORT || 3000,
    MONGODB: process.env.herokuConfigVar || 'mongodb://127.0.0.1:27017/mascotaDeVuelta2'
}

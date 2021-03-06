const Sequelize = require('sequelize')

const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:password@localhost:5430/postgres'
const db = new Sequelize(databaseUrl)

db
  .sync()
  .then(() => console.log('Database updated'))
  .catch(console.error)

module.exports = db

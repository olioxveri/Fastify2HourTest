import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

const fastify = require('fastify')();
fastify.decorate('db', AppDataSource)
fastify.db.initialize().then(() => {

  
fastify.register(require('./models/plantingsite/routes'))
fastify.register(require('./models/Categories/Routes'))
fastify.register(require('./models/MapboxTile/routes'))
fastify.register(require('cors'), {
  allow: '*'
})

}).then(()=>{
fastify.listen({ port: 3001}, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
  })
})
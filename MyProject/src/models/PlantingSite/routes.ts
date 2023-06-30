import { PlantingSite } from "./PlantingSite"

async function categoriesRoutesHandler (fastify, options) {
  const repo =  fastify.db.manager.getRepository(PlantingSite)
  
    fastify.get('/plantingsite', async (request, reply) => {
      return repo.find({where: {
        id: request.query.id,
        plantingSiteId: request.query.plantingSiteId
      }})
    })

    fastify.post('/plantingsite', async (request, reply) => {
      console.log(repo)
      return repo.save(request.body)
    })
  }
  
  module.exports = categoriesRoutesHandler
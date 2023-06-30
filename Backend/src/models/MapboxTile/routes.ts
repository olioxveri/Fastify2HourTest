import { Category } from "../Categories/category"
import { MapboxTile } from "./MapboxTile"

async function categoriesRoutesHandler (fastify, options) {
  const repo =  fastify.db.manager.getRepository(MapboxTile)
  const catRepo =  fastify.db.manager.getRepository(Category)
  
    fastify.get('/mapboxtile', async (request, reply) => {
      return repo.find({where: {
        id: request.query.id,
        category: request.query.category
      },
      relations: {
        category: true,
    },})
    })

    fastify.post('/mapboxtile', async (request, reply) => {
      const data = request.body
      const cat = await catRepo.findOne({
        where: {
          id: data.categoryId
        }
      })
      data.category = cat
      return await repo.save(data)
    })
  }
  
  module.exports = categoriesRoutesHandler
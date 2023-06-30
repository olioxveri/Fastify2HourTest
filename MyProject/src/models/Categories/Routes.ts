import { Category } from "./category"

async function categoriesRoutesHandler (fastify, options) {
  const repo =  fastify.db.manager.getRepository(Category)

    fastify.get('/category', async (request, reply) => {
      return repo.find({where: {
        id: request.query.id,
        category: request.query.category
      }})
    })

    fastify.post('/category', async (request, reply) => {
      
      return repo.save(request.body)
    })
  }
  
  module.exports = categoriesRoutesHandler
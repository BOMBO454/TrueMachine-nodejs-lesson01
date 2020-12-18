const {product, user} = require('../models/index')

module.exports = {
  create: ({name, userId}) => {
    const data = {}
    data.name = name
    if (userId) {
      data.userId = userId
    }
    return product.create(data)
  },
  get: () => {
    return product.findAll();
  },
  edit: (id, {name, userId}) => {
    const data = {}
    if (name) {
      data.name = name
    }
    if (userId) {
      data.userId = userId
    }
    return product.update(data, {
      where: {
        id
      }
    })
  },
  delete: (id) => product.destroy({
    where: {
      id
    }
  }),
}
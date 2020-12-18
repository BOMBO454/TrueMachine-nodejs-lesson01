const {user,product} = require('../models/index')

module.exports = {
  create: ({firstName}) => {
    const data = {}
    data.firstName = firstName
    return user.create(data)
  },
  get: () => {
    return user.findAll({include:product});
  },
  edit: (id, {firstName}) => user.update({firstName}, {
    where: {
      id
    }
  }),
  delete: (id) => user.destroy({
    where: {
      id
    }
  }),
}
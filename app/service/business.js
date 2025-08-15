module.exports = (app) => {
  const BaseService = require('@bumblebee-honey/tikitaka').service.base(app)
  const getDefaultList = (projectKey) => {
    return [{
      productId: '1',
      productName: `${projectKey}商品1`,
      price: 100,
      inventory: 100,
      createTime: '2021-01-01 12:00:00',
    },
    {
      productId: '2',
      productName: `${projectKey}商品2`,
      price: 200,
      inventory: 200,
      createTime: '2021-01-02 12:00:00',
    },
    {
      productId: '3',
      productName: `${projectKey}商品3`,
      price: 300,
      inventory: 300,
      createTime: '2021-01-03 12:00:00',
    },
    {
      productId: '4',
      productName: `${projectKey}商品4`,
      price: 400,
      inventory: 400,
      createTime: '2021-01-04 12:00:00',
    }]
  }
  return class BusinessService extends BaseService {
    async getList(page, pageSize, projectKey, productName) {
      let list = getDefaultList(projectKey)
      if (productName) {
        list = list.filter(item => item.productName.includes(productName))
      }
      return list
    }

    async getDetail(productId, projectKey) {
      const list = getDefaultList(projectKey)
      return list.find(item => item.productId === productId)
    }
  }
}

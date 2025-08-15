module.exports = (app) => {
  const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(() => {
      resolve()
    }, ms))
  }
  const BaseController = require('@bumblebee-honey/tikitaka').controller.base(app)
  return class BusinessController extends BaseController {
    async getList(ctx) {
      const { business: BusinessService } = app.service
      const { page, pageSize, productName } = ctx.request.query
      const list = await BusinessService.getList(page, pageSize, ctx.projectKey, productName)
      await sleep(Math.random() * 1000)
      this.success(ctx, list, {
        total: list?.length || 0,
        page,
        pageSize,
      })
    }
    async deleteProduct(ctx) {
      const { productId } = ctx?.request?.body
      await sleep(Math.random() * 1000)
      this.success(ctx, { productId, projectKey: ctx.projectKey })
    }

    async getEnumList(ctx) {
      let list = [{
        productId: '1',
        productName: `${ctx.projectKey}商品1`,
        price: 100,
        inventory: 100,
        createTime: '2021-01-01 12:00:00',
      },
      {
        productId: '2',
        productName: `${ctx.projectKey}商品2`,
        price: 200,
        inventory: 200,
        createTime: '2021-01-02 12:00:00',
      },
      {
        productId: '3',
        productName: `${ctx.projectKey}商品3`,
        price: 300,
        inventory: 300,
        createTime: '2021-01-03 12:00:00',
      },
      {
        productId: '4',
        productName: `${ctx.projectKey}商品4`,
        price: 400,
        inventory: 400,
        createTime: '2021-01-04 12:00:00',
      }]
      const arr = list.map(item => ({
        label: item.productName,
        value: item.productName,
      }))
      await sleep(Math.random() * 1000)
      this.success(ctx, arr)
    }
    async createProduct(ctx) {
      const { productName, price, inventory } = ctx.request.body
      await sleep(Math.random() * 1000)
      this.success(ctx, { productName, price, inventory, projectKey: ctx.projectKey })
    }

    async updateProduct(ctx) {
      const { productId, productName, price, inventory } = ctx.request.body
      await sleep(Math.random() * 1000)
      this.success(ctx, { productId, productName, price, inventory, projectKey: ctx.projectKey })
    }

    async getProductDetail(ctx) {
      const { productId } = ctx.request.query
      const { business: BusinessService } = app.service
      const detail = await BusinessService.getDetail(productId, ctx.projectKey)
      await sleep(Math.random() * 1000)
      this.success(ctx, { ...detail })
    }
  }
}
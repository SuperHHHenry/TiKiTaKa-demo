module.exports = (app, router) => {
  const { business: BusinessController } = app.controller
  router.get('/api/proj/product/list', BusinessController.getList.bind(BusinessController))
  
  router.post('/api/proj/product', BusinessController.createProduct.bind(BusinessController))
  router.get('/api/proj/product', BusinessController.getProductDetail.bind(BusinessController))
  router.put('/api/proj/product', BusinessController.updateProduct.bind(BusinessController))
  router.delete('/api/proj/product', BusinessController.deleteProduct.bind(BusinessController))

  router.get('/api/proj/product/enumList', BusinessController.getEnumList.bind(BusinessController))
}


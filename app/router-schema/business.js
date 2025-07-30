module.exports = {
  '/api/proj/product/list': {
    get: {
      query: {
        type: 'object',
        properties: {
          page: {
            type: 'string',
          },
          pageSize: {
            type: 'string',
          },
        },
        required: ['page', 'pageSize'],
      },
    },
  },
  '/api/proj/product': {
    post: {
      body: {
        type: 'object',
        properties: {
          productName: {
            type: 'string',
          },
          price: {
            type: 'number',
          },
          inventory: {
            type: 'number',
          },
        },
        required: ['productName'],
      },
    },
    get: {
      query: {
        type: 'object',
        properties: {
          productId: {
            type: 'string',
          },
        },
        required: ['productId'],
      },
    },
    put: {
      body: {
        type: 'object',
        properties: {
          productId: {
            type: 'string',
          },
        },
        required: ['productId', 'productName'],
      },
    },
    delete: {
      body: {
        type: 'object',
        properties: {
          productId: {
            type: 'string',
          },
        },
        required: ['productId'],
      },
    },
  },
  '/api/proj/product/enumList': {
    get: {
      query: {
        type: 'object',
      },
    },
  },
}
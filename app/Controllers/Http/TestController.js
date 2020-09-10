'use strict'

class TestController {
  cookie({ request, response }) {
    response.cookie('product_id', 1201)
      return request.cookie('product_id')
  }  
}

module.exports = TestController
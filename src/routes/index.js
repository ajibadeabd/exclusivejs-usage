class TestRoute {
    get = (request, response) => {
      response.send("GET request to /api");
    }
  
    post = (request, response) => {
      response.send("POST request to /api");
    }
  
    put = (request, response) => {
      response.send("PUT request to /api");
    }
  
    patch = (request, response) => {
      response.send("PATCH request to /api");
    }
  
    delete = (request, response) => {
      response.send("DELETE request to /api");
    }
  
    'get.user' = (request, response) => {
      response.send("GET request to /api/user");
    }
  
    'delete.user' = (request, response) => {
      response.send("DELETE request to /api/user");
    }
  
    'put.user' = (request, response) => {
      response.send("PUT request to /api/user");
    }
  
    // 'get.user:id' = (request, response) => {
    //   response.send("GET request to /api/product");
    // }
    // 'get:usesr' = (request, response) => {
    //     response.send("GET request to /api/product");
    //   }
    
  }
  
  module.exports = {
    route: TestRoute
  }
  
class UserIdRoute {
    "get" = (request, response) => {
      response.send("GET request to /api/user");
    }
  
    delete = (request, response) => {
      response.send("DELETE request to /api/user");
    }
  
    put = (request, response) => {
      response.send("PUT request to /api/user");
    }
  
    patch = (request, response) => {
      response.send("PATCH request to /api/user");
    }
    
  }
  
  module.exports = {
    route: UserIdRoute
  }
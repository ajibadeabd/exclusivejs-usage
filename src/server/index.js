const Exclusivejs = require("exclusivejs").instance()
Exclusivejs
.setApiPrefix("api/v1") // api/v1
.setRoutePath("src/routes") // default is src/routes
.init()
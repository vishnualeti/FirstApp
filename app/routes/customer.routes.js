module.exports = app => {
  const customers = require("../controllers/customer.controller.js");

  // This API is used to Create a new Customer
  app.post("/customers", customers.create);

  // This API is used to   Retrieve all Customers
  app.get("/customers", customers.findAll);

  // This API is used to  Retrieve a single Customer with customerId
  app.get("/customers/:customerId", customers.findOne);

  //   This API is used to Update a Customer with customerId
  app.put("/customers/:customerId", customers.update);

  // This API is used to  Delete a Customer with customerId
  app.delete("/customers/:customerId", customers.delete);
  app.delete("/customers", customers.deleteAll);
};

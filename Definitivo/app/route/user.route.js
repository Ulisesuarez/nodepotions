module.exports = function(app) {
 
    const user = require('../controller/user.controller.js');
 
    // Create a new Customer
    app.post('/api/user', user.create);
 
    // Retrieve all Customer
    app.get('/api/users', user.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/api/users/:userId', user.findById);
	
	// Retrieve Customers Age
    app.get('/api/users/username/:userName', user.findByUserName);
 
    // Update a Customer with Id
    app.put('/api/user/:userId', user.update);
 
    // Delete a Customer with Id
    app.delete('/api/user/:userId', user.delete);
}
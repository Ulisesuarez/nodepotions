const db = require('../config/db.config.js');
const User = db.users;
const bcrypt = require('bcrypt');
const saltRounds = 10;
// Post a User
exports.create = (req, res) => {
	let hashedPass;
	bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
		hashedPass = hash;
		// Store hash in your password DB.
	});
	// Save to PostgreSQL database
	User.create({  
		userName: req.body.userName,
		password: hashedPass,
		userMail: req.body.email
	}).then(user => {		
		// Send created customer to client FALTA AÑADIR AVATAR
		user.userAvatar = "https://api.adorable.io/avatars/204/abott@adorable.png";
		res.send(user);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	});
};
 
// FETCH all Customers
exports.findAll = (req, res) => {
	User.findAll().then(users => {
		// Send all customers to Client
		res.send(users);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	});
};
 
// Find a Customer by Id
exports.findById = (req, res) => {	
	User.findById(req.params.userId).then(user => {
		res.send(user);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	});
};

// Find Customers by Age
exports.findByUserName = (req, res) => {
	User.findAll({
		where: {
			userName: req.params.userName
		}
	}).then(
		users => {
			res.send(users);
		}
	).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};
 
// Update a User
exports.update = (req, res) => {
	var user = req.body;
	const id = req.params.customerId;
	let hashedPass;
	let dateNow;
	if (req.body.deactivate){
		dateNow = Date.now();
	}
	bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
		hashedPass = hash;
		// Store hash in your password DB.
	});
	Customer.update( { 
		userName: req.body.userName, 
		userMail: req.body.userMail,
		userPass: hashedPass,
		userAvatar: req.body.userAvatar,
		unsubDate:dateNow
		},
						{ where: {id: req.params.userId} }
				   ).then(() => {
						res.status(200).send(customer);
				   }).catch(err => {
						res.status(500).send("Error -> " + err);
				   });
};
 
// Delete a Customer by Id
exports.delete = (req, res) => {
	const id = req.params.userId;
	User.destroy({
	  where: { userId: id }
	}).then(() => {
		res.status(200).send('User has been deleted!');
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	});
};
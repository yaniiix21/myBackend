//JSON web tokens are standard for sending info between our app in a secure manner
//will allow us to gain access to methods that will help us to crate a JSON web token
const jwt = require('jsonwebtoken');
const secret = "CrushAkoNgCrushKo";

//JWT is a way of securely passing info from the server to the frontend or to the other parts of server
//info is kept secure through the use of the secret code
//only the system that knows the secret code that can decode the encrypted info.


//Token Creation
//Analogy: Pack the gift and provide a lock with the secret code as the key

module.exports.createAccessToken = (user) => {
	//Data will be received from the registration form
	//When the users log in, a token will be created with user's inforamtion
	const data = {
		id: user._id,
		email: user.email,
		isAdmin: user.isAdmin
	};

	//generates the token using the form dasta and the secret code with no additional options provided
	return jwt.sign(data, secret, {})
}

// Token Verification
module.exports.verify = (req, res, next) => {
	let token = req.headers.authorization;

	if(typeof token !== "undefined"){
		console.log(token);
		// "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjE0MjI5NDdjZTJlZTNlYTVmMTBlZCIsImVtYWlsIjoiYmlsbGpvYnNAbWFpbC5jb20iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjM5MDA2Nzg4fQ.G2-0laGt7VzoP7eKSZjuCT0M5ASUxdiMtFgdQaTagPA"
		token = token.slice(7, token.length);

		// Validate the token using the "verify" method
		return jwt.verify(token, secret, (err, data) => {
			// If JWT is not valid
			if(err){
				return res.send({auth: "failed"});
			}
			else{
				// Allows the application to proceed with the next middleware function/callback function in the route
				next();
			}
		})
	}
	// Token does not exist
	else{
		return res.send({auth: "failed"});
	}
}

// Token decryption

module.exports.decode = (token) => {
	// Token recieved and is not undefined
	if(typeof token !== "undefined"){
		token = token.slice(7, token.length);

		return jwt.verify(token, secret, (err, data) => {
			if(err){
				return null;
			}
			else{
				// "Decode" method is used to obtain the information from the JWT
				// "{complete: true}" option allows to return additional information from the JWT
				// Returns an object with access to the "payload" property which contains user information stored when the token was generated.
				return jwt.decode(token, {complete: true}).payload;
			}
		})
	}
	else{
		return null;
	}
}
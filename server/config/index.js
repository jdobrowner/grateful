var configuration = {
	express_port: 3090,
	mogodb: {
		url: 'mongodb://localhost:mindful-moments/devData'
	},
	secret: process.env.SECRET_API_KEY
}

module.exports = configuration;

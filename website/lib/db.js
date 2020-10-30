/** @format */

const mysql = require("serverless-mysql");

const db = mysql({
	config: {
		host: "localhost",
		database: "names",
		user: "root",
		password: "example",
	},
});

exports.query = async (query) => {
	try {
		await db.connect();
		const results = await db.query(query);
		await db.end();
		return results;
	} catch (error) {
		return { error };
	}
};

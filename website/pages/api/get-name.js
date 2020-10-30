/** @format */

const db = require("../../lib/db");
const escape = require("sql-template-strings");

export default async (req, res) => {
	if (!req.query.name) {
		res.status(400).json({ error: "must include a name" });
	} else {
		const name = req.query.name;
		const result = await db.query(escape`
			SELECT *
			FROM names
			WHERE fname = ${name}
		`);

		res.status(200).json({ result });
	}
};

/** @format */

import Head from "next/head";
import styles from "../styles/instructions.module.css";
import { fetchJson } from "../lib/helpers";

export default class Instructions extends React.Component {
	state = {
		greeting: "I haven't said anything yet.",
		name: "",
	};

	fetchGreeting = async () => {
		try {
			var json = await fetchJson("/api/hello");
			if (json.greeting) this.setState({ greeting: json.greeting });
			else throw new Error("Error while fetching greeting");
		} catch (e) {
			console.error(e);
			this.setState({ greeting: "I couldn't say hello" });
		}
	};

	fetchName = async () => {
		try {
			var json = await fetchJson("/api/get-name?name=Michael");
			if (json.result) this.setState({ name: this.joinName(json.result[0]) });
			else throw new Error("Error while fetching names");
		} catch (e) {
			console.error(e);
			this.setState({ name: "error" });
		}
	};

	joinName = (databaseResult) => {
		let name = "";
		if (databaseResult.fname) name += databaseResult.fname + " ";
		if (databaseResult.minit) name += databaseResult.minit + ". ";
		if (databaseResult.lname) name += databaseResult.lname + " ";
		if (databaseResult.suffix) name += databaseResult.suffix;

		return name.trim();
	};

	render() {
		return (
			<div>
				<Head>
					<title>Instructions</title>
				</Head>
				<main className={styles.page}>
					<h1>Use API to query the database</h1>
					<ul>
						<li>Create more database functions in website/pages/api/</li>
						<li>
							use these functions to fetch data from the database when needed
						</li>
					</ul>
					<div className={styles.example}>
						<h2>Example</h2>
						<div>Fetch data from /api/hello</div>
						<button onClick={this.fetchGreeting}>say hello</button>
						<div>{this.state.greeting}</div>
					</div>
					<div className={styles.example}>
						<h2>Example</h2>
						<div>Fetch data from /api/get-name</div>
						<button onClick={this.fetchName}>get name</button>
						<div>The first matching name is: {this.state.name}</div>
					</div>
				</main>
			</div>
		);
	}
}

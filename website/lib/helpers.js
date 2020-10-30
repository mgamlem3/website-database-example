/** @format */

export async function fetchJson(url) {
	try {
		const response = await fetch(url);
		return response.json();
	} catch (e) {
		console.error(`Error while fetching JSON: `, e);
	}
}

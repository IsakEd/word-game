import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const res = await request.json();
	console.log(res);
	return json(res);
}

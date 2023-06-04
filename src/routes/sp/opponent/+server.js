import { json } from '@sveltejs/kit';
import compute from './compute.js';

export async function POST({ request }) {
	const res = await request.json();
	const newWord = compute(JSON.parse(res), 'swedish');
	return json(newWord);
}

// Turns out that looking through the entire dictionary every time is terribly inefficient, who could've guessed?
// the dictionatries have been separated into an array of arrays, with one array for each individual letter. This is where alphIndex comes in.
// This significantly reduces the computational load, but it's also definitely not the most efficient. Maybe a BST would be quicker?
// I don't know, I'm far from a computer scientist

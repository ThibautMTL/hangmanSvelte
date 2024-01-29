export const load = async () => {
	const res = await fetch('https://trouve-mot.fr/api/random/1');
	const data = await res.json();
	console.log(data);
	return data[0];
};

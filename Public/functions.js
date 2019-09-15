const chess = require('../API/chessAPI');

async function getStats() {
	try {
		const statsResponse = await chess.get('/stats');
		const gamesResponse = await chess.get('/games/2019/08');
		console.log(statsResponse.data);
		console.log(gamesResponse.data.games);
	} catch (error) {
		console.error(error);
	}
}

getStats();

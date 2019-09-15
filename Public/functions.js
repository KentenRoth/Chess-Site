const chess = require('../API/chessAPI');

async function getStats() {
	try {
		const response = await chess.get('/stats');
		const blitz = response.data.chess_blitz;
		const daily = response.data.chess_daily;
		const blitzRecord = blitz.record;
		const blitzRating = blitz.last.rating;
		const dailyRecord = daily.record;
		const dailyRating = daily.last.rating;
	} catch (error) {
		console.error(error);
	}
}

async function getGames() {
	try {
		const response = await chess.get('/games/2019/08');
		const string = response.data.games[0].pgn;
		const wonByString = string
			.split('Termination')
			.pop()
			.split(']')[0];
		const didIWin = wonByString.includes('king_k2');
	} catch (error) {
		console.log(error);
	}
}

getStats();
getGames();

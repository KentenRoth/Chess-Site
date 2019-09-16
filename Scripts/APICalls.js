var request = new XMLHttpRequest();
request.open('GET', 'https://api.chess.com/pub/player/king_k2/stats', true);
request.open(
	'GET',
	'https://api.chess.com/pub/player/king_k2/games/2019/08',
	true
);
request.onload = function() {
	var data = JSON.parse(this.response);
	const string = data.games[0].pgn;
	const wonByString = string
		.split('Termination')
		.pop()
		.split(']')[0];
	const didIWin = wonByString.includes('king_k2');
};
request.send();

var request = new XMLHttpRequest();
request.open('GET', 'https://api.chess.com/pub/player/king_k2/stats', true);

request.onload = function() {
	var data = JSON.parse(this.response);
	const blitz = data.chess_blitz;
	const daily = data.chess_daily;
	const blitzRecord = blitz.record;
	const blitzRating = blitz.last.rating;
	const dailyRecord = daily.record;
	const dailyRating = daily.last.rating;
};
request.send();

const played = document.getElementById('played');

const container = document.createElement('div');
container.setAttribute('class', 'container');

played.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://api.chess.com/pub/player/king_k2/stats', true);
request.open(
	'GET',
	'https://api.chess.com/pub/player/king_k2/games/2019/09',
	true
);
request.onload = function() {
	var data = JSON.parse(this.response);

	data.games.forEach(game => {
		const string = game.pgn;
		const wonByString = string
			.split('Termination "')
			.pop()
			.split('"]')[0];
		const didIWin = wonByString.includes('king_k2');
		const wonHow = wonByString.split(' ').splice(-1);

		const card = document.createElement('div');
		card.setAttribute('class', 'card');

		const whitePieces = document.createElement('p');
		whitePieces.setAttribute('class', 'whitePieces');
		if (game.white.username === 'king_k2') {
			whitePieces.textContent = 'king_k2';
		} else {
			whitePieces.textContent = game.white.username;
		}

		const blackPieces = document.createElement('p');
		blackPieces.setAttribute('class', 'blackPieces');
		if (game.black.username === 'king_k2') {
			blackPieces.textContent = 'king_k2';
		} else {
			blackPieces.textContent = game.black.username;
		}
		const outcome = document.createElement('p');
		if (didIWin === true) {
			outcome.setAttribute('class', 'won');
			outcome.textContent = 'Won';
		} else {
			outcome.setAttribute('class', 'lost');
			outcome.textContent = 'Lost';
		}

		const winBy = document.createElement('p');
		winBy.setAttribute('class', 'winBy');
		winBy.textContent = wonHow;

		container.appendChild(card);
		card.appendChild(whitePieces);
		card.appendChild(blackPieces);
		card.appendChild(outcome);
		card.appendChild(winBy);
		console.log(didIWin);
	});
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

// ********** NavBar Toggle **********\
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
navBarToggle.addEventListener('click', function() {
	mainNav.classList.toggle('active');
});

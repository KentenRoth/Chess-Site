const played = document.getElementById('played');

const container = document.createElement('div');
container.setAttribute('class', 'container');

const cardBox = document.createElement('div');
cardBox.setAttribute('class', 'cardBox');

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
	var counter = 0;

	data.games.some(game => {
		if (counter >= 12) {
			return true;
		}
		const string = game.pgn;
		const wonByString = string
			.split('Termination "')
			.pop()
			.split('"]')[0];
		const didIWin = wonByString.includes('king_k2');
		const wonHow = wonByString.split(' ').splice(-1);

		const card = document.createElement('div');
		card.setAttribute('class', 'card');

		// const outcome = document.createElement('span');

		const wonBy = document.createElement('span');
		wonBy.setAttribute('class', 'wonBy');

		const whitePieces = document.createElement('span');
		whitePieces.setAttribute('class', 'whitePieces');
		const whiteOutcome = document.createElement('span');
		if (game.white.username === 'king_k2') {
			if (didIWin === true) {
				whiteOutcome.setAttribute('class', 'won');
				whiteOutcome.textContent = 'Won';
				wonBy.textContent = wonHow;
				whitePieces.textContent = 'King_K2';
				whitePieces.appendChild(whiteOutcome);
				whiteOutcome.appendChild(wonBy);
			} else {
				whiteOutcome.setAttribute('class', 'lost');
				whitePieces.textContent = 'King_K2';
				whiteOutcome.textContent = 'Lost';
				whitePieces.appendChild(whiteOutcome);
			}
		} else {
			if (didIWin === false) {
				whiteOutcome.setAttribute('class', 'won');
				whiteOutcome.textContent = 'Won';
				whitePieces.textContent = 'Opponent';
				wonBy.textContent = wonHow;
				whitePieces.appendChild(whiteOutcome);
				whiteOutcome.appendChild(wonBy);
			} else {
				whiteOutcome.setAttribute('class', 'lost');
				whiteOutcome.textContent = 'Lost';
				whitePieces.textContent = 'Opponent';

				whitePieces.appendChild(whiteOutcome);
			}
		}

		const blackPieces = document.createElement('span');
		blackPieces.setAttribute('class', 'blackPieces');
		const blackOutcome = document.createElement('span');

		if (game.black.username === 'king_k2') {
			if (didIWin === true) {
				blackOutcome.setAttribute('class', 'won');
				blackOutcome.textContent = 'Won';
				wonBy.textContent = wonHow;
				blackPieces.textContent = 'King_K2';
				blackPieces.appendChild(blackOutcome);
				blackOutcome.appendChild(wonBy);
			} else {
				blackOutcome.setAttribute('class', 'lost');
				blackOutcome.textContent = 'Lost';
				blackPieces.textContent = 'King_K2';
				blackPieces.appendChild(blackOutcome);
			}
		} else {
			if (didIWin === false) {
				blackOutcome.setAttribute('class', 'won');
				blackOutcome.textContent = 'Won';
				wonBy.textContent = wonHow;
				blackPieces.textContent = 'Opponent';
				blackPieces.appendChild(blackOutcome);
				blackOutcome.appendChild(wonBy);
			} else {
				blackOutcome.setAttribute('class', 'lost');
				blackOutcome.textContent = 'Lost';
				blackPieces.textContent = 'Opponent';
				blackPieces.appendChild(blackOutcome);
			}
		}

		// if (didIWin === true) {
		// 	outcome.textContent = 'Won';
		// 	wonBy.textContent = wonHow;
		// 	outcome.appendChild(wonBy);
		// } else {
		// 	outcome.setAttribute('class', 'lost');
		// 	outcome.textContent = 'Lost';
		// 	wonBy.setAttribute('class', 'wonBy');
		// 	wonBy.textContent = wonHow;
		// 	outcome.appendChild(wonBy);
		// }

		// const winBy = document.createElement('span');
		// winBy.setAttribute('class', 'winBy');
		// winBy.textContent = wonHow;

		const br = document.createElement('br');

		container.appendChild(cardBox);
		cardBox.appendChild(card);
		card.appendChild(whitePieces);
		card.appendChild(br);
		card.appendChild(blackPieces);
		counter++;
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

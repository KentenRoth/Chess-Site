// ********** Chess Card ********** \\

const played = document.getElementById('played');

const container = document.createElement('div');
container.setAttribute('class', 'container');

const cardBox = document.createElement('div');
cardBox.setAttribute('class', 'cardBox');

played.appendChild(container);

var request = new XMLHttpRequest();

const dateObj = new Date();
const month = dateObj.getUTCMonth() + 1;
const year = dateObj.getUTCFullYear();

request.open('GET', 'https://api.chess.com/pub/player/king_k2/stats', true);
request.open(
	'GET',
	`https://api.chess.com/pub/player/king_k2/games/${year}/${month}`,
	true
);
request.onload = function() {
	var data = JSON.parse(this.response);
	var counter = 0;

	data.games.reverse().some(game => {
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

		const whiteRow = document.createElement('div');
		whiteRow.setAttribute('class', 'row');

		const whiteWonBy = document.createElement('div');
		whiteWonBy.setAttribute('class', 'wonBy col-4');

		const whitePieces = document.createElement('div');
		whitePieces.setAttribute('class', 'whitePieces col-4');
		const whiteOutcome = document.createElement('div');
		if (game.white.username === 'king_k2') {
			if (didIWin === true) {
				whiteOutcome.setAttribute('class', 'won col-4');
				whiteOutcome.textContent = 'Won';
				whitePieces.textContent = 'King_K2';
			} else {
				whiteOutcome.setAttribute('class', 'lost col-4');
				whitePieces.textContent = 'King_K2';
				whiteWonBy.textContent = wonHow;
				whiteOutcome.textContent = 'Lost';
			}
		} else {
			if (didIWin === false) {
				whiteOutcome.setAttribute('class', 'won col-4');
				whiteOutcome.textContent = 'Won';
				whitePieces.textContent = 'Opponent';
				whiteOutcome.appendChild(whiteWonBy);
			} else {
				whiteOutcome.setAttribute('class', 'lost col-4');
				whiteOutcome.textContent = 'Lost';
				whiteWonBy.textContent = wonHow;
				whitePieces.textContent = 'Opponent';

				whitePieces.appendChild(whiteOutcome);
			}
		}
		const blackRow = document.createElement('div');
		blackRow.setAttribute('class', 'row');

		const blackWonBy = document.createElement('div');
		blackWonBy.setAttribute('class', 'wonBy col-4');

		const blackPieces = document.createElement('div');
		blackPieces.setAttribute('class', 'blackPieces col-4');
		const blackOutcome = document.createElement('div');
		if (game.black.username === 'king_k2') {
			if (didIWin === true) {
				blackOutcome.setAttribute('class', 'won col-4');
				blackOutcome.textContent = 'Won';
				blackPieces.textContent = 'King_K2';
			} else {
				blackOutcome.setAttribute('class', 'lost col-4');
				blackOutcome.textContent = 'Lost';
				blackWonBy.textContent = wonHow;
				blackPieces.textContent = 'King_K2';
				blackPieces.appendChild(blackOutcome);
			}
		} else {
			if (didIWin === false) {
				blackOutcome.setAttribute('class', 'won col-4');
				blackOutcome.textContent = 'Won';
				blackPieces.textContent = 'Opponent';
				blackOutcome.appendChild(blackWonBy);
			} else {
				blackOutcome.setAttribute('class', 'lost col-4');
				blackOutcome.textContent = 'Lost';
				blackWonBy.textContent = wonHow;
				blackPieces.textContent = 'Opponent';
				blackPieces.appendChild(blackWonBy);
			}
		}

		const br = document.createElement('br');

		container.appendChild(cardBox);
		cardBox.appendChild(card);
		card.appendChild(whiteRow);
		whiteRow.appendChild(whitePieces);
		whiteRow.appendChild(whiteOutcome);
		whiteRow.appendChild(whiteWonBy);
		card.appendChild(br);
		card.appendChild(blackRow);
		blackRow.appendChild(blackPieces);
		blackRow.appendChild(blackOutcome);
		blackRow.appendChild(blackWonBy);
		counter++;
	});
};
request.send();

// ********** Chess Ratings and Record ********** \\

const blitzRecord = document.getElementById('blitzRecord');
const dailyRecord = document.getElementById('dailyRecord');

const blitzContainer = document.createElement('div');
blitzContainer.setAttribute('class', 'blitzContainer');

const dailyContainer = document.createElement('div');
dailyContainer.setAttribute('class', 'dailyContainer');

const blitzStats = document.createElement('div');
blitzStats.setAttribute('class', 'blitzStats');

const dailyStats = document.createElement('div');
dailyStats.setAttribute('class', 'dailyStats');

var request = new XMLHttpRequest();
request.open('GET', 'https://api.chess.com/pub/player/king_k2/stats', true);

request.onload = function() {
	var data = JSON.parse(this.response);
	const blitz = data.chess_blitz;
	const daily = data.chess_daily;
	const blitzWins = blitz.record.win;
	const blitzLoss = blitz.record.loss;
	const blitzRating = blitz.last.rating;
	const dailyWins = daily.record.win;
	const dailyLoss = daily.record.loss;
	const dailyRating = daily.last.rating;

	blitzStats.textContent =
		'Won: ' + blitzWins + ' Lost: ' + blitzLoss + ' Rating: ' + blitzRating;

	dailyStats.textContent =
		'Won: ' + dailyWins + ' Lost: ' + dailyLoss + ' Rating: ' + dailyRating;

	blitzRecord.appendChild(blitzContainer);
	blitzContainer.appendChild(blitzStats);
	dailyRecord.appendChild(dailyContainer);
	dailyContainer.appendChild(dailyStats);
};
request.send();

// ********** NavBar Toggle **********\

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
navBarToggle.addEventListener('click', function() {
	mainNav.classList.toggle('active');
});

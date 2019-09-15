const axios = require('axios');

const chess = axios.create({
	baseURL: 'https://api.chess.com/pub/player/king_k2'
});

module.exports = chess;

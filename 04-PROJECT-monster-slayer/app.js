/* eslint-disable no-plusplus */
// https://monster-slayer.mat2ja.vercel.app/

/// just a regular javascript function
function getRandomValue(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

// eslint-disable-next-line no-undef
const app = Vue.createApp({
	data() {
		return {
			playerName: '',
			playerHealth: 100,
			monsterHealth: 100,
			currentRound: 0,
			winner: null,
			logMessages: [],
		};
	},
	computed: {
		/// put too much logic in html is not good (original : use :style="{width : monsterHealth + '%'}" in html)
		/// we can add this logic in computed property, return css whenever our data property changed
		monsterBarStyles() {
			const damage = this.monsterHealth / 100;
			return { transform: `scaleX(${damage})` };
		},
		playerBarStyles() {
			const damage = this.playerHealth / 100;
			return { transform: `scaleX(${damage})` };
		},
		mayUseSpecialAttack() {
			return this.currentRound % 3 !== 0;
		},
	},
	/// we can add 'which one wins' logic in attackMonster(), but the same code will repeat everywhere
	/// instead with Vue, we have a nicer way of keeping track of something than doing something in reaction to that, we could add a watcher
	watch: {
		/// function name should === data property name we want to watch
		/// remember to bring 'valud' parameter in this function, it's the data property itself
		playerHealth(value) {
			if (value <= 0 && this.monsterHealth <= 0) {
				this.winner = 'draw';
			} else if (value <= 0) {
				this.winner = 'monster';
			}
		},
		monsterHealth(value) {
			if (value <= 0 && this.playerHealth <= 0) {
				this.winner = 'draw';
			} else if (value <= 0) {
				this.winner = 'player';
			}
		},
		winner(value) {
			if (value === 'player') {
				this.monsterHealth = 0;
				this.addLogMessage(this.playerName, 'win', '');
			} else if (value === 'monster') {
				this.playerHealth = 0;
				this.addLogMessage('monster', 'win', '');
			} else if (value === 'draw') {
				this.playerHealth = 0;
				this.monsterHealth = 0;
				this.addLogMessage('monster', 'loss', '');
				this.addLogMessage(this.playerName, 'loss', '');
			}
		},
		currentRound(value) {
			if (value > 0 && !this.playerName.trim()) {
				this.playerName = 'Player';
			}
		},
		playerName(value) {
			if (value.length > 16) {
				this.playerName = value.slice(0, 16);
			}
		},
	},
	methods: {
		attackMonster() {
			this.currentRound++;
			const attackValue = getRandomValue(5, 12);
			this.monsterHealth -= attackValue;
			this.addLogMessage(
				this.playerName || 'player',
				'attack',
				attackValue
			);
			/// we can also access other method in 'method' using this.METHOD_NAME
			/// just because we can access 'data' property through 'this' keyword, we can also access methods through 'this' keyword
			/// reason : same as 'data' property, 'data' property would be merged into a behind the scenes managed global object
			/// and it's the same for methods and for computed property, all of them is getting merged into that begind the scenes controlled global object
			this.attackPlayer();
		},
		attackPlayer() {
			const attackValue = getRandomValue(8, 15);
			this.playerHealth -= attackValue;
			this.addLogMessage('monster', 'attack', attackValue);
		},
		specialAttackMonster() {
			this.currentRound++;
			const attackValue = getRandomValue(10, 25);
			this.monsterHealth -= attackValue;
			this.addLogMessage(this.playerName, 'special-attack', attackValue);
			this.attackPlayer();
		},
		healPlayer() {
			this.currentRound++;
			const healValue = getRandomValue(12, 20);
			/// health can not exceed 100
			if (this.playerHealth + healValue > 100) {
				this.playerHealth = 100;
			} else {
				this.playerHealth += healValue;
			}
			this.addLogMessage(this.playerName, 'heal', healValue);
			this.attackPlayer();
		},
		surrenderPlayer() {
			this.playerHealth = 0;
			this.addLogMessage(this.playerName, 'forfeit', '');
		},
		restartGame() {
			this.winner = null;
			this.monsterHealth = 100;
			this.playerHealth = 100;
			this.currentRound = 0;
			this.playerName = '';
			this.logMessages = [];
		},
		setPlayerName(e) {
			this.playerName = e.target.value;
		},
		addLogMessage(who, what, value) {
			/// 'unshift' is like 'push', 'push' add item to the rear, 'unshift' add item to the front
			this.logMessages.unshift({
				actionBy: who,
				actionType: what,
				actionValue: value,
			});
		},
		stylePlayer(log) {
			return {
				'log--player': log.actionBy === this.playerName,
				'log--monster': log.actionBy === 'monster',
			};
		},
		currentTime() {
			const now = new Date();
			const hours = now.getHours();
			const minutes = now.getMinutes();
			const seconds = now.getSeconds();
			return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
				seconds < 10 ? `0${seconds}` : seconds
			}`;
		},
	},
});

const vm = app.mount('#game');

Vue.component('my-character', {
    props: ['css'],
    template: '<img id="character" src="src/images/player.png" class="{{css}}" width="190" alt="">',
    mounted() {
        console.log(this.props)
    },
})

var app = new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        specialAttackCount: 1,
        isAttacking: false,
        logs: [],
        playerName: 'efff',
        errorMessage: '',
    },



    watch: {
        playerHealth(newVal, old) {
            this.checkWin();

        },
        isAttacking(newVal, old) {
            this.animateCharacter();
        }
    },
    methods: {
        startGame: function() {
            if (this.playerName !== '') {
                this.errorMessage = '';
                this.gameIsRunning = true;
                this.logs = [];
            }
            // else
            document.getElementById('playerName').className = 'input is-danger';

        },
        restartGame: function() {
            this.gameIsRunning = true;
            this.resetData();
        },
        resetData: function() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.specialAttackCount = 1;
            this.logs = [];
        },
        giveUp: function() {
            this.gameIsRunning = false;
            this.playerName = '';
            this.resetData();
        },
        attack: function() {
            this.errorMessage = '';
            this.playerAttack();
            this.monsterAttack();
        },
        calculateDamage: function(min, max) {
            return Math.floor(Math.random() * (max - min) + min)
        },
        heal: function() {

            if (this.playerHealth <= 90 && (this.playerHealth > 0 && this.monsterHealth > 0)) {
                this.errorMessage = '';
                this.playerHealth += 10;
                this.monsterAttack();
                this.logs.unshift({ 'player': true, 'text': 'Player used heal' });

            }
        },

        animateCharacter: function() {
            console.log('animating');
            document.getElementById('character').className = 'character-move';
            setTimeout(function() {
                document.getElementById('character').className = '';
                document.getElementById('monster').className = 'monster-move';

            }, 400);

            setTimeout(function() {
                document.getElementById('monster').className = '';
                this.isAttacking = false;
                console.log(this.isAttacking)
                console.log('disabling attack');
            }, 900);
        },
        playerAttack: function() {
            this.errorMessage = '';
            let damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.logs.unshift({ 'player': true, 'text': 'Player hits monster, damage: ', 'damage': damage });
            this.isAttacking = true;

            setTimeout(function() {
                this.isAttacking = false;
            }, 900);
        },
        monsterAttack: function() {
            this.errorMessage = '';
            let damage = this.calculateDamage(5, 11);
            this.playerHealth -= damage;
            this.logs.unshift({ 'player': false, 'text': 'Monster attacks, damage:', 'damage': damage });

            if (this.playerHealth < 0) {
                this.playerHealth = 0;
            }
        },
        specialAttack: function() {
            if (this.specialAttackCount != 0) {
                this.specialAttackCount = 0;
                let damage = this.calculateDamage(10, 20);
                this.monsterHealth -= damage;

                let log = { 'player': true, 'text': 'Player uses special attack, damage:', 'damage': damage };
                this.addLog(log);

                this.monsterAttack();
            } else {
                this.errorMessage = `You don't have any attack left.`;
            }

        },
        addLog: function(log) {
            this.logs.unshift(log);
        },
        checkWin: function() {
            if (this.playerHealth <= 0) {
                this.resetData();
                this.gameIsRunning = false;
                this.errorMessage = "You lost! Wanna play again?";
            } else if (this.monsterHealth <= 0) {
                this.resetData();
                this.gameIsRunning = false;
                this.errorMessage = "Well done you have won! Wanna play again?";
            }
            return false;
        }

    }
});
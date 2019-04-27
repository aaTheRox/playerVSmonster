var vue = new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        specialAttackCount: 1,
        logs: [],
        playerName: ''
    },
    methods: {
        startGame: function() {
            if(this.playerName !=='') {
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
        giveUp: function () {
            this.gameIsRunning = false;
            this.playerName = '';
            this.resetData();
        },
        attack: function() {
            if(!this.checkWin()) {
                this.playerAttack();
                this.monsterAttack();
            }

        },
        calculateDamage: function(min, max) {
           return Math.floor(Math.random() * (max - min) + min)
        },
        heal: function() {
            if(this.playerHealth <= 90 && (this.playerHealth > 0 && this.monsterHealth > 0)) {
                this.playerHealth += 10;
                this.monsterAttack();
                this.logs.unshift({'player': true, 'text': 'Player used heal'});

            }
        },
        playerAttack: function() {
            let damage = this.calculateDamage(3,10);
            this.monsterHealth -= damage;
            this.logs.unshift({'player': true, 'text': 'Player hits monster, damage: ', 'damage': damage});
        },
        monsterAttack: function() {
            let damage = this.calculateDamage(5,11);
            this.playerHealth -= damage;
            this.logs.unshift({'player': false, 'text': 'Monster attacks, damage:', 'damage': damage});
        },
        specialAttack: function() {
            if(this.specialAttackCount != 0) {
                this.specialAttackCount = 0;
                let damage = this.calculateDamage(10,20);
                this.monsterHealth -= damage;

                let log = {'player': true, 'text': 'Player uses special attack, damage:', 'damage': damage};
                this.addLog(log);

                this.monsterAttack();
            } else {
                alert(`You don't have any attack left.`)
            }
            
        },
        addLog: function(log) {
            this.logs.unshift(log);
        },
        checkWin: function() {
            if(this.playerHealth <= 0) {
                this.resetData();
                this.gameIsRunning = false;
                if(confirm("You lost! Wanna play again?")) {
                        this.restartGame();
                        return true;
                    } 
                }
            else if(this.monsterHealth <= 0) {
                if(confirm("Well done you have won! Wanna play again?")) {
                    this.restartGame();
                    return true;
                }

                if(this.playerHealth < 0) {
                    this.playerHealth = 0;
                }

                this.resetData();
                
            }
            return false;
        },

        saveNickname: function() {
            alert('saved')
        },
        resetData: function () {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.specialAttackCount = 1;
            this.logs = [];
        }
    }
});
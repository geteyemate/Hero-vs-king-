const hero = document.getElementById('hero');
const demon = document.getElementById('demon');
const spark = document.getElementById('spark');

function triggerFight() {
    // Hero attacks
    setTimeout(() => {
        hero.classList.add('attack');
        
        setTimeout(() => {
            spark.classList.add('active');
            demon.classList.add('hit');
        }, 100);

        // Reset after hit
        setTimeout(() => {
            hero.classList.remove('attack');
            spark.classList.remove('active');
            demon.classList.remove('hit');
        }, 300);
    }, 500);
}

// Continuous loop for reel action
setInterval(triggerFight, 1500);

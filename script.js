const hero = document.getElementById('hero');
const demon = document.getElementById('demon');
const heroHp = document.getElementById('hero-hp');
const demonHp = document.getElementById('demon-hp');

let heroHealth = 100;
let demonHealth = 100;

function strikeEffect() {
    hero.classList.add('attack');
    setTimeout(() => {
        demon.classList.add('hit');
        demonHealth -= 20;
        demonHp.style.width = Math.max(demonHealth, 0) + '%';
        
        setTimeout(() => {
            hero.classList.remove('attack');
            demon.classList.remove('hit');
        }, 200);
    }, 200);

    if (demonHealth <= 0) {
        setTimeout(() => {
            heroHealth = 100;
            demonHealth = 100;
            heroHp.style.width = '100%';
            demonHp.style.width = '100%';
        }, 1500);
    }
}

setInterval(strikeEffect, 2000);

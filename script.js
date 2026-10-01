const hero = document.getElementById('hero');
const demon = document.getElementById('demon');
const heroBlast = document.getElementById('hero-blast');
const demonBlast = document.getElementById('demon-blast');
const impact = document.getElementById('impact-effect');

function runFightSequence() {
    // Step 1: Hero charges power
    setTimeout(() => {
        hero.classList.add('power-charge');
    }, 1000);

    // Step 2: Hero moves forward slowly & strikes sword
    setTimeout(() => {
        hero.classList.remove('power-charge');
        hero.classList.add('move-forward');
    }, 3000);

    setTimeout(() => {
        hero.classList.add('strike');
        demon.classList.add('hit');
    }, 5000);

    // Step 3: Reset positions
    setTimeout(() => {
        hero.classList.remove('move-forward', 'strike');
        demon.classList.remove('hit');
    }, 7000);

    // Step 4: Demon charges dark power
    setTimeout(() => {
        demon.classList.add('power-charge');
    }, 9000);

    // Step 5: Demon shoots Red Fireball
    setTimeout(() => {
        demon.classList.remove('power-charge');
        demonBlast.style.transition = 'all 1.5s ease-in';
        demonBlast.style.opacity = '1';
        demonBlast.style.transform = 'translateX(-180px)';
    }, 12000);

    // Step 6: Hero counters with Blue Energy Blast
    setTimeout(() => {
        heroBlast.style.transition = 'all 1.5s ease-in';
        heroBlast.style.opacity = '1';
        heroBlast.style.transform = 'translateX(180px)';
    }, 14000);

    // Step 7: Clash in the middle with explosion
    setTimeout(() => {
        impact.style.transform = 'translateX(-50%) scale(1.5)';
        impact.style.opacity = '1';
        hero.style.transform = 'translateX(30px) scale(0.9)';
        demon.style.transform = 'translateX(-30px) scale(0.9)';
    }, 15500);

    // Step 8: Clean up blasts and reset for next cinematic loop
    setTimeout(() => {
        heroBlast.style.transition = 'none';
        heroBlast.style.opacity = '0';
        heroBlast.style.transform = 'translateX(0)';

        demonBlast.style.transition = 'none';
        demonBlast.style.opacity = '0';
        demonBlast.style.transform = 'translateX(0)';

        impact.style.transform = 'translateX(-50%) scale(0)';
        impact.style.opacity = '0';

        hero.style.transform = 'translateX(0)';
        demon.style.transform = 'translateX(0)';
    }, 18000);
}

// Start sequence and loop every 20 seconds for continuous reel recording
runFightSequence();
setInterval(runFightSequence, 20000);

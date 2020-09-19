
// -----------------------------  Actors  ------------------------
// Opponents: aliens & player
// alien and captain both have spaceships that share certain dynamic properties.

// -----------------------------  Differences in Actors  ------------------------
// player's ship's properties have known starting values
// alien's ship's properties have different random starting values with each ship's instance.

// -----------------------------  Attack  ------------------------
// player attacks first
// both alien and player attack in the same way (generate a random number to determine whether or not the attack hits the opponent.) 
// the battle is back and forth attacks until someone's hull <= 0.

// -----------------------------  if alien hull <= 0  ------------------------
// prompt user to retreat or fight next alien ship. (6 alien ships in all.)

// -----------------------------  End Game  ------------------------
// if player destroys all alien ships - Game Over - Player wins
// if player is destroyed - Game Over - Aliens win
// if player retreats - Game Over - Aliens win


// const ussAssembly = new Player();


class Ship {
  constructor (hull, firepower, accuracy) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
  attack() {
    if (Math.random() < this.accuracy) {
      console.log('It\'s a hit!');
      if (this === ussAssembly) {
        alienShip[i].hull -= ussAssembly.firepower;
        console.log(`AlienShip${i+1} took ${ussAssembly.firepower} damage. It's hull is now: ${alienShip[i].hull}`);
      } else if (this === alienShip[i]) {
          ussAssembly.hull -= alienShip[i].firepower;
          console.log(`Your ship took ${alienShip[i].firepower} damage. Your hull is now: ${ussAssembly.hull}`);
      }
    } else {
      if (this === ussAssembly) {
        console.log('You missed! Take cover!');
      } else if (this === alienShip[i]) {
        console.log(`AlienShip${i+1} missed! Take your best shot!`);
      }
    }
  }
}

class Player extends Ship {
  constructor() {
    super(20, 5, 0.7);
  }
}

class Alien extends Ship {
  constructor() {
    super(Math.floor(Math.random() * (4) + 3), Math.floor(Math.random() * (3) + 2), (Math.random() * (.2) + .6).toFixed(1));
  }
}

// Instantiate ship instances
const ussAssembly = new Player();

const alienShip = [];
for (var i = 0; i < 6; i++) {
  alienShip.push(new Alien());
}

console.log(ussAssembly);
console.log(alienShip);

for (var i = 0; i < alienShip.length; i++) {
  ussAssembly.attack();
  alienShip[i].attack();
}


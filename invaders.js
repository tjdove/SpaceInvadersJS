const canvas = document.querySelector("canvas");

const c = canvas.getContext("2d");

// Create an Image object for each sprite
// const playerSprite = new Image();
// sprite1.src = "sprite1.png";
// const invaderSprite = new Image();
// sprite2.src = "sprite2.png";

canvas.width = 1024;
canvas.height = 576;
const gravity = 0.2;

c.fillRect(0, 0, canvas.width, canvas.height);

class Sprite {
  constructor({ pos, vel, width, height }) {
    this.pos = pos;
    this.vel = vel;
    this.width = width;
    this.height = height;
  }

  draw() {
    c.fillStyle = "red";
    c.fillRect(this.pos.x, this.pos.y, this.width, this.height);
  }

  update() {
    this.draw();

    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
    if (this.pos.y + this.height + this.vel.y >= canvas.height) {
      this.vel.y = 0;
    } else {
      //Only increase veleocity if we aren't on the bottom.
      this.vel.y += gravity;
    }
  }
}

const player = new Sprite({
  pos: { x: 0, y: 0 },
  vel: { x: 0, y: 0 },
  width: 50,
  height: 100,
});

const enemy = new Sprite({
  pos: { x: 300, y: 300 },
  vel: { x: 0, y: 0 },
  width: 100,
  height: 50,
});

const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  w: {
    pressed: false,
  },
};

let lastKey;

function animate() {
  window.requestAnimationFrame(animate);
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  //c.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  enemy.update();

  player.vel.x = 0;

  if (keys.a.pressed && lastKey === "a") {
    player.vel.x = -1;
  } else if (keys.d.pressed && lastKey === "d") {
    player.vel.x = 1;
  }

  //   console.log("Animation Frame");
}

//Start the whole game:
animate();

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "d":
      keys.d.pressed = true;
      lastKey = "d";
      break;
    case "a":
      keys.a.pressed = true;
      lastKey = "a";
      break;
    case "w":
      keys.w.pressed = true;
      break;

    case "d":
      keys.d.pressed = true;
      lastKey = "d";
      break;
    case "a":
      keys.a.pressed = true;
      lastKey = "a";
      break;
    case "w":
      keys.w.pressed = true;
      break;
  }
  console.log(event.key);
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "d":
      keys.d.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
    case "w":
      player.vel.y = -10;
      break;
  }
  console.log(event.key);
});

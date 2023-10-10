import { Sprite } from "./Sprite.js";

const canvas = document.querySelector("canvas");

const context = canvas.getContext("2d");

// Create an Image object for each sprite
const playerSprite = document.getElementById("player-sprite");
const invaderSprite = document.getElementById("invader-sprite");

canvas.width = 1024;
canvas.height = 576;

context.fillRect(0, 0, canvas.width, canvas.height);

const player = new Sprite({
  pos: { x: 0, y: 0 },
  vel: { x: 0, y: 0 },
  width: 51,
  height: 37,
  sprite: playerSprite,
  canvas: canvas,
});

const enemy = new Sprite({
  pos: { x: 300, y: 300 },
  vel: { x: 0, y: 0 },
  width: 59,
  height: 33,
  sprite: invaderSprite,
  canvas: canvas,
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
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
  player.update();
  enemy.update();

  player.vel.x = 0;

  if (keys.a.pressed && lastKey === "a") {
    player.vel.x = -1;
  } else if (keys.d.pressed && lastKey === "d") {
    player.vel.x = 1;
  }
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
      keys.a.pressed = false;
      break;
  }
  console.log(event.key);
});

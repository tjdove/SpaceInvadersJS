export class Sprite {
  constructor({ pos, vel, width, height, sprite, canvas }) {
    this.pos = pos;
    this.vel = vel;
    this.width = width;
    this.height = height;
    this.sprite = sprite;
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
  }

  draw() {
    this.context.fillStyle = "red";
    this.context.drawImage(this.sprite, this.pos.x, this.pos.y);
  }

  update() {
    this.draw();

    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }
}
//export default Sprite;
// module.exports = Sprite;
//export default User; // 👈 Export class

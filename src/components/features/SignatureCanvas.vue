<template>
  <div>
    <div class="flex justify-between py-2">
      <span class="text-gray-400">Add signature</span>
      <button @click="clearCanvas" class="text-green-400 capitalize">clear</button>
    </div>
    <canvas class="canvas_box" ref="canvas"></canvas>
  </div>
</template>

<script lang="js">
export default {
  name: 'SignatureCanvas',
  props: {
    width: {
      type: Number,
      default: 300,
    },
    height: {
      type: Number,
      default: 150,
    },
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.ctx = this.canvas.getContext('2d');

    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.ctx.strokeStyle = '#000';
    this.ctx.lineWidth = 2;

    this.canvas.addEventListener('mousedown', this.startDrawing);
    this.canvas.addEventListener('mousemove', this.draw);
    this.canvas.addEventListener('mouseup', this.finishDrawing);
    this.canvas.addEventListener('mouseleave', this.finishDrawing);
  },
  beforeUnmount() {
    this.canvas.removeEventListener('mousedown', this.startDrawing);
    this.canvas.removeEventListener('mousemove', this.draw);
    this.canvas.removeEventListener('mouseup', this.finishDrawing);
    this.canvas.removeEventListener('mouseleave', this.finishDrawing);
  },
  methods: {
    startDrawing(event) {
      this.isDrawing = true;
      const {x, y} = this.getMousePosition(event);
      this.lastX = x;
      this.lastY = y;
    },
    draw(event) {
      if (!this.isDrawing) return;
      const {x, y} = this.getMousePosition(event);
      this.ctx.beginPath();
      this.ctx.moveTo(this.lastX, this.lastY);
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
      this.lastX = x;
      this.lastY = y;
    },
    finishDrawing() {
      this.isDrawing = false;
    },
    getMousePosition(event) {
      const rect = this.canvas.getBoundingClientRect();
      const scaleX = this.canvas.width / rect.width;
      const scaleY = this.canvas.height / rect.height;
      const x = (event.clientX - rect.left) * scaleX;
      const y = (event.clientY - rect.top) * scaleY;
      return {x, y};
    },
    clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
  },
};
</script>

<style>
canvas {
  border: 1px solid #ccc;
}
</style>

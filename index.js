function draw(canvas, ctx, lines) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const color = canvas.dataset.color;
  let count;
  let height;
  let width;
  if (canvas.width <= 1024){
    count = 50;
  } else if (canvas.height > 700) {
    count = 90;
  }
  else {
    count = 70;
  }
  if (canvas.width < 600 || canvas.height > 700) {
    height = canvas.height / 5;
  } else {
    height = canvas.height / 3.5;
  }
  width = height * 0.075;
  const speed = 0.5;
  ctx.transform(1, 0, -0.4, 1, 0, 0);
  ctx.fillStyle = color;

  for (var i = 0; i < count; i++) {
    const size = Math.random() + 0.5;
    if (lines[i] === undefined || lines[i] === null) {
      const velocity = speed * (Math.random(1.5 - 0.5) + 0.5) * (Math.random() > 0.5 ? 1 : -1);
      lines[i] = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        velocityY: velocity,
        velocityX: -velocity * 0.25,
        width: width * size,
        height: height * size,
        opacity: Math.random() * (0.5 - 0.1) + 0.1,
      }
    }

    if (lines[i].y + lines[i].height >= canvas.height) {
      lines[i].velocityY = -lines[i].velocityY;
      lines[i].velocityX = -lines[i].velocityX;
    }
    if (lines[i].y <= 0) {
      lines[i].velocityY = -lines[i].velocityY;
      lines[i].velocityX = -lines[i].velocityX;
    }

    lines[i].x = lines[i].x + lines[i].velocityX;
    lines[i].y = lines[i].y + lines[i].velocityY;

    ctx.globalAlpha = lines[i].opacity;
    ctx.fillRect(lines[i].x, lines[i].y, lines[i].width, lines[i].height);
  }

  ctx.globalAlpha = 1;
  ctx.transform(1, 0, 0.4, 1, 0, 0);
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  if (canvas.dataset.gradient !== undefined) {
    const gradients = canvas.dataset.gradient.split(', ');
    ctx.globalAlpha = 0.8;
    gradient.addColorStop(0, gradients[0]);
    gradient.addColorStop(1, gradients[1]);
  } else {
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
  }
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

(function () {

  const canvases = document.querySelectorAll('.particles');
  canvases.forEach(canvas => {
    const ctx = canvas.getContext('2d');

    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
    const lines = [];

    var fps = 15;
    var now;
    var then = Date.now();
    var interval = 1000/fps;
    var delta;
    // Animation loop
    (function animloop(){
      window.requestAnimationFrame(animloop);
      now = Date.now();
      delta = now - then;
      if (delta > interval) {
        then = now - (delta % interval);

        draw(canvas, ctx, lines);
      }
    })();
    window.addEventListener('resize', () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    });
  });
})();

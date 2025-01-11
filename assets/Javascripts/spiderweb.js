const canvas = document.getElementById('webCanvas');
const ctx = canvas.getContext('2d');

// Enhanced configuration
const config = {
    numPoints: 60,
    connectionDistance: 180,
    pointSize: 2,
    transformSpeed: 0.002,
    maxScale: 1.5,
    minScale: 0.5
};

let time = 0;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const points = Array.from({ length: config.numPoints }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 1.5,
    vy: (Math.random() - 0.5) * 1.5,
    baseX: Math.random() * canvas.width,
    baseY: Math.random() * canvas.height
}));

function drawWeb() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    time += config.transformSpeed;

    // Transform points in a wave pattern
    points.forEach(point => {
        const scale = Math.sin(time) * (config.maxScale - config.minScale) + config.minScale;
        point.x = point.baseX + Math.sin(time + point.baseX * 0.01) * 50;
        point.y = point.baseY + Math.cos(time + point.baseY * 0.01) * 50;
        
        // Draw enhanced points
        ctx.beginPath();
        ctx.arc(point.x, point.y, config.pointSize * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.5 + Math.sin(time) * 0.2})`;
        ctx.fill();
    });

    // Draw dynamic connections
    points.forEach((point, i) => {
        points.slice(i + 1).forEach(otherPoint => {
            const distance = Math.hypot(point.x - otherPoint.x, point.y - otherPoint.y);
            if (distance < config.connectionDistance) {
                const opacity = (1 - distance / config.connectionDistance) * (0.5 + Math.sin(time) * 0.2);
                ctx.beginPath();
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.lineWidth = 1;
                ctx.moveTo(point.x, point.y);
                ctx.lineTo(otherPoint.x, otherPoint.y);
                ctx.stroke();
            }
        });
    });

    requestAnimationFrame(drawWeb);
}

drawWeb();
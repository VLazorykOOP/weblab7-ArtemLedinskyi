document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    // Початковий колір квадрата
    var squareColor = 'rgba(0, 128, 0, 1)';
    var rectangleColor = 'rgba(128, 128, 128, 1)';
    var circleRadius = 65;
    var circleRotation = 0;
    var initialCircleRadius = circleRadius;
    var fallingSquareY = 302;
    // Функція для малювання всіх фігур
    function drawAllShapes() {
        // Лінії
        context.beginPath();
        context.moveTo(100, 300);
        context.lineTo(450, 300);
        context.stroke();

        context.beginPath();
        context.moveTo(100, 0);
        context.lineTo(100, 450);
        context.stroke();

        // Текст
        context.fillStyle = 'rgba(0, 0, 0, 1)';
        context.fillText('0', 90, 310);
        context.fillText('Х', 450, 310);
        context.fillText('У', 90, 20);
        context.fillText('1', 90, 245);
        context.fillText('2', 90, 180);
        context.fillText('3', 90, 115);
        context.fillText('1', 160, 320);
        context.fillText('2', 220, 320);
        context.fillText('3', 280, 320);
        context.fillText('4', 340, 320);
        context.fillText('5', 400, 320);
        context.fillText('-1', 85, 375);
        context.fillText('-2', 85, 440);

        // Квадрат
        context.fillStyle = squareColor;
        context.fillRect(+0);

        // Інші фігури
        context.fillStyle = rectangleColor;
        context.fillRect(230, 111, 100, 57);

        context.fillStyle = 'rgba(0, 0, 255, 1)';
        context.fillRect(410, 180, 50, 50);

        context.fillStyle = 'rgba(255, 255, 0, 1)';
        context.beginPath();
        context.arc(215, 233, circleRadius, circleRotation,circleRotation + 2 * Math.PI);
        context.fill();

        context.fillStyle = 'rgba(128, 0, 128, 1)';
        context.beginPath();
        context.arc(345, 233, 65, 0, 2 * Math.PI);
        context.fill();

        context.fillStyle = 'rgba(0, 0, 0, 1)';
        context.fillRect(100, 363, 50, 50);

        context.fillStyle = 'rgba(255, 192, 203, 1)';
        context.beginPath();
        context.arc(215, 365, 65, 0, 2 * Math.PI);
        context.fill();

        context.fillStyle = 'rgba(255, 165, 0, 1)';
        context.fillRect(279, 363, 50, 50);
        context.fillStyle = 'rgba(165, 42, 42, 1)';
        context.fillRect(390, 363, 50, 50);
    }

    // Функція для анімації квадрата
    function animateSquare() {
        
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        squareColor = `rgba(${r}, ${g}, ${b}, 1)`;

  
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawAllShapes();


        setTimeout(animateSquare,1500);
    }
    function animateRectangle() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        rectangleColor = `rgba(${r}, ${g}, ${b}, 1)`;

    
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawAllShapes();


        setTimeout(animateRectangle,1500);
    }
    function animateCircle() {
        circleRadius -= 1;

        circleRotation += Math.PI / 180;

        context.clearRect(0, 0, canvas.width, canvas.height);
        drawAllShapes();

        if (circleRadius > 0) {
            requestAnimationFrame(animateCircle);
        } else {
            circleRadius = initialCircleRadius; // відновлення початкового радіусу
            setTimeout(function () {
                animateCircle();
            }, 3000);
        }
    }

    setTimeout(function () {
        animateCircle();
    }, 3000);
    function fallingSquare() {
        var startX = 330;
        var gravity = 1;
        fallingSquareY += gravity;

        if (fallingSquareY > canvas.height - 60) {
            fallingSquareY = 302;
        }

        context.clearRect(0, 0, canvas.width, canvas.height);
        drawAllShapes();

        context.fillStyle = 'rgba(255, 0, 0, 1)';
        context.fillRect(startX, fallingSquareY, 60, 60);

        requestAnimationFrame(fallingSquare);
    }

    // Викликаємо функцію для анімації квадрата
    animateRectangle();
    animateSquare();
    fallingSquare();
});

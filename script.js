const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width =  window.innerWidth;
canvas.height = window.innerHeight;

let  sun;
let mercury = [];
let venus =[];
let earth =[];
let moon =[];

function init()
{
    sun = new Point(canvas.width/2,canvas.height/2,100,"yellow","sun");
    sun.pos = new Vector2(sun.x,sun.y);

    mercury.rel_pos = new Vector2(0,200);
    mercury.point = new Point(0,0,10,"lightgray","mercury");
    mercury.pos = new Vector2(0,0);
    mercury.dAngle = 0.01;

    venus.rel_pos = new Vector2(0,250);
    venus.point = new Point(0,0,15,"#00f0ff","venus");
    venus.pos = new Vector2(0,0);
    venus.dAngle = 0.005;

    earth.rel_pos = new Vector2(0,300);
    earth.point = new Point(0,0,15,"#00ff38","earth");
    earth.pos = new Vector2(0,0);
    earth.dAngle = 0.003;

    moon.rel_pos = new Vector2(0,100);
    moon.point = new Point(0,0,10,"#8e8e8e","moon");
    moon.pos = new Vector2(0,0);
    moon.dAngle = 0.03;

    loop();
}



function loop()
{
    context.clearRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(loop);
    sun.draw();

    mercury.rel_pos.angle += mercury.dAngle;
    mercury.pos.sumVector(sun.pos,mercury.rel_pos);
    mercury.point.x = mercury.pos.dx;
    mercury.point.y = mercury.pos.dy;
    mercury.point.draw();

    venus.rel_pos.angle += venus.dAngle;
    venus.pos.sumVector(sun.pos,venus.rel_pos);
    venus.point.x = venus.pos.dx;
    venus.point.y = venus.pos.dy;
    venus.point.draw();

    earth.rel_pos.angle += earth.dAngle;
    earth.pos.sumVector(sun.pos,earth.rel_pos);
    earth.point.x = earth.pos.dx;
    earth.point.y = earth.pos.dy;
    earth.point.draw();

    moon.rel_pos.angle += moon.dAngle;
    moon.pos.sumVector(earth.pos,moon.rel_pos);
    moon.point.x = moon.pos.dx;
    moon.point.y = moon.pos.dy;
    moon.point.draw();
}
init();

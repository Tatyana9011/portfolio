
//<canvas class="particles layer layers__middle"   data-color="#B99970" ></canvas>
//ефект появления мелкой крупици

const particlesFunc = ()=>{
    console.log('particlesFunc: ');

let particles = document.querySelectorAll('.particles'),
radius = 2,
number=100;

particles.forEach(node=>{
    let color = node.dataset.color
    const ctx = node.getContext("2d"),
    clr = hexToRgbA(color),
    width = window.innerWidth,
    height = window.innerHeight;

    node.width = width;
    node.height = height;
    ctx.fillStyle =clr;

    let dots = {
        num: number,
        distance: 200,
        d_radius: 200,
        velocity:.9,
        array:[],
    }
    function Dot(){
        this.x = Math.random() * width 
        this.y = Math.random() * height
        this.vx = dots.velocity + Math.random() 
        this.vy = dots.velocity + Math.random() 
        this.radius = Math.random()*radius
        
    }

    Dot.prototype.create = function(){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0 , Math.PI*2, false);
            ctx.fill()
        }
    Dot.prototype.animate = function(){
        for(let i=0; i<dots.num; i++){
                let dot = dots.array[i];
                if(dot.x<0||dot.x>width){
                    dot.vx = -dot.vx;
                    dot.vy = dot.vy;
                }else if(dot.y<0||dot.y>height){
                    dot.vx = dot.vx
                    dot.vy = -dot.vy
                }
                dot.x += dot.vx
                dot.y += dot.vy
            }
        }


    function createDots(){
        let dot
        ctx.clearRect(0,0,width,height)

        for (let i=0; i<dots.num; i++){
            dot = new Dot();
            dots.array[i]=dot;
            dot.create()
        }
        dot.animate()
     }

     setInterval(createDots,1000/10)
    
})

function hexToRgbA(hex){
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        let c = hex.substring(1).split('');
        if(c.length==3){c=[c[0],c[0],c[1],c[1],c[2],c[2]] }
        c=`0x${c.join('')}`
        return `rgba(${[(c>>16)&255,(c>>8)&255,c&255].join(',')},1)`
    } throw new Error('Bad hex')
}

}

export default particlesFunc;
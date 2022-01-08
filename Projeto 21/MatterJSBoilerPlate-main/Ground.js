class ground{
    constructor(x,y,w,h){

        let options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }  

    show(){
        push();
        rectMode(CENTER);
        stroke(255);
        fill(rgb(20, 49, 71));
        rect(this.x, this.y, this.w, this.h);
        pop();
    }    

}


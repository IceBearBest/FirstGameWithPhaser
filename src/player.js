class Player {
    constructor(ctx, src='',x=10,y=10,x_v=0,y_v=0,jump=true,height=50,width=50){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.x0 =x;
        this.y0= y;
        this.x_v=x_v; 
        this.y_v=y_v;
        this.jump=jump;
        this.height=height;
        this.width=width;
        this.src = src;
        this.img=new Image();
        if (this.src===''){
            // if image source is not defined, display the player as a rectangular block
            this.ctx.fillStyle = 'Pink';
            this.ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        else{
            this.img.src = this.src;
            this.img.onload = function(){
                this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
            }.bind(this);  
        }
    }

    render(){
        if (this.src===''){
            // if image source is not defined, display the player as a rectangular block
            this.ctx.fillStyle = 'Pink';
            this.ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        else{
            this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
        
    }
}
export {Player};
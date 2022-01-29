class Ladder{
    constructor(ctx, num, unit, unit_x, unit_y, x_offset, y_offset){
        this.ctx = ctx;
        this.createPlatforms(num, unit, unit_x, unit_y, x_offset, y_offset);
    }

    // created designated number of platforms
    createPlatforms(num, unit, unit_x, unit_y, x_offset, y_offset) {
        this.platforms = [];
        for(let i=0; i < num; i++) {
            this.platforms.push(
                {
                    x: 7*i*unit_x + 50*x_offset,
                    y: 18*unit_y + 5*i*unit_y+50*y_offset,
                    width: 7*unit_x,
                    height: 0.5*unit_x,
                }
            );
        }  
    }

    render(){
        this.ctx.fillStyle = 'Lavender';
        this.platforms.forEach(platform => {
            this.ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
        });
        this.ctx.fill();
    }
}

export {Ladder};
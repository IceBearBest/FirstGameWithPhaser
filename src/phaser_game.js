import Phaser from 'phaser';
import React from 'react';

class PhaserGame extends React.Component{
    constructor(){
        super();
        let config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 100 },
                    debug: false
                }
            },
            scene: {
                preload: this.preload,
                create: this.create,
                update: this.update
            }
        };
        var game = new Phaser.Game(config);
    }

    preload ()
        {
            this.load.image('sky', '../assets/sky.png');
            this.load.image('ground', '../assets/platform.png');
            this.load.image('star', '../assets/star.png');
            this.load.image('bomb', '../assets/bomb.png');
            this.load.spritesheet('dude', 
                '../assets/dude.png',
                { frameWidth: 32, frameHeight: 48 }
            );
        }

    create ()
        {
            // add background
            this.add.image(400, 300, 'sky');
            this.add.image(850, 50, 'star');
            // add platforms
            let platforms = this.physics.add.staticGroup();
            // refresh is required for static objects
            platforms.create(400, 568, 'ground').setScale(2).refreshBody();
            platforms.create(600, 400, 'ground');
            platforms.create(50, 250, 'ground');
            platforms.create(750, 220, 'ground');
            // add player
            this.player = this.physics.add.sprite(100, 450, 'dude');
            this.player.setBounce(0.4);
            this.player.setCollideWorldBounds(true);
            this.player.body.setGravityY(100);
            // set animation of player 
            this.anims.create({
                key: 'left',
                frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
                frameRate: 10,
                repeat: -1
            });    
            this.anims.create({
                key: 'turn',
                frames: [ { key: 'dude', frame: 4 } ],
                frameRate: 20
            });
            this.anims.create({
                key: 'right',
                frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
                frameRate: 10,
                repeat: -1
            });
            // set collision between player and platform
            this.physics.add.collider(this.player, platforms);

            // add stars as dynamic group
            this.stars = this.physics.add.group({
                key: 'star',
                repeat: 11,
                setXY: { x: 12, y: 0, stepX: 70 }
            });
            this.stars.children.iterate(function (child) {
                child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            }); 
            this.score = 0;
            this.physics.add.collider(this.stars, platforms);
            // check if player overlap with star
            this.physics.add.overlap(this.player, this.stars, collectStar, null, this);
            let scoreText=this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
            function collectStar (player, star) {
                star.disableBody(true, true);
                this.score += 10;
                scoreText.setText('Score: ' + this.score);
                if (this.stars.countActive(true) === 0){
                        this.stars.children.iterate(function (child) {
                            child.enableBody(true, child.x, 0, true, true);
                        });
                        var x = (this.player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
                        var bomb = bombs.create(x, 16, 'bomb');
                        bomb.setBounce(1);
                        bomb.setCollideWorldBounds(true);
                        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
                    }
            }
            // add bombs
            let bombs = this.physics.add.group();
            this.physics.add.collider(bombs, platforms);
            this.physics.add.collider(this.player, bombs, hitBomb, null, this);
            let gameOver = false;
            function hitBomb (player, bomb)
            {
                this.physics.pause();
                this.player.setTint(0xff0000);
                this.player.anims.play('turn');
                gameOver = true;
            }
        }

    update (){ 
        let cursors = this.input.keyboard.createCursorKeys();
        if (cursors.left.isDown){
            this.player.setVelocityX(-160);
            this.player.anims.play('left', true);
        }
        else if (cursors.right.isDown){
            this.player.setVelocityX(160);
            this.player.anims.play('right', true);}
        else{
            this.player.setVelocityX(0);
            this.player.anims.play('turn');}
        
            if (cursors.up.isDown && this.player.body.touching.down)
            {this.player.setVelocityY(-330);}
    }

    render() {
        return (<div></div>);
    }
};

export {PhaserGame};

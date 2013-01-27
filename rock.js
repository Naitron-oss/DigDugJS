function Rock(rockX, rockY) {
	this.x = rockX;
	this.y = rockY;
        this.width = 25;
        this.height = 25;
	this.speed = 5;
	this.downlimit = 600-this.height;

	this.moveRight = function() {
                futureX = this.x + blockSize/2;
                if (spriteArray[getArrayPosition(futureX, this.y)] === null) {
                        if(this.x + this.speed < this.rightlimit) {
                                this.x += this.speed;
                        }
                }
        	
	}

	this.moveLeft = function() {
        	futureX = this.x - blockSize/2;
                if (spriteArray[getArrayPosition(futureX, this.y)] === null) {
                        if(this.x - this.speed < this.rightlimit) {
                                this.x -= this.speed;
                        }
                }
	}

	this.moveUp = function() {
        	futureY = this.y - blockSize/2;
                if (spriteArray[getArrayPosition(this.x, futureY)] === null) {
                        if(this.y - this.speed < this.rightlimit) {
                                this.y -= this.speed;
                        }
                }
	}

	this.moveDown = function() {
        	futureY = this.y + blockSize/2;
                if (spriteArray[getArrayPosition(this.x, futureY)] === null) {
                        if(this.y + this.speed < this.downlimit) {
                                this.y += this.speed;
                                this.speed += 3;
                        }
                        else {
                                this.y += this.downlimit - this.y -1; 
                        }
                }
                else {
                        this.speed = 5;
                }
	}

	this.update = function() {
                this.moveDown();	
	}
	
	this.draw = function(ctx) {
		var image = new Image();
		image.src = "digdugsprite.png";
		var x = this.x;
		var y = this.y;
		image.onload = function(){
			ctx.drawImage(image, 297, 124, 16, 14, x, y, 25, 25);
		}
	}

        function getArrayPosition(x, y) {
                return Math.floor((x + (blockSize/2)) / blockSize) + Math.floor((y + (blockSize/2)) / blockSize) * xGridSize;
        }
}
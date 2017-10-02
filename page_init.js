function Hero(map,MapData,aBox) {
    this.ele = document.createElement("div");
    this.id = "hero";
    this.map = map;
    this.MapData = MapData;
    this.coords = [0,0];
    this.aBox = aBox;
    this.init();
}
Hero.prototype.init = function () {
    this.map.appendChild(this.ele);
    this.ele.style.position = "absolute";
    this.ele.style.width = "8px";
    this.ele.style.height = "8px";
    this.ele.style.background = "orange";
    this.ele.style.borderRadius = "50%";
    this.ele.style.boxSizing = "border-box";
    this.ele.style.left = "131px";
    this.ele.style.top = "181px";
    this.coords = [18,13];
    this.aBox[this.coords[0] * 100 + this.coords[1]].innerHTML = "";
    this.ele.style.boxShadow = "inset 1px 1px 3px rgba(0, 0, 0, 1)";
    var that = this;
    document.onkeydown = function (ev) {
        ev = ev || event;
        // alert(ev.keyCode);
        if (ev.keyCode == 38) {
            that.coords[0]--;
            if (that.MapData[that.coords[0]][that.coords[1]] == 0) {
                that.coords[0]++;
            } else {
                that.ele.style.top = parseInt(getStyle(that.ele,"top")) - 10 + "px";
                that.aBox[that.coords[0] * 100 + that.coords[1]].innerHTML = "";
            }
        } else if (ev.keyCode == 40) {
            that.coords[0]++;
            if (that.MapData[that.coords[0]][that.coords[1]] == 0) {
                that.coords[0]--;
            } else {
                that.ele.style.top = parseInt(getStyle(that.ele,"top")) + 10 + "px";
                that.aBox[that.coords[0] * 100 + that.coords[1]].innerHTML = "";
            }
        } else if (ev.keyCode == 37) {
            that.coords[1]--;
            if (that.MapData[that.coords[0]][that.coords[1]] == 0) {
                that.coords[1]++;
            } else {
                that.ele.style.left = parseInt(getStyle(that.ele,"left")) - 10 + "px";
                that.aBox[that.coords[0] * 100 + that.coords[1]].innerHTML = "";
            }
        } else if (ev.keyCode == 39) {
            that.coords[1]++;
            if (that.MapData[that.coords[0]][that.coords[1]] == 0) {
                that.coords[1]--;
            } else {
                that.ele.style.left = parseInt(getStyle(that.ele,"left")) + 10 + "px";
                that.aBox[that.coords[0] * 100 + that.coords[1]].innerHTML = "";
            }
        }
    }
}

function Enemy(map,MapData,aBox) {
    this.ele = document.createElement("div");
    this.id = "hero";
    this.map = map;
    this.MapData = MapData;
    this.coords = [0,0];
    this.aBox = aBox;
    this.timer = null;
    this.init();
}
Enemy.prototype.timerAll = null;
Enemy.prototype.init = function () {
    this.map.appendChild(this.ele);
    this.ele.style.position = "absolute";
    this.ele.style.width = "8px";
    this.ele.style.height = "8px";
    this.ele.style.background = "red";
    this.ele.style.borderRadius = "50%";
    this.ele.style.boxSizing = "border-box";
    this.ele.style.left = "131px";
    this.ele.style.top = "151px";
    this.coords = [15,13];
    this.ele.style.boxShadow = "0px 0px 2px rgba(0, 0, 0, 1)";
    // this.ele.style.border = "1px solid black";
    var that = this;
    // this.timer = setInterval(function () {
    //     that.move();
    // },200);
}
Enemy.prototype.judgeNum = [1,2,3,4];
Enemy.prototype.move = function () {
    var randomNum = Math.random() * 4;
    var onOff = false;
    var timer = null;
    do {
        if (randomNum < this.judgeNum[0]) {
            this.coords[0]--;
            if (this.MapData[this.coords[0]][this.coords[1]] == 0) {
                this.coords[0]++;
                onOff = true;
            } else {
                this.ele.style.top = parseInt(getStyle(this.ele,"top")) - 10 + "px";
                this.judgeNum = [1.9, 2, 3, 4];
                onOff = false;
            }
        } else if (randomNum < this.judgeNum[1]) {
            this.coords[0]++;
            if (this.MapData[this.coords[0]][this.coords[1]] == 0) {
                this.coords[0]--;
                onOff = true;
            } else {
                this.ele.style.top = parseInt(getStyle(this.ele,"top")) + 10 + "px";
                this.judgeNum = [0.1, 2, 3, 4];
                onOff = false;
            }
        } else if (randomNum < this.judgeNum[2]) {
            this.coords[1]++;
            if (this.MapData[this.coords[0]][this.coords[1]] == 0) {
                this.coords[1]--;
                onOff = true;
            } else {
                this.ele.style.left = parseInt(getStyle(this.ele,"left")) + 10 + "px";
                this.judgeNum = [1, 2, 3.9, 4];
                onOff = false;
            }
        } else if (randomNum < this.judgeNum[3]) {
            this.coords[1]--;
            if (this.MapData[this.coords[0]][this.coords[1]] == 0) {
                this.coords[1]++;
                onOff = true;
            } else {
                this.ele.style.left = parseInt(getStyle(this.ele,"left")) - 10 + "px";
                this.judgeNum = [1, 2, 2.1, 4];
                onOff = false;
            }
        }
        randomNum = Math.random() * 4;
    } while(onOff);
}
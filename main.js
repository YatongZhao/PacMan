var oMap = document.getElementById("map");
var aBox = [];
var timer = null;
oMap.style.width = MapData[0].length * 10 + "px";
oMap.style.height = MapData.length * 10 + "px";
for (var i = 0; i < MapData.length; i++) {
    for (var j = 0; j < MapData[i].length; j++) {
        var ele = aBox[i * 100 + j] = document.createElement("div");
        ele.style.position = "absolute";
        ele.style.width = "10px";
        ele.style.height = "10px";
        if (MapData[i][j] == 0) {
            ele.style.background = "black";
            ele.style.boxShadow = "inset 1px 2px 3px rgba(255, 255, 255, .8)";
        } else if (MapData[i][j] == 1) {
            var eleGold = document.createElement("div");
            ele.style.background = "lightgray";
            ele.appendChild(eleGold);
            eleGold.style.width = "4px";
            eleGold.style.height = "4px";
            eleGold.style.background = "yellow";
            eleGold.style.margin = "3px";
            eleGold.style.borderRadius = "50%";
            eleGold.style.boxShadow = "1px 1px 2px rgba(0,0,0,1)";
        }
        ele.style.left = j * 10 + "px";
        ele.style.top = i * 10 + "px";
        oMap.appendChild(ele);
    }
}
var oHero = new Hero(oMap,MapData,aBox);
var oEnemy1 = new Enemy(oMap,MapData,aBox);
var oEnemy2 = new Enemy(oMap,MapData,aBox);
var oEnemy3 = new Enemy(oMap,MapData,aBox);
var oEnemy4 = new Enemy(oMap,MapData,aBox);
var oEnemy5 = new Enemy(oMap,MapData,aBox);
var oEnemy6 = new Enemy(oMap,MapData,aBox);
var oEnemy7 = new Enemy(oMap,MapData,aBox);
var oEnemy8 = new Enemy(oMap,MapData,aBox);
oEnemy1.timerAll = setInterval(function () {
    oEnemy1.move();
    oEnemy2.move();
    oEnemy3.move();
    oEnemy4.move();
    oEnemy5.move();
    oEnemy6.move();
    oEnemy7.move();
    oEnemy8.move();
},200)
timer = setInterval(function () {
    if (
        (oHero.coords[0] == oEnemy1.coords[0] && oHero.coords[1] == oEnemy1.coords[1]) ||
        (oHero.coords[0] == oEnemy2.coords[0] && oHero.coords[1] == oEnemy2.coords[1]) ||
        (oHero.coords[0] == oEnemy3.coords[0] && oHero.coords[1] == oEnemy3.coords[1]) ||
        (oHero.coords[0] == oEnemy4.coords[0] && oHero.coords[1] == oEnemy4.coords[1]) ||
        (oHero.coords[0] == oEnemy5.coords[0] && oHero.coords[1] == oEnemy5.coords[1]) ||
        (oHero.coords[0] == oEnemy6.coords[0] && oHero.coords[1] == oEnemy6.coords[1]) ||
        (oHero.coords[0] == oEnemy7.coords[0] && oHero.coords[1] == oEnemy7.coords[1]) ||
        (oHero.coords[0] == oEnemy8.coords[0] && oHero.coords[1] == oEnemy8.coords[1])
    ) {
        clearInterval(oEnemy1.timerAll);
        clearInterval(timer);
        alert("GAME OVER");
        location.reload();
    }
},1);
console.log(100/10 == 10);
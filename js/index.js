const holder = document.querySelector("body");

class Tile {
  constructor(holder) {
    this.holder = holder;
    this.color = this.getRandomColor();
    this.htmlRef = this.generateInitialHTML();
    this.setUpEvents();
    this.setBackgroundColor();
  }

  generateInitialHTML() {
    this.holder.insertAdjacentHTML("beforeend", `<div class="tile"></div>`);
    return this.holder.querySelector(`.tile:last-child`);
  }

  setBackgroundColor() {
    this.htmlRef.style.background = this.color;
  }

  setUpEvents() {
    this.htmlRef.onclick = () => {
      new Tile(holder, getRandomColor());
    };
  }

  getRandomColor() {
    var color = "";
    for (let i = 0; i < 3; i++) {
      let sub = Math.floor(Math.random() * 256).toString(16);
      color += sub.length == 1 ? "0" + sub : sub;
    }
    return "#" + color;
  }
}

const tiles = [];

holder.onclick = () => {
  tiles.push(new Tile(holder));
};

/*
elke keer ik klik op het scherm wordt er een pianotegel toegevoegd rechts bovenaan op het scherm
elke tegel is 50% hoog en 50px breed. elke tegel heeft een random BGkleur

als je op de tegel klikt krijgt de body de achtergrondkleur van de tegel


uitbreiding

onderaan rechts plaats je en play-knop. Als deze aangeklikt wordt dan 

let teller = 0
setInterval(function(){
	if(teller===4){
		teller=0
	}else{
		teller++
	}
	volgendeTegel()
},5000)

console.log()


class Tile{
	constructor(){
		this.bg = getRandomColor()
		this.initHTML()
		this.styling()
	}
}
document.body.onclick => ecnel el vek v


document.querySelectorAll("div").forEach((el, i) => {
  el.onclick = function () {
    console.log("click");
  };
});

*/

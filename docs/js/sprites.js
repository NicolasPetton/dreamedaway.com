(() => {
	let pixelSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--pixel-size"));

	document.querySelector(".sprites-container").style["padding"] = `${10 * pixelSize}px 0`;

	let theo = {
		elt: document.querySelector(".theo"),
		dir: "right",
		initialPos: 0,
		speed: 1
	};

	let louise = {
		elt: document.querySelector(".louise"),
		dir: "left",
		initialPos: window.innerWidth / pixelSize,
		speed: 1
	};

	let move = (char) => {
		char.pos = char.pos || char.initialPos;

		char.pos += char.dir === "right" ? char.speed : -char.speed;
		char.elt.style.transform = `translate3d(${char.pos * pixelSize}px, 0, 0)`;
	};

	let resetPos = (char) => {
		let padding = window.innerWidth / 2;
		if ((char.pos * pixelSize) > (window.innerWidth + padding)) {
			char.pos = char.initialPos;
		}

		if ((char.pos * pixelSize) < -padding) {
			char.pos = char.initialPos;
		}
	};

	const step = () => {
		window.requestAnimationFrame(() => {
			move(theo);
			resetPos(theo);
			move(louise);
			resetPos(louise);
			step();
		});
	};

	document.addEventListener('DOMContentLoaded', step);
})();

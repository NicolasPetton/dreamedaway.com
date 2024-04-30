(() => {
	let setup = () => {
		setupCards();
		setupFlags();
		setupDialog();
	};

	let setupCards = () => document.querySelectorAll(".reward.physical").forEach(setupCard);

	let setupCard = card => {
		var euLink = card .getAttribute("data-eu-link");
		var worldLink = card.getAttribute("data-world-link");

		card.addEventListener("click", () => showDialog({euLink, worldLink}));
	};

	let showDialog = ({euLink, worldLink}) => {
		var dialog = document.querySelector("#dialog");

		document.querySelector("#dialog .flags [data-toggle='eu']").href = euLink;
		document.querySelector("#dialog .flags [data-toggle='world']").href = worldLink;

		dialog.classList.toggle("visible");
	};

	let setupFlags = () => document.querySelectorAll("#dialog .flags a").forEach(setupFlag);

	let setupFlag = flag => {
		var toggle = flag.getAttribute("data-toggle");
		var flags = document.querySelectorAll("#dialog .legend span");

		flag.addEventListener("mouseover", () => {
			flags.forEach(e => e.classList.remove("visible"));
			document.querySelector(`#dialog .legend span.${toggle}`).classList.add("visible");
		});

		flag.addEventListener("mouseout", () => {
			flags.forEach(e => e.classList.remove("visible"));
			document.querySelector(`#dialog .legend span:first-child`).classList.add("visible");
		});
	};

	let setupDialog = () => {
		document.querySelector("#dialog .close").addEventListener("click", () =>
			document.querySelector("#dialog").classList.remove("visible")
		);
	};

	document.addEventListener('DOMContentLoaded', setup);
})();

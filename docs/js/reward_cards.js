(() => {
	let setup = () => {
		setupCards();
		setupFlags();
		setupModal();
	};

	let setupCards = () => {
		document.querySelectorAll(".reward.physical").forEach(setupCard);
	};

	let setupCard = (card) => {
		card.addEventListener("click", () => {
			toggleModal();
		});
	};

	let toggleModal = () => {
		var modal = document.querySelector("#dialog");
		modal.classList.toggle("visible");
	};

	let setupFlags = () => {
		document.querySelectorAll("#dialog .flags a").forEach(setupFlag);
	};

	let setupFlag = (flag) => {
		var toggle = flag.getAttribute("data-toggle");
		flag.addEventListener("mouseover", () => {
			[...document.querySelectorAll("#dialog .legend span")].forEach((e) => {
				e.classList.remove("visible");
			});

			document.querySelector(`#dialog .legend span.${toggle}`).classList.add("visible");
		});
	};

	let setupModal = () => {
		document.querySelector("#dialog .close").addEventListener("click", () => {
			document.querySelector("#dialog").classList.remove("visible");
		});
	};

	document.addEventListener('DOMContentLoaded', setup);
})();

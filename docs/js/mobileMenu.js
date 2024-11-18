(() => {
	let mobileNav = document.querySelector(".mobile-nav");
	let bars = document.querySelector(".bars");

	bars.addEventListener("click", () => {
		mobileNav.classList.toggle("active");
	});

	mobileNav.addEventListener("click", () => {
		mobileNav.classList.toggle("active");
	});
})();

let button = document.getElementById("topBtn");
let home = document.getElementById("home");
let nav = document.getElementById("header");

const scrollDetect = () => {
	var lastScroll = 0;

	window.onscroll = () => {
		let currentScroll =
			document.documentElement.scrollTop || document.body.scrollTop;

		if (currentScroll > 0 && lastScroll <= currentScroll) {
			lastScroll = currentScroll;
			// console.log("bottom");
			button.style.display = "none";
			home.style.display = "block";
		} else {
			lastScroll = currentScroll;
			// console.log("top");
			if (
				document.body.scrollTop > 500 ||
				document.documentElement.scrollTop > 500
			) {
				button.style.display = "block";
				home.style.display = "none";
			} else {
				button.style.display = "none";
				home.style.display = "block";
			}
		}
	};
};

const topFunction = () => {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

// const headerSet = () => {
// 	if (
// 		document.body.scrollTop > 1000 ||
// 		document.documentElement.scrollTop > 1000
// 	)
// 		position: sticky;
// 		nav.style.bottom = "80vh";
// 	} else {
// 		nav.style.bottom = "10vh";
// 	}
// };

scrollDetect();

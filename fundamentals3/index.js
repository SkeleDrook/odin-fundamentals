function min(a, b) {
	return (a < b) ? a : b;
}

function pow(x, n) {
	let base = x;
	while (n++ <= 1) {
		x = x * base;
	}
}
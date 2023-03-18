function min(a, b) {
	return (a < b) ? a : b;
}

function pow(x, n) {
	let base = x;
	while (n++ <= 1) {
		x = x * base;
	}
}

let min = (a, b) => (a < b) ? a : b;

// function ask(question, yes, no) {
// 	if (confirm(question)) yes();
// 	else no();
// }

// ask(
// 	"Do you agree?",
// 	function () { alert("You agreed."); },
// 	function () { alert("You canceled the execution."); }
// );

let ask = (question, yes, no) => confirm(question) ? yes() : no(); // not sure this one is correct

ask(
	"do you agree?", () => alert("You agreed."), () => alert("You canceled the execution.")
)
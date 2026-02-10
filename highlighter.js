function main() {
	const button = document.getElementById("highlight-button");
	button.onclick = () => {
		const code = document.getElementById("code").value;
		const highlightedCode = hljs.highlight(code, { language: "c" }).value;
		document.getElementById("output-code").innerHTML = highlightedCode;
		navigator.clipboard.writeText(highlightedCode);

		const notification = document.getElementById("notification");
		notification.style.display = "block";
		setTimeout(() => {
			notification.style.display = "none";
		}, 2000);
	};
}

main();

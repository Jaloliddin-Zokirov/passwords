let pasword = Number(prompt(`Parolni kiriting`));
let elText = document.querySelector('.js-text');

let passwords = [
	1546, 4811, 2177, 1564, 4132, 6856, 6432, 9696, 8532, 7631, 8516, 1569,
];

for (i = 0; i < passwords.length; i++) {
	if (pasword == passwords[i]) {
		elText.textContent = `Marhamat kirishingiz mumkin`;
		break;
	} else {
		elText.textContent = `Qayta urinib ko'ring`;
	}
}

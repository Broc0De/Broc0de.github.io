// Ipnone Array
const iphones = [
	{
		make: 'Apple',
		model: 'Iphone 14 Pro Max',
		year: 2023,
		price: 3000,
		image: 'https://cdn.vodafone.co.uk/en/assets/images/desktop/Apple_iPhone_14_Pro_Max_deep_purple-full-product-front-600.png'
	},
	{
		make: 'Apple',
		model: 'Iphone 13 Pro',
		year: 2022,
		price: 2500,
		image: 'https://ismart.co.in/wp-content/uploads/2021/09/iphone-13-pro-blue-select.png'
	},
	{
		make: 'Apple',
		model: 'iphone 12',
		year: 2022,
		price: 1700,
		image: 'https://res-4.cloudinary.com/grover/image/upload/v1630928555/oip6emk98qshpfcismyh.png'
	},
	{
		make: 'Apple',
		model: 'Iphone 11 Pro Max',
		year: 2020,
		price: 2000,
		image: 'https://cdn1.it4profit.com/brd2/q:68/g:sm/plain/s3://app/public/models/MWHJ2FS-A/large/j/220117170017062726.jpg'
	},
	
];

// Iphone List
const iphoneList = document.getElementById('apple-list');
function displayCars(_iphones) {
	iphoneList.innerHTML = '';
	iphones.forEach((Iphone) => {
		const iphoneEl = document.createElement('div');
		iphoneEl.classList.add('Iphone');
		iphoneEl.innerHTML = `
			<img src="${Iphone.image}" alt="${Iphone.make} ${Iphone.model}">
			<h3>${Iphone.make} ${Iphone.model}</h3>
			<p>Year: ${Iphone.year}</p>
			<p>Price: $${Iphone.price}</p>
		`;
		iphoneList.appendChild(iphoneEl);
	});
}

// Initial Display
displayCars(iphones);



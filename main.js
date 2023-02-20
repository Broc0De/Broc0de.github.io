// Ipnone Array
const iphones = [
	{
		make: 'Apple',
		model: 'Iphone 14 Pro Max',
		
		price: 300000,
		image: 'https://cdn.vodafone.co.uk/en/assets/images/desktop/Apple_iPhone_14_Pro_Max_deep_purple-full-product-front-600.png'
	},
	{
		make: 'Apple',
		model: 'Iphone 13 Pro',
		price: 250000,
		image: 'https://ismart.co.in/wp-content/uploads/2021/09/iphone-13-pro-blue-select.png'
	},
	{
		make: 'Apple',
		model: 'iphone 12',
		price: 270000,
		image: 'https://res-4.cloudinary.com/grover/image/upload/v1630928555/oip6emk98qshpfcismyh.png'
	},
	{
		make: 'Apple',
		model: 'Iphone 11 Pro Max',
		price: 200000,
		image: 'https://cdn1.it4profit.com/brd2/q:68/g:sm/plain/s3://app/public/models/MWHJ2FS-A/large/j/220117170017062726.jpg'
	},
	
];

// Iphone List
const iphoneList = document.getElementById('apple-list');
function displayIphones(_iphones) {
	iphoneList.innerHTML = '';
	iphones.forEach((Iphone) => {
		const iphoneEl = document.createElement('div');
		iphoneEl.classList.add('Iphone');
		iphoneEl.innerHTML = `
			<img src="${Iphone.image}" alt="${Iphone.make} ${Iphone.model}">
			<h3>${Iphone.make} ${Iphone.model}</h3>
			<p>Цена: ${Iphone.price} тенге</p>
		`;
		iphoneList.appendChild(iphoneEl);
	});
}

// Initial Display
displayIphones(iphones);



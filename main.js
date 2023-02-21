const Apple= document.getElementById("apple-list");

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

  
  
let appleHTML = "";

iphones.forEach(iphone => {
	appleHTML += `
		<div class="Iphone">
			<img src="${iphone.image}">
			<h3>${iphone.model}</h3>
			<p>$${iphone.price}</p>
			<p>${iphone.make}</p>
		</div>
	`;
});

Apple.innerHTML = appleHTML;




const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const lastModified = document.querySelector("#lastModified");
const lastModifiedDate = new Date(document.lastModified);

lastModified.innerHTML = `Last modified: <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "short",
    timeStyle: "medium"
	}
).format(lastModifiedDate)}</span>`;


const products = [
	{
	  id: "fc-1888",
	  name: "flux capacitor",
	  averageRating: 4.5
	},
	{
	  id: "fc-2050",
	  name: "power laces",
	  averageRating: 4.7
	},
	{
	  id: "fs-1987",
	  name: "time circuits",
	  averageRating: 3.5
	},
	{
	  id: "ac-2000",
	  name: "low voltage reactor",
	  averageRating: 3.9
	},
	{
	  id: "jj-1969",
	  name: "warp equalizer",
	  averageRating: 5.0
	}
];

const productName = document.querySelector("#product-name");
products.forEach(product => {
	const option = document.createElement("option");
	option.value = product.id;
	option.textContent = product.name;
	productName.appendChild(option);
});


const reviewAmount = document.querySelector("#review-amount");
let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

if (numReviews > 0) { 
  reviewAmount.textContent = numReviews;
} else {
  reviewAmount.textContent = `This is your first review 🤩`;
}

numReviews++;
localStorage.setItem("numReviews-ls", numReviews);

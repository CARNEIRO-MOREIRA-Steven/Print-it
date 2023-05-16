const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const arrowRight = document.querySelector(".arrow_right");
const currentBanner = document.querySelector(".banner-img");

const currentPath = './assets/images/slideshow/';
let cpt =0;

const init = ()=> {
	currentBanner.src= currentPath +slides[cpt].image;
}
arrowRight.addEventListener('click',()=>{
	if(cpt == slides.length - 1){ // si on est sur la dernière diapositive
		cpt = 0; // retourner à la première diapositive
	}else{
		cpt++;	
	}	
	currentBanner.src= currentPath + slides[cpt].image;

    console.log("flèche de droite");
});

init();
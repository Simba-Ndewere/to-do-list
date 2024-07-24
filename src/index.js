import './index.css';
import imageUrl from './images/menu.png';

const menu = document.querySelector(".menu");
const myIcon = new Image();
myIcon.height = 40;
myIcon.width = 30;
myIcon.src = imageUrl;
menu.appendChild(myIcon);



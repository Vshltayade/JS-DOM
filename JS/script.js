
const body = document.getElementsByTagName('body')[0];

body.style.background = 'linear-gradient(to left, #03001e, #7303c0, #ec38bc, #fdeff9)';
body.style.margin = '5px';
body.style.padding = '5px';

const main = document.createElement('main');

const div1 = document.createElement('div');
const img = document.createElement('img');

const div2 = document.createElement('div');
const h1 = document.createElement('h1');
const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');
const li5 = document.createElement('li');

const div3 = document.createElement('div');
const h3 = document.createElement('h3');

const div4 = document.createElement('div');
const div5 = document.createElement('div');
const div6 = document.createElement('div');
const div7 = document.createElement('div');
const div8 = document.createElement('div');
const h21 = document.createElement('h2');
const h22 = document.createElement('h2');
const h23 = document.createElement('h2');
const h24 = document.createElement('h2');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');
const p4 = document.createElement('p');



img.setAttribute('src', 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA3fHxoYWNrZXIlMjB3aXRoJTIwbHB0b3B8ZW58MHx8MHx8fDA%3D');
img.style.padding = '10px';
img.style.width = '600px';
img.style.height = '460px';

main.style.display = 'grid';
main.style.gridTemplateColumns = 'repeat(3, 1fr)';

div1.style.gridArea = '1 / 1 / 4 / 2';

div2.style.display = 'flex';
div2.style.justifyContent = 'space-between';
div2.style.alignItems = 'center';
div2.style.gridArea = '1 / 2 / 2 / 4';
div2.style.background = 'skyblue';
div2.style.borderRadius = '30px';
div2.style.margin = '10px';
h1.innerHTML = 'AchieversIT';
ul.style.display = 'flex';
ul.style.fontSize = '17px';
li1.innerHTML = 'facebook';
li1.style.paddingRight = '50px';
li2.innerHTML = 'linkedin';
li2.style.paddingRight = '50px';
li3.innerHTML = 'youtube';
li3.style.paddingRight = '50px';
li4.innerHTML = 'google';
li4.style.paddingRight = '50px';
li5.innerHTML = 'twitter';
li5.style.paddingRight = '50px';



div3.style.gridArea = '2 / 2 / 3 / 4';
// div3.style.alignContent = 'center';
div3.style.background = 'black';
div3.style.borderRadius = '30px';
div3.style.color = 'white';
div3.style.margin = '10px';
h3.innerHTML = 'Web Developer & Designer';


div4.style.gridArea = '3 / 2 / 4 / 4';
div4.style.display = 'flex';
div4.style.textAlign = 'center';
div4.style.margin = '10px';
div4.style.fontWeight = '900';
div5.style.flex = '1';
div5.style.background = 'lightblue';
div5.style.borderRadius = '30px';
div6.style.flex = '1';
div6.style.background = 'green';
div6.style.borderRadius = '30px';
div7.style.flex = '1';
div7.style.background = 'yellow';
div7.style.borderRadius = '30px';
div8.style.flex = '1';
div8.style.background = 'orangered';
div8.style.borderRadius = '30px';
h21.innerHTML = '90%';
p1.innerHTML = 'HTML';
h22.innerHTML = '80%';
p2.innerHTML = 'CSS';
h23.innerHTML = '70%';
p3.innerHTML = 'JS';
h24.innerHTML = '60%';
p4.innerHTML = 'React';


body.appendChild(main);

main.appendChild(div1);
main.appendChild(div2);
main.appendChild(div3);
main.appendChild(div4);

div1.appendChild(img);

div2.appendChild(h1);
div2.appendChild(ul);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);

div3.appendChild(h3);

div4.appendChild(div5);
div4.appendChild(div6);
div4.appendChild(div7);
div4.appendChild(div8);
div5.appendChild(h21);
div5.appendChild(p1);
div6.appendChild(h22);
div6.appendChild(p2);
div7.appendChild(h23);
div7.appendChild(p3);
div8.appendChild(h24);
div8.appendChild(p4);
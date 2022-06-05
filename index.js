// to get random dice1 number
var randomnumber1=Math.floor(Math.random()*6)+1;
var imagenumber1="dice"+ randomnumber1+".png";
var image1source="images/"+imagenumber1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",image1source);
// to get random dice 2 number
var randomnumber2=Math.floor(Math.random()*6)+1;
var imagenumber2="dice"+ randomnumber2+".png";
var image2source="images/"+imagenumber2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",image2source);
// to change the heading
var heading=document.querySelector(".container h1");
if(randomnumber1>randomnumber2){
    heading.textContent="Player 1 Wins!";
}
else if(randomnumber1<randomnumber2){
    heading.textContent="Player 2 Wins!";
}
else{
    heading.textContent="Draw";
}
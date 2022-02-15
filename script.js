var products = [
  {
    id:0,
    name:"Apples",
    price:"2.99",
    image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color:"red"
  },
  {
    id:1,
    name:"Bananas",
    price:"2.50",
    image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color:"gold"
  },
  {
    id:2,
    name:"oranges",
    price:"3.50",
    image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color:"orange"
  }
];

let elements = [];
let count =0;

eleMaker();

function eleMaker(){

  for(let obj in products){
  let x = products[obj];
  elements.push(new box(x.name, x.price, x.image, x.color));
  }
  
}


function box(Name, Price, Image, Color){
  
  let that = this;
  
  this.ele=document.createElement("div");
  this.eleName=document.createElement("div");
  this.elePrice=document.createElement("div");
  this.eleImage=document.createElement("img");
  this.eleColor=document.createElement("div");  
  
  this.eleName.innerHTML = "Name: " + Name;
  this.elePrice.innerHTML = "Price: " + Price;
  
  this.ele.classList.add("product");
  
  this.eleImage.src = Image;
  this.Img = Image;
  
  this.Name = Name;
  this.Price = Price;
  
  this.ele.append(this.eleImage);
  this.ele.append(this.eleName);
  this.ele.append(this.elePrice);
  
  document.body.append(this.ele);
  
  
  this.ele.addEventListener("mouseover", function(){
    that.ele.style.borderColor = Color;
  })
 
  this.ele.addEventListener("click", function(){
    that.ele.style.borderColor = "black";
    that.ele.classList.add("product");
    that.popUpImage();
    
  })
  
}

box.prototype.popUpImage = function() {
  this.temp = new box(this.Name, this.Price, this.Img, this.Color);
  elements.push(this.temp); 
  this.temp.ele.classList.toggle("popUp");
  this.temp.ele.classList.toggle("product");
  
  count++;
  if(count === 2) {
    count = 0;
    elements.splice(elements.length - 1, 1);
    document.body.innerHTML="";
    
    eleMaker();
    
  }
  
  
}
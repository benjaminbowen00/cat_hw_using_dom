var app = function(){
  // addCatToList();
  // addCatToCatList("Mog", "Kippers","http://www.catster.com/wp-content/uploads/2015/08/sleeping-cat-1.jpg");
  formCatsList(catArray);
};
// //initial solution for adding one cat
// var addCatToList = function(){
//   const catList = document.getElementById('cats');
//   var unorderedList = document.createElement("ul")
//   var nameItem = document.createElement("li");
//   var favFoodItem = document.createElement("li");
//   var picItem = document.createElement("li");
//   var catPic = document.createElement("IMG");
//   catPic.src = "http://www.catster.com/wp-content/uploads/2015/08/sleeping-cat-1.jpg"
//   catPic.width = "500";
//   picItem.appendChild(catPic);
//   nameItem.innerText = "Name: Mog";
//   favFoodItem.innerText = "Favourite Food: Kippers";
//   catList.appendChild(unorderedList);
//   unorderedList.appendChild(nameItem);
//   unorderedList.appendChild(favFoodItem);
//   unorderedList.appendChild(picItem);
// }

var catArray = [{name: "Boba", favouriteFood: "Sock fluff", url: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
{name: "Barnaby", favouriteFood: "Tuna", url: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"},
{name: "Max", favouriteFood: "Whiskas Temptations", url: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"},
{name: "Mog", favouriteFood: "Kippers", url: "http://www.catster.com/wp-content/uploads/2015/08/sleeping-cat-1.jpg"},
]



var createNameString= function(name){
  return `Name: ${name}`;
}

var createFoodString = function(food){
  return `Favourite food: ${food}`;
}

var createCatImageFromURL = function(url){
  var pic = document.createElement("IMG");
  pic.width = "500";
  pic.src = url;
  return pic;
}

var createNameItem = function(name){
  let nameItem = document.createElement("li");
  nameItem.innerText = createNameString(name);
  return nameItem;
}

var createFoodItem = function(food){
  let foodItem = document.createElement("li");
  foodItem.innerText = createFoodString(food);
  return foodItem;
}

var createPicItem = function(url){
  let catPic = createCatImageFromURL(url);
  return document.createElement("li").appendChild(catPic);
}

var createUnorderedListofThreeItems = function(name, food, url){
  // var inputsArray = [createNameItem(name), createFoodItem(food)];
  var unorderedList = document.createElement("ul");

  // inputsArray.forEach(function(thing, index){
  //   let item = document.createElement("li");
  //   item.innerText = thing;
  //   unorderedList.appendChild(item);
  // })
  unorderedList.appendChild(createNameItem(name));
  unorderedList.appendChild(createFoodItem(food))

  unorderedList.appendChild(createPicItem(url));

  return unorderedList;
}

var addCatToCatList = function(name,food, url){
  const catList = document.getElementById('cats');
  var list = createUnorderedListofThreeItems(name, food, url);
  catList.appendChild(list);
}

var formCatsList = function(array){
  array.forEach(function(cat){
    addCatToCatList(cat.name, cat.favouriteFood, cat.url);
  })
}











document.addEventListener("DOMContentLoaded", app);

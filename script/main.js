var hi;

$(".nav-link").click(function(){
    
  });

  $(".products .product-item").click(function(){
    $(".products .product-item").removeClass("active");
    var productContainer = $(".products");
    var widthValue = $(this).width();
      var selectedIndex = ($(".products .product-item").index($(this)));
      productContainer.css("transform", `translateX(${-widthValue * selectedIndex}px)`); 
    ($(this));
    $(this).toggleClass("active");
  });

  var item_number=1;
  var total_product=3;
var last_item = total_product;
var first_item =1;
var item_numbers_list = [1,2,3];  

var image_dict = {
  1: "images\\flat.jpg",
  2: "images\\bar.jpg",
  3:"images\\angle.jpg"
};

var spec_image_dict = {
  1: "flat_table",
  2: "bar_table",
  3: "equal_table",
};

var title_dict = {
  1: "MS Flat",
  2:"MS Square Bars",
  3: "MS Equal Angels",
};
  function bckwrd() {
    first_item = item_number;
    console.log("start : " + item_numbers_list);
    var index = item_numbers_list.indexOf(item_number);
    index = total_product - 1;
    console.log("index : " + index);
    item_numbers_list.unshift(item_numbers_list.splice(index, 1)[0]);
    item_number = item_numbers_list[0];
    console.log("res : " + image_dict[item_numbers_list[0]]);

    $("#"+spec_image_dict[item_numbers_list[0]]).show();
    $("#"+spec_image_dict[item_numbers_list[1]]).hide();
    $("#"+spec_image_dict[item_numbers_list[2]]).hide();
    document.getElementById("bigImage").src=image_dict[item_numbers_list[0]];
    document.getElementById("image1").src=image_dict[item_numbers_list[1]];
    document.getElementById("image2").src=image_dict[item_numbers_list[2]];
    
    document.getElementById("title1").innerHTML = title_dict[item_numbers_list[0]];
    document.getElementById("title2").innerHTML = title_dict[item_numbers_list[1]];
    document.getElementById("title3").innerHTML = title_dict[item_numbers_list[2]];
  }

  function frwrd() {
    last_item = item_number;
   
    console.log("start : " + item_numbers_list);
    item_numbers_list.push(item_numbers_list.splice(item_numbers_list.indexOf(last_item), 1)[0]);
   
    item_number = item_numbers_list[0];
    console.log("res : " + item_numbers_list);
    
    document.getElementById("bigImage").src=image_dict[item_numbers_list[0]];
    $("#"+spec_image_dict[item_numbers_list[0]]).show();
    $("#"+spec_image_dict[item_numbers_list[1]]).hide();
    $("#"+spec_image_dict[item_numbers_list[2]]).hide();    
    document.getElementById("image1").src=image_dict[item_numbers_list[1]];
    document.getElementById("image2").src=image_dict[item_numbers_list[2]];

    document.getElementById("title1").innerHTML = title_dict[item_numbers_list[0]];
    document.getElementById("title2").innerHTML =title_dict[item_numbers_list[1]];
    document.getElementById("title3").innerHTML =title_dict[item_numbers_list[2]];
  }

  function changeProduct(){
    document.getElementById("bigImage").src="../template/save.png";
  }
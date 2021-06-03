  menu_list_array = ["Cheese Margherita Pizza",
                   "Mexican Delight",
                   "Paneer Pizza",
                   "Sausage Pizza",
                   "Pinnapple Pizza",
                   "Meat Lovers Pizza",
                   "Pepperoni Pizza",
                   "Veg Loaded Special",
                   "Non Veg Loaded Special",
                   "Chicken Tandoori Pizza",
                   "Panner 65 Pizza"];

function getmenu(){
 var htmldata;
 htmldata="<ol class='menulist'>"
 menu_list_array.sort();
 for( var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+ "<li>" + menu_list_array[i] + "</li>"
}
 htmldata=htmldata+ "<ol>"
 document.getElementById("display_menu").innerHTML=htmldata;
}

function add_item(){
 var htmldata;
 var item=document.getElementById("add_item").value;
 menu_list_array.sort();
 htmldata= "<section class= 'cards'>"
 for( var i=0;i<menu_list_array;i++){
    htmldata=htmldata+ '<div class="card">'
    + '<img src="pizza-2.png">'
     + menu_list_array[i] + '</div>'
}
 htmldata=htmldata+"</section>"
 document.getElementById("display_addedmenu").innerHTML=htmldata;
}

function add_top(){
 item= document.getElementById("add_item").value;
 menu_list_array.push(item);
 add_item();
}
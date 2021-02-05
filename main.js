var canvas = new fabric.Canvas('myCanvas');

widthofblock = 30;

heightofblock = 30;

player_x = 10;

player_y = 10;

player_object = "" ;

block_image = "" ;

function player_update()
{
    fabric.Image.fromURL("batman image.jpg", function(Img) {
    player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(player_object);

    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
    block_image_ = Img;

    block_image_.scaleToWidth(block_image_width);
    block_image.scaleToHeight(block_image_height);
    block_image.set({
    top:player_y,
    left:player_x
    });
    canvas.add(block_image_);

    });

}

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
    console.log("p and shift pressed together");
    widthofblock = widthofblock + 10;
    heightofblock = heightofblock + 10;
    document.getElementById("width_value").innerHTML = widthofblock;
    document.getElementById("height_value").innerHTML = heightofblock;   
}
if(e.shiftKey && keyPressed == '77')
{
    console.log("m and shift pressed together");
    widthofblock = widthofblock - 10;
    heightofblock = heightofblock - 10;
    document.getElementById("width_value").innerHTML = widthofblock;
    document.getElementById("height_value").innerHTML = heightofblock;
}

    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }

    if(keyPressed == '70' && keyPressed == '79')
    {
        new_image("batman_face.jpg")
        console.log("f and o")
    }
    
    if(keyPressed == '66' && keyPressed == '79')
    {
        new_image("ironman_body.png")
        console.log("b and o")
    } 

    if(keyPressed == '76' && keyPressed == '79')
    {
        new_image("spiderman_legs.png")
        console.log("l and o")
    }  

    if(keyPressed == '82' && keyPressed == '79')
    {
        new_image("thor_right_hand.png")
        console.log("r and o")
    }  

    if(keyPressed == '72' && keyPressed == '79')
    {
        new_image("captain_america_left_hand.png")
        console.log("h and o")
    }  
}

function up()
{
    if(player_y >=0)
    {
        player_y = player_y - heightofblock;
        console.log(" Block image height = " + heightofblock);
        console.log("When Up arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
    if(player_y <=500)
    {
        player_y = player_y + heightofblock;
        console.log("block image height = " + heightofblock);
        console.log("When Down arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if(player_x >0)
    {
        player_x = player_x - widthofblock;
        console.log("block image width = " + widthofblock);
        console.log("When Left arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(player_x <=850)
    {
        player_x = player_x + widthofblock;
        console.log("block image width = " + widthofblock);
        console.log("When Right arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}





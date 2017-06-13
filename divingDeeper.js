//JavaScript restaurant
//use the generateMenu() function to get a menu object when you need it

// This is a test order. It should take 8 seconds and should cost $65.
// You can also test your restaurant functions with other menu items.


//Order('Lobster','Wild Rice','Wine')
//Order('Lobster','Wild Rice','ine')
//Order('Stak','Burger','Shawarma')

// WRITE YOUR CODE BELOW
// Order Function Here:



function Order()
{  
    var menu = generateMenu();
    var is_in_array = true;
    var temorder = [];
    // we create a new  "temorder"" array, if the elemnt of order array is  in menu, we will push it to the
    // temorder, and we can campare with the length of neworder and order, in this way, checking if elemens are not in 
    //menu
     for(var j = 0; j<=arguments.length;j++)
     {
         for (var i = 0; i<menu.length;i++)
        {
            if(arguments[j] == menu[i].name)
              temorder.push(arguments[j]);
        }
    }

    if (arguments.length == temorder.length )
    {
    console.log("right");
    Cook(temorder);
    }
    else
    console.log("Your ordered items are not on the menu.Please Reorder");
}
    

// Cook Function Here:

function Cook(temorder)
{
    var menu = generateMenu();
    var totalTime = 0;
    // find the element and add it time to total time
    for(var i = 0; i<temorder.length;i++)
    {  
        for(var j =0; j<menu.length;j++)
        {
            if(temorder[i] == menu[j].name)
            totalTime += menu[j].time;
        }
    }
    console.log("You have to wait for " +totalTime+" seconds");

    setTimeout(function(){Serve(temorder)},totalTime*1000);

}


// Serve Function Here:
function Serve(temorder)
{
     var menu = generateMenu();
     var totalPrice = 0;
// find the element in menu and add its price to total price
    for(var i = 0; i<temorder.length;i++)
    {  
        for(var j =0; j<menu.length;j++)
        {
            if(temorder[i] == menu[j].name)
            totalPrice += menu[j].price;
        }
    }

    console.log("The meal is ready to serve, and the total price is " +totalPrice+" dollars");

}



// function that returns a menu array, no need to modify this function
function generateMenu (){
    return [{
        name:'Steak',
        time:5,
        price:40
    },{
        name:'Burger',
        time:4,
        price:15
    },{
        name:'Shawarma',
        time:4,
        price:20
    },{
        name:'Pizza',
        time:3,
        price:10
    },{
        name:'Sushi',
        time:3,
        price:15
    },{
        name:'Lobster',
        time:5,
        price:50
    },{
        name:'Carpaccio',
        time:5,
        price:25
    },{
        name:'Chicken',
        time:4,
        price:10
    },{
        name:'Wild Rice',
        time:2,
        price:5
    },{
        name:'Fries',
        time:1,
        price:5
    },{
        name:'Baked Potato',
        time:1,
        price:5
    },{
        name:'Salad',
        time:1,
        price:5
    },{
        name:'Coffee',
        time:1,
        price:0
    },{
        name:'Tea',
        time:1,
        price:0
    },{
        name:'Pop',
        time:1,
        price:0
    },{
        name:'Beer',
        time:1,
        price:5
    },{
        name:'Wine',
        time:1,
        price:10
    }]
}
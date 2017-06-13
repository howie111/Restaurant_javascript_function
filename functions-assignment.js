//JavaScript restaurant
//use the generateMenu() function to get a menu object when you need it

// This is a test order. It should take 8 seconds and should cost $65.
// You can also test your restaurant functions with other menu items.


//Order('Lobster','Wild Rice','Wine')
Order('Lobster','Wild Rice','Wine')

// WRITE YOUR CODE BELOW
// Order Function Here:
function Order(main,side,drink)
{ 
    if(main == "" || main==undefined)
    {
    console.log("Please choose a main.")
}
else if(side ==""|| side==undefined)
{
     console.log("Please choose a side.")
}
else if(drink == "" || drink==undefined)
{
    console.log("Please choose a drink.")  
}
else{
Cook(main,side,drink)
}
}

// Cook Function Here:

function Cook(meal1,meal2,meal3)
{
    var menu = generateMenu();
    var totalTime = 0;
    for(var i = 0; i <menu.length;i++)
    {
        if (meal1 == menu[i].name || meal2 == menu[i].name||meal3 ==menu[i].name)
        {
            totalTime = totalTime +menu[i].time;
        }
    }
    console.log("You have to wait for " +totalTime+" seconds");
    

    setTimeout(function(){Serve(meal1,meal2,meal3)},totalTime*1000);

}

// Serve Function Here:
function Serve(meal1,meal2,meal3)
{
     var menu = generateMenu();
     var totalPrice = 0;
    for(var i = 0; i <menu.length;i++)
    {
        if (meal1 ==menu[i].name ||meal2 ==menu[i].name||meal3 ==menu[i].name)
        {
            totalPrice = totalPrice +menu[i].price;
        }
    }
    console.log("The meal is ready to serve, and the total price is" +totalPrice+" dollars");

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
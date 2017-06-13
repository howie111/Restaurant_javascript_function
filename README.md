# Restaurant_javascript_function
it consist 3 functions
The first function will be the 'order' function, which should take in 3 parameters, 
the main, side, and drink. If these 3 arguments are provided by a user, then the order 
function will call the next function, the cook function, with the 3 items as arguments. 
If less than 3 arguments are provided, then the function should display an error and ask the user to order again.

The second function will be the 'cook' function, which again will take in the 3 meal parameters. 
This function will need to look through the restaurant's menu and determine the total time it will take to prepare
the 3 items that were ordered. Once the total time has been determined, the function should tell the user how much time it
will take to prepare the meal, and then wait that amount of time in seconds. After that, the 'serve' function will be called 
with the 3 meal items as arguments.

The final 'serve' function will need to take in the 3 meal parameters, and loop through the menu to find out the total price
of all 3 menu items. The function should log that the meal is ready to serve, and also inform the user what the price of the meal 
will be.


diving deeper
Modify the order function of your restaurant to check whether or not the user's ordered items are on the menu. If not, the function 
should reject the user's order and ask the user to order different items.

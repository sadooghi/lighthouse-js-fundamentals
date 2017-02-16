var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var i = 0;
while (i< ingredients.length) {
  console.log(ingredients[i]);
  i ++;
}

// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i < ingredients.length; i++)
  console.log(ingredients[i]);

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var i = ingredients.length - 1; i >= 0; i --)
  console.log(ingredients[i]);

// the same with while loop
var j = ingredients.length - 1;
while (j >=0) {
  console.log(ingredients[j]);
  j --;
}
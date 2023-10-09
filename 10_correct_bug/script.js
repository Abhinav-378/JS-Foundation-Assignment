/*10. Correct a bug

You are working on an e-commerce website where customers can aee items to their cart. The cart stores the 
quantity of each item that the customer wants to purchase in an array of numbers. However, the website is 
currently experiencing a bug where the quantity of each item is being recorded incorrectly by reducing it to 
half. As a result, you need to write a JavaScript function that can double the quantity of each item in the cart 
array to correct the bug.
*/
let arr=[1,2,4,3,8,9,4];

let newArr=arr.map(e => e*2);
console.log(newArr);
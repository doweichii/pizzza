// Input & InnerHTML

// .InnerHTML command:
//  1.Gets the contents of an HTMl element. E.g. <p>Click <a>here<a> </p.
// The innerHTMl of the pragraph is: Click <a>here</a>
// The innerHTMl of the anchor <a> is:here
//  2.Sets the context of an  HTMl element.

// Value command: retrives the content of an <input> element.
//      *IMPORTANT* value command should ALWAYS be used with in function

document.getElementById("order-btn").addEventListener("click", placeOrder);

function placeOrder() {
  let topping1 = document.getElementById(
    "Enter size of pizza (small, medium, large):"
  ).value;
  let topping2 = document.getElementById("Enter first topping").value;
  let size = document.getElementById("Enter second topping").value;

  // Processing: make output statment
  let output = `Your ${size} pizza with ${topping1} and ${topping2} will be ready in 20 minutes`;

  // Output: Display output in the "Your Order" section of the websites
  document.getElementById("output").innerHTML = msg;
}

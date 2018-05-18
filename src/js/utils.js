// export the function
export function addNewHi() {
  let newDiv = document.createElement("H1");
  newDiv.setAttribute("class","hello-world");
  newDiv.textContent = "hello webpack!";
  console.log("utils.js");
  return newDiv;
}

// Define and export
let lll = "<i class=\"da-font icon-dalanglogo\"></i>";

export {lll};
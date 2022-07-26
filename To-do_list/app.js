function newElement(){
  var li = document.createElement('li');
  var inputValue = document.querySelector(".input_task").value;
  li.appendChild(document.createTextNode(inputValue));
  if (inputValue === '') {
  alert("You must write something!");
  } else {
  document.querySelector(".list").appendChild(li);
  document.querySelector(".input_task").value = ""

  }
}


document.querySelector("input").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      console.log("Enter key detected.")
      newElement();
    }
  });

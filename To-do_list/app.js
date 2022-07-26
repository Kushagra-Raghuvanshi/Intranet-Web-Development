function newElement(){
  var ol = document.querySelector(".list")
  var li = document.createElement('li');
  var span = document.createElement('span')
  
  var del_button = document.createElement('button')
  del_button.innerText = 'Delete 🗑'
  del_button.className = 'delete_button'
  del_button.onclick = function(){
    ol.removeChild(this.parentElement);
  };
  
  var inputValue = document.querySelector(".input_task").value;
  span.appendChild(document.createTextNode(inputValue));

  if (inputValue === '') {
  alert("You must write something!");
  } else {

  li.appendChild(del_button)
  li.appendChild(span)
  ol.appendChild(li);
  
  document.querySelector(".input_task").value = ""

  

  }
}


document.querySelector("input").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      console.log("Enter key detected.")
      newElement();
    }
  });

var button = document.querySelector('.Add_button');

button.onclick = function(){
  newElement();
};



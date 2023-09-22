let taskinput = document.querySelector(".forms-group input");
let button = document.querySelector(".forms-group button")
let divtasksss = document.querySelector("#tasksss");
let span = document.querySelector("span");
let alltasks = [];


let rendertask = () =>{
let value = taskinput.value
if(value.trim() == ''){
alert("plese enter data!")
}else{
  singletask = {
        task: value,    
    }
    alltasks.push(singletask);
    taskinput.value="";
    reedtasks();
}  
}





   let delettask = (index ) =>{
alltasks.splice(index , 1)
reedtasks();
   }

let reedtasks =() =>{
    span.innerText = alltasks.length;
    tasksss.innerHTML = "";
    alltasks.forEach((Element, index ,i) => {
        tasksss.innerHTML += `
        <div class="row1">
      <div class="info">
        <h1>${Element.task}</h1>
      </div>
      <div class="item-btn">
      <button><i class="fa-regular fa-pen-to-square"></i></button>
        <button onclick="delettask(${index})"><i class="fa-solid fa-trash"></i></button>  
            </div>

    </div>
`;

    });
};

button.addEventListener("click" , rendertask)



let form = document.getElementById("form"); 
let TaskStore = document.getElementById("TaskStore"); 
let AllTaskStore = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let taskinput = e.target.inp.value;

  if (taskinput === "") {
    alert("Enter a Task plz");
  } else {
    AllTaskStore.push(taskinput);
    form.reset();
    AllTaskRecive(); 
  }
});
function AllTaskRecive (){

  TaskStore.innerHTML =  "";
  AllTaskStore.forEach( (task, index )  => {
    TaskStore.innerHTML +=  `<p>
    ${index + 1}. ${task}  
    <span>
                            <i class="fa fa-trash" onclick="deleteTask(${index})"></i>
                        <i class="fa fa-pen" onclick="editTask(${index})"></i>
</span>
    
    
    </p>
    
    
    `


  })

}

function deleteTask (index){

AllTaskStore.splice(index, 1)
AllTaskRecive();

}

function editTask(index) {
        let newTask = prompt("Edit task:", AllTaskStore[index]); 
        if (newTask !== null && newTask !== "") {
            AllTaskStore[index] = newTask; 
            AllTaskRecive(); 
        }
    }





































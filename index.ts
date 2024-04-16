import inquirer from "inquirer";
let todos = [];
let condition = true
while(condition) 
    { 
        let addTask = await inquirer.prompt(
        [
            {
                name:"todo",
                message:"what you want to add in your Todos",
                type:"input",
    
            } ,{
                name:"addMore",
               message:"Do you want to add more?",
               type:"confirm",
            }
        ]
    );
    
    todos.push(addTask.todo);
    condition = addTask.addMore
    console.log(todos);

}


















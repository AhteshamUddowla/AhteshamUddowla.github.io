let todo_list = [];

function display(){
    let html_list = "";

    for(let i=0; i<todo_list.length; i++){
        let html = `
            <div> ${todo_list[i].todo_value} </div>
            <div> ${todo_list[i].date_value} </div>
            <button onclick="todo_list.splice(${i},1); display();" class="delete-btn">
                Delete 
            </button>
        `;
        html_list += html;
    }
    document.querySelector('.todo_list').innerHTML = html_list;
}

function add_todo(){
    let todo_task = document.querySelector('.todo');
    let date = document.querySelector('.date');

    let todo_value = todo_task.value;
    let date_value = date.value;

    todo_list.push({todo_value, date_value});

    // console.log(todo_list);
    todo_task.value = "";
    date.value = "";
    display();
}
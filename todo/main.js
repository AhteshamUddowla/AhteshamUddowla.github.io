let todo_list = JSON.parse(localStorage.getItem('todo_list'));

if(todo_list === null){
    todo_list = [];
}

display();

function display(){
    let html_list = "";

    for(let i=0; i<todo_list.length; i++){
        let html = `
            <div> ${todo_list[i].todo_value} </div>
            <div> ${todo_list[i].date_value} </div>
            <button 
                class="delete-btn">
                Delete 
            </button>
        `;
        html_list += html;
    }
    document.querySelector('.todo_list').innerHTML = html_list;
    document.querySelectorAll('.delete-btn').forEach((deleteBtn, index) => {
        deleteBtn.addEventListener('click', () => {
            todo_list.splice(index,1);
            localStorage.setItem('todo_list', JSON.stringify(todo_list));
            display();
        })
    })
}

document.querySelector('.add-btn').addEventListener('click', () => {
    add_todo();
})

function add_todo(){
    let todo_task = document.querySelector('.todo');
    let date = document.querySelector('.date');

    let todo_value = todo_task.value;
    let date_value = date.value;
    
    if(todo_value!='')
        todo_list.push({todo_value, date_value});

    localStorage.setItem('todo_list', JSON.stringify(todo_list));

    todo_task.value = "";
    date.value = "";
    display();
}
const tasktitle = document.getElementById(`task-title`)
//style
tasktitle.style.background = `#333`
tasktitle.style.color = `#fff`
tasktitle.style.padding = `15px`
//tasktitle.style.display = `none`

//content
tasktitle.textContent = 'My Tasks`
tasktitle.innerText = 'My Favorite Tasks`
tasktitle.innerHTML = '<span style="color : redMy Tasks</span>`

//single element
let li = document.querySelector(`li`)
li = document.querySelector('li:last-child`)
li = document.querySelector('li:nth-child(even)`)
li = document.querySelector('li:nth-child(odd)`)
//multiple elements
const  oddLi = document.querySelectorAll('li':'nth-child(odd)`)

/*for (let i = 0; < 2; i++{
    document.querySelectorAll(`li:nth-child(odd)`)[i]
    .style.backround = `#ddd`)
}/*/

oddLi.forEach((li) => {li.style.background = '#ddd`})
console.log(oddLi)

const  list = document.querySelector('ul`)
console.log(list)
function addTask (event) {
    console.log(Taskinput.value)
    event.preventDefault()
}
console.log(tasktitle)
//
const form = document.querySelector('#add-task`)
// get form input value
form.addEventListener('submit´, addTask)
function addTask(event) {
   /*
    console.log(event.target)
    /*/
    const taskInput = document.querySelector('#task´)
    console.log(taskInput.value)

    //create li with value and x link
    const li = document.createElement('li´)
    li.appendChild(document.createTextNode(taskInput))
    li.className = 'collection-item'

    const  x =document.createElement('a´)
    appendChild(document.createTextNode('x´))
    x.setAttribute('href´, ´#´)
    x.className = 'secondary-content´

    li.appendChild(x)

    const ul = document.querySelector('ul´)
    ul.appendChild(li)

    //delete input value from form input field
    taskInput.value = ''
    console.log(li)
    event.preventDefault()
}
//
const taskList = document.querySelector('#taskList')
taskList.addEventListener('click',deleteTask)
function deleteTask(event)
function addtask(event){}
console.log(event.target){
if(target.content==='X'){
if(confirm('Are you sure to delete this task')){
event.target.parentElement.remove()
}
}
}
const deleteTasks = document.querySelector('#deletetasks')
deleteTasks.addEventListener('click',deleteAllTasks)
function deleteAllTasks(event){
tasklist.InnerHTML =''
}
//
while (taskList.firstChild){
taskList.removeChild(taskList.firstChild)
}
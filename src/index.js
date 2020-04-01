document.addEventListener("DOMContentLoaded", () => {
  // your code here
console.log("Hello")

//need user input
const taskInput = document.querySelector("#new-task-description")
  // console.log("taskInput ")


  //need form
const form = document.querySelector("#create-task-form")
  // console.log("form")

//event listener when form is submitted
form.addEventListener('submit', function(e){
   e.preventDefault()
   const newTask = taskInput.value

//want to add data to list
const list = document.querySelector("#tasks")
const li = document.createElement('li')
li.innerText = newTask

//create a delete button
const deleteBttn = document.createElement('button')
deleteBttn.innerText = 'x'

list.appendChild(li)
li.appendChild(deleteBttn)
//functionality of the delete button
deleteBttn .addEventListener('click', function(e){
    li.remove()
})
form.reset()
  })
 
})
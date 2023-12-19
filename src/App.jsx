import Inputtodo from "./components/inputtodo"
import Container from "./components/Container"
import Todoitem from "./components/Todoitem"
import "./App.css"
import { useState } from "react"
function App(){
  const intitialtodoitems = [
    {
      name:"BUY MILK",
      date:"12/12/2023"
     
    },
  ];
  const [todoItems,setTodoItems] =useState(intitialtodoitems);
  const handleonclick = (itemname,duedate) =>{
    console.log(`work is : ${itemname} and date is ${duedate}`);
   const newtodoItems = [...todoItems,{name : itemname ,duedate : duedate}]
   setTodoItems(newtodoItems);
   
  };
  const handledeleteitem = (todoItemName)=>{
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }
  return(
    <div className="container"> 
    <Container >
       <span className="heading">Your Personal Todo List</span>
       <Inputtodo handleonclick = {handleonclick}></Inputtodo>
      <Todoitem todoItems = {todoItems} ondelete={handledeleteitem}></Todoitem>
    </Container>
    </div>
  )
};

export default App;
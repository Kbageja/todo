import Todoitems from "./Todoitems"
const  Todoitem =({todoItems,ondelete}) =>{
 return(
    <div>
      {  todoItems.map((item)=>{
        <Todoitems todoname ={item.name} tododate = {item.date} ondelete = {ondelete}></Todoitems>
      })
    }
    </div>
 );



}
export default Todoitem;
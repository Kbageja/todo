import { useState } from "react";
import styles from "./inputtodo.module.css"
function Inputtodo({handleonclick})
{
    const [todoname,setTodoname] = useState();
    const [tododate,setTododate] = useState();

    const handleNameChange = (event) => {
        setTodoname(event.target.value);
    };
    const handledatechange  = (event) =>{
        setTododate(event.target.value);
    };
    const handleAddbutton = () =>{
        handleonclick(todoname,tododate)
        setTododate("");
        setTodoname("");
    }


    return(
       
        <div className={styles.bar}>
       <input type="text"  id="todotext" className={styles.addbar} value = {todoname} onChange={handleNameChange}/>
       <input type="date"  id="tododate" className={styles.adddate} value = {tododate} onChange={handledatechange}/>
       <input type="button" value="ADD"  className={styles.button} 
       onClick={handleAddbutton}
       />
       </div>
    )
   
};
export default  Inputtodo;
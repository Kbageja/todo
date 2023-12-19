import styles from "./Todoitems.module.css";
function Todoitems({todoname,tododate,ondelete}){
    <div className={styles.rows}>
        <div className="col1">{todoname}</div>
        <div className="col2">{tododate}</div>
        <div className="col3">
            <button 
            onClick={()=>ondelete(todoname)}>Delete</button>
        </div>

    </div>

}
export default Todoitems;
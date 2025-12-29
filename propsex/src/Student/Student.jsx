
import styles from './Student.module.css'

function Student(props){
    return(
        <>

        <div className={styles.studentdiv}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Department: {props.dept}</p>
            <p>Has Honour: {props.hashonour ? "Yes" : "No"}</p>
        </div> 

        </>
    )
}

export default Student
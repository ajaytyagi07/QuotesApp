import React from 'react'
import styles from './Quote.module.css';
import { useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from "react-icons/ri";

const Quote = (props) => {

    const navigate = useNavigate();

    const showQuoteHandler = (id) => {
        navigate(`/quotes/${id}`);
    }

    const deleteHandler = () => {
        props.onDelete(props.id); 
    };


    return (
     <>
        <li className={styles.quote}>
            <span>
                <p>{props.text}</p>
                <p>~{props.author}</p>
            </span>
            <button onClick={()=>showQuoteHandler(props.id)} className={styles.showbutton}>View FullQuotes</button>
            <RiDeleteBin6Line onClick={deleteHandler} style={{cursor:'pointer', marginLeft:'5px'}}/>
        </li>
      </>
    )
}

export default Quote;

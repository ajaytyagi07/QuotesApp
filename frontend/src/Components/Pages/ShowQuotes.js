import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import styles from './ShowQuotes.module.css'

const ShowQuotes = () => {

    const params = useParams();
    const [quote, setQuote] = useState({
        author: '',
        text: ''
    });


    async function GetQuotes() {
        
        const res = await axios.get(`http://localhost:8000/quotes/${params.id}`);
        
        const { author, text } = res.data;

        setQuote({ author, text });
    }

    useEffect(() => {
        
        GetQuotes()

    },[])

    

    return (
        <div className={styles.showQuotes}>
            <h1>~{quote.author}</h1>
            <p>{quote.text }</p>
        </div>
    )
}

export default ShowQuotes

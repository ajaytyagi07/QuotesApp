import React,{useState,useEffect} from 'react'
import Quote from '../Quote/Quote';
import axios from 'axios';
import styles from './AllQuotes.module.css'

const AllQuotes = () => {

    const [quotes, setQuotes] = useState([]);
   
    async function getAllQuoutes() {
        try {
            const res = await axios.get('http://localhost:8000/allquotes')
            setQuotes(res.data);
        }
        catch (e) {
            console.log('Cannot get the Quotes');
        }
    }

    useEffect(() => {
        getAllQuoutes();
    }, []);

    const deleteQuoteHandler = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/quotes/${id}`);
            setQuotes(prevQuotes => prevQuotes.filter(quote => quote._id !== id));
        } catch (error) {
            console.error('Error deleting quote:', error);
        }
    };


    return (
        <div className={styles.quotesdiv}>
            <h1>All Quotes</h1>
                <ul style={{padding:'0px'}}>
                {
                    quotes.map((quote) => {
                        return <Quote
                            key={quote._id}
                            author={quote.author}
                            text={quote.text}
                            id={quote._id}
                            onDelete={deleteQuoteHandler}
                        />
                    })
                }
            </ul>
        </div>
    )
}

export default AllQuotes

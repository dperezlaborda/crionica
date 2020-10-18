import React, {useState, useEffect} from 'react';
import axios from 'axios';
import New from '../components/New';
import Pagination from '../components/Pagination';
import '../style/sections/news.scss';

const News = () => {

    const url = 'https://jsonplaceholder.typicode.com/posts';

    const [news, setNews] = useState([]); //el valor del estado, dentro de useState(va el valor x default que en este caso seria un array vacio)
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage] = useState(3);

    useEffect(() => {  //genera un loop eterno
        const fetchNews = async () =>{
            setLoading(true);
            const res = await axios.get(url); 
            setNews(res.data);
            setLoading(false);
        }
        fetchNews();
    }, []);

    //obtener las noticias

    const lastIndex = currentPage * newsPerPage;
    const firstIndex = lastIndex - newsPerPage;
    const currentNews = news.slice(firstIndex, lastIndex); 

    // cambiar de pagina

    const paginate = (pageNumber) =>{ setCurrentPage(pageNumber) }

    return(
        <section className="news-container">
            <h2 className="news-title">Noticias recientes</h2>
            <New news={currentNews} loading={loading}/>
            <Pagination newsPerPage={newsPerPage} totalNews={news.length} paginate={paginate}/>
        </section>
    )
}

export default News; 
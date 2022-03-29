import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import './filme-info.css';

export default function Filme(){
    const { id } = useParams();
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        async function loadFilmes(){
            const response = await api.get(`r-api/?api=filmes/${id}`);
            setFilme(response.data);
            setLoading(false);
        }
  
        loadFilmes();
  
      }, [id]);

      if(loading){
          return(
            <div className='filme-info'>
                <h1>Carregando...</h1>
            </div>
          )
      }

    return(
        <div className='filme-info'>
            <h1>Página de detalhes - {id} </h1>
        </div>
    )
}

import './header.css';
import { Link } from 'react-router-dom';

export default function Header(){

    return(
        <header>
            <Link className='logo' to="/">The Movies</Link>
            <Link className='favoritos' to="/">Salvos</Link>
        </header>
    )

}
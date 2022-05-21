import CharItem from './CharItem'
import { useEffect, useState } from 'react';
import Api from '../api/Api'

export function CharList() {

    const [char, setChar] = useState([]);
    const [page, setPage] = useState(1);
    
    useEffect( () => {
        let init = '/characters?page=' + page.toString();
        Api.get(init).then(res => setChar(res.data.data))
        
    }, [page])

    function pageNext () {
        if(page >= 1){
            setPage(page+1);
        }
        else{
            return;
        }
    }
    
    function pagePrev () {
        if(page > 2) {
            setPage(page - 1);
        }
        else{
            return;
        }
    }

    return (
    <section className='char-list'>
        <h1>Characters Disney API</h1>
        <div className='btn-box'>
            <button onClick={pagePrev}>Previous</button>
            <button onClick={pageNext}>Next</button>
        </div>
        <ul>
            { char.map(e => <CharItem key={e._id} char={e} />)  }
        </ul>
    </section>

    )
}
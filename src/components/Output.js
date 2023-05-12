import useJsonFetch from '../hooks/useJsonFetch'

export default function Output({url, id}) {
    const [data, error, loading] = useJsonFetch(url)    
    return (
        <div className='output'>
        {id === 1? data: null}
        {id === 2? error: null}
        {id === 3? loading? 'загрузка...': data : null }      
        </div>
        )
    }    
    

export const GifItem = ({ title, url, id }) => {
    
    return (
        <>
            <li key = { id } className="card">
                <img src={ url } title={ title } />
                <p>{title}</p>
            </li>
        </>
    )
  }
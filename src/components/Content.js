function Content({content, error}) {
    return (
        <div>
            {error ? <p>Error, can't load</p> : <p>{content[0]}</p>}            
        </div>
    )
    

};

export default Content;
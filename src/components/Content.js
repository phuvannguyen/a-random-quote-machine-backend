function Content({content, error}) {
    return (
        <div>
            {error === null ? 
            <div>
                <h2>Life isn’t about getting and having, it’s about giving and being</h2>
                <p>Kevin Kruse</p>
            </div> : 
            <div>
                <h2>{content[0].quote}</h2>
                <p>{content[0].author}</p>
            </div>
            }         
        </div>
    )
    

};

export default Content;
function Content({content, error}) {
    return (
        <div>
            {error === null ? 
            <div id="text">
                <h2>Life isn’t about getting and having, it’s about giving and being</h2>
                <p  id="author">Kevin Kruse</p>
            </div> : 
            <div id="text">
                <h2>{content[0].quote}</h2>
                <p  id="author">{content[0].author}</p>
            </div>
            }         
        </div>
    )
    

};

export default Content;
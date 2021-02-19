
function Social({change}) {
    function onChange() {
        change();

    }
    
    return <button onClick={onChange}>New quote</button>
}
export default Social;
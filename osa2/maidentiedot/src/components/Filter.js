const Filter = (props) => {
    return (
        <div>
        Search for countries:
        <input 
            value={props.newFilt}
            onChange={props.handleFiltChange} />
        </div>
    )
}

export default Filter
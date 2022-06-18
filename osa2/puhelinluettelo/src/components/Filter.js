

const Filter = (props) => {
    return (
        <div>
        Filter shown with: 
        <input 
            value={props.newFilt}
            onChange={props.handleFiltChange} />
        </div>
    )
}

export default Filter
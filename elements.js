
const TextInput = (props) => {
    let color = "lightgray";
    let error = null;

    if (props.error != null) {
        color = "red";
        error = <span>{props.error}</span>

    }
    return (
        <div>
            <input className="number"
            type="text"
            value={props.value}
            onChange={props.onChange}
            style={{ borderColor: color }}
            />
            <br></br>
            {error}
        </div>
    )
}


export default TextInput
export default function BtnDelete(props) {
    return (
        <button
            title={props.title}
            className="btn btn-danger btn-sm"
            onClick={ props.onClick }
        >
            <i className="fas fa-trash"></i>
        </button>
    )
}
export default function BtnEdit(props) {
    return (
        <button
            title={ props.title }
            className="btn btn-sm btn-primary mr-1"
            onClick={ props.onClick }>
            <i className="fas fa-edit"></i>
        </button>
    )
}
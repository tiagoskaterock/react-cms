export default function BtnView(props) {
    return (
        <button
            title={ props.title }
            className="btn btn-info btn-sm mr-1"
            onClick={ props.onClick }>
            <i className="fas fa-eye"></i>
        </button>
    )
}
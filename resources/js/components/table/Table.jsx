export default function Table(props) {
    return (
        <table className="table table-striped">
            { props.children }
        </table>
    )
}
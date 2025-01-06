export default function Breadcrumbs(props) {
    return (
        <nav className="col-md-8" aria-label="breadcrumb">
            <ol className="breadcrumb float-right">
                { props.children }
            </ol>
        </nav>
    )
}
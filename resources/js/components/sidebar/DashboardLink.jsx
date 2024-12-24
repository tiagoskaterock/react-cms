function DashboardLink(props) {
    return (
        <li className="nav-item active" title={ props.title }>
            <a className="nav-link" href={ props.href }>
                <i className={ props.icon }></i>
                <span>{ props.title }</span>
            </a>
        </li>
    )
}

export default DashboardLink;

export default function TopBarUserLink(props) {
    return (
        <a className="dropdown-item" href={props.href} title={props.title}>
            <i className={`${props.icon} fa-sm fa-fw mr-2 text-gray-400`}></i>
            {props.title}
        </a>
    );
}

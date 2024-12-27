import { usePage } from "../../contexts/PageContent.js"; // Importe o hook

export default function Breadcrumb(props) {
    const { setCurrentPage } = usePage(); // Obtém a função para alterar o estado global
    return (
        <li
            className="breadcrumb-item active"
            aria-current="page"
            title={ props.title }>
            {props.title}
        </li>
    )
}
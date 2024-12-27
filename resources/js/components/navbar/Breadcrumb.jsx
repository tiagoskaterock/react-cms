import { usePage } from "../../contexts/PageContent.js"; // Importe o hook

export default function Breadcrumb(props) {
    const { setCurrentPage } = usePage(); // Obtém a função para alterar o estado global
    return (
        <li
            className="breadcrumb-item"
            title="Início"
            onClick={() => setCurrentPage(props.page)}
            title={ props.title }>
            <a href="#">
                { props.title }
            </a>
        </li>
    )
}
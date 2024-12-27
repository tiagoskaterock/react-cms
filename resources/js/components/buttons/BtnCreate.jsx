import { usePage } from "../../contexts/PageContent.js"; // Importe o hook

export default function BtnCreate(props) {
    const { setCurrentPage } = usePage(); // Obtém a função para alterar o estado global
    return (
        <button
            className="mb-3 btn btn-primary btn-sm"
            title={ props.title }
            onClick={() => setCurrentPage(props.page)}>
            <i className="fas fa-plus mr-1"></i>
            { props.title }
        </button>
    )
}
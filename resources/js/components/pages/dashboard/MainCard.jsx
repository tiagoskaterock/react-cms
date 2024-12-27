import { usePage } from "../../../contexts/PageContent.js"; // Importe o hook

export default function MainCard(props) {

    const { setCurrentPage } = usePage(); // Obtém a função para alterar o estado global

    return (
        <div className="col-xl-3 col-md-6 mb-4">
            <div className={ '"card border-left-' + props.styleClass + ' shadow h-100 py-2"' }>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={'text-' + props.styleClass + ' text-xs font-weight-bold text-uppercase mb-1'}>
                                <a 
                                    href="#" 
                                    title={ props.title }
                                    onClick={() => setCurrentPage(props.page)}>
                                    { props.title }
                                </a>
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                                { props.value }
                            </div>
                        </div>

                        { props.children }

                        <div className="col-auto">
                            <i className={props.icon + ' fa-2x text-gray-300'}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
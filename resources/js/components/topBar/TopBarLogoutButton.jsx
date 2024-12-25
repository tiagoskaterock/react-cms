/**
 * Modal está cagado
 */
export default function TopBarLogoutButton() {
    return (
        <>
            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#topBarLogoutModal">
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
            </a>

            <div className="modal fade" id="topBarLogoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <a className="btn btn-primary" href="login.html">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

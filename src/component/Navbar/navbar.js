import React from 'react';

function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <a href="#" className="navbar-brand">TATEYAMA</a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                    <a href="#" className="nav-item nav-link active">Exploration Journey</a>
                    <a href="#" className="nav-item nav-link active">Other Business</a>
                    <a href="#" className="nav-item nav-link active">Products</a>
                    <a href="#" className="nav-item nav-link active">Careers</a>
                    <a href="#" className="nav-item nav-link active">Contact Us</a>
                </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;
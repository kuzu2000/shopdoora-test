const NavBar = () => {
    return (
        <nav>
            <div className="nav-bar">
                <span className="nav-header"><i className="fa fa-shopping-bag"></i></span>
                <ul className="nav-items">
                    <li className="nav-item"><i className="fa fa-search"></i></li>
                    <li className="nav-item"><i className="fa fa-shopping-cart"></i></li>
                    <li className="nav-item"><i className="fa fa-bars"></i></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;

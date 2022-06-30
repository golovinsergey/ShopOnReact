function Header() {
    return (
        <div>
            <nav className='blue-grey lighten-1'>
                <div className='nav-wrapper'>
                    <a href='!#' className='brand-logo'>
                        React Shop
                    </a>
                    <ul id='nav-mobile' className='right hide-on-med-and-down'>
                        <li>
                            <a
                                href='https://golovinsergey.github.io/ShopOnReact'
                                rel="'noreferrer"
                                targnet='_blak'
                            >
                                Repo
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export { Header };

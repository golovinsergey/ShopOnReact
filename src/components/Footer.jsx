function Footer() {
    return (
        <footer className='page-footer blue-grey lighten-1'>
            <div className='footer-copyright'>
                <div className='container'>
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        className='grey-text text-lighten-4 right'
                        href='https://golovinsergey.github.io/ShopOnReact'
                        rel="'noreferrer"
                        target='_blank'
                    >
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}
export { Footer };

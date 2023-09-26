export default function Navbar() {
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

    return (
        <nav className="nav">
            <a href="/" className="site-title">Vitja Training</a>
            <ul>
                <CustomLink className="button" href="/Bio" currentPath={currentPath}>BIO</CustomLink>
                <CustomLink className="button" href="/Cenik" currentPath={currentPath}>CENIK</CustomLink>
                <CustomLink className="button" href="/Kontakt" currentPath={currentPath}>KONTAKT</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ href, children, currentPath, ...props }) {
    const isActive = currentPath === href;

    return (
        <li className={isActive ? 'active' : ''}>
            <a href={href} {...props}>{children}</a>
        </li>
    )
}

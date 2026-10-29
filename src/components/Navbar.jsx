=import { NavLink } from 'react-router-dom'

// Recebe a quantidade de canteiros por props.
// Os links permitem navegar entre as páginas e destacam a rota ativa.
function Navbar({ quantidade }) {
  return (
    <header className="navbar">
      <nav className="links-menu" aria-label="Menu principal">
        {/* Link para a página inicial. */}
        <NavLink to="/" end>
          Início
        </NavLink>

        {/* Mostra a quantidade de canteiros cadastrados. */}
        <NavLink to="/canteiros">
          Canteiros ({quantidade})
        </NavLink>

        {/* Abre o formulário de cadastro. */}
        <NavLink to="/canteiros/novo">
          + Novo canteiro
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
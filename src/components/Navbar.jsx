
import { NavLink } from 'react-router-dom'

// Mostra o nome do sistema e os links do menu.
function Navbar({ quantidade }) {
  return (
    <header className="navbar">
      <div className="nome-sistema">
        Horta comunitária — Eliezer
      </div>

      <nav className="links-menu" aria-label="Menu principal">
        {/* Link para a página inicial. */}
        <NavLink to="/" end>
          Início
        </NavLink>

        {/* Mostra a quantidade de canteiros. */}
        <NavLink to="/canteiros">
          Canteiros ({quantidade})
        </NavLink>

        {/* Link para cadastrar um canteiro. */}
        <NavLink to="/canteiros/novo">
          + Novo canteiro
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar

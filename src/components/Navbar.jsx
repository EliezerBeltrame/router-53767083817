
import { NavLink } from 'react-router-dom'

function Navbar({ quantidade }) {
  return (
    <header className="navbar">
      <div className="nome-sistema">
        Horta comunitária — Eliezer
      </div>

      <nav className="links-menu" aria-label="Menu principal">
        <NavLink to="/" end>
          Início
        </NavLink>

        <NavLink to="/canteiros">
          Canteiros ({quantidade})
        </NavLink>

        <NavLink to="/canteiros/novo">
          + Novo canteiro
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar

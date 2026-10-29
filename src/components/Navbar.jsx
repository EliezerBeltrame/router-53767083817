
import { NavLink } from 'react-router-dom'

// A Navbar recebe a quantidade de canteiros do App por props.
// Os NavLinks permitem navegar entre as páginas e destacam a rota ativa.
function Navbar({ quantidade }) {
  return (
    <header className="navbar">
      <div className="nome-sistema">
        Horta comunitária
        <span> — Eliezer</span>
      </div>

      <nav className="links-menu" aria-label="Menu principal">
        {/* Link para a página inicial. */}
        <NavLink to="/" end>
          Início
        </NavLink>

        {/* Mostra a quantidade atual de canteiros cadastrados. */}
        <NavLink to="/canteiros">
          Canteiros ({quantidade})
        </NavLink>

        {/* Abre o formulário para cadastrar um novo canteiro. */}
        <NavLink to="/canteiros/novo">
          + Novo canteiro
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar

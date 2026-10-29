
import { useState, useEffect } from 'react'
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Link,
} from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'

// Página inicial: recebe a lista e a quantidade de canteiros.
function Inicio({ registros, quantidade }) {
  // Soma a área de todos os canteiros.
  const areaTotal = registros.reduce(
    (total, registro) => total + registro.area,
    0,
  )

  // Conta quantas culturas diferentes existem.
  const culturasDiferentes = new Set(
    registros.map((registro) => registro.cultura.toLowerCase()),
  ).size

  return (
    <main className="container">
      <section className="boas-vindas">
        <span className="etiqueta">PAINEL DE CONTROLE</span>
        <h1>Bem-vindo à sua horta!</h1>
        <p>
          Organize seus canteiros, acompanhe as culturas e mantenha
          tudo em um só lugar.
        </p>

        <Link className="botao botao-principal" to="/canteiros/novo">
          + Cadastrar canteiro
        </Link>
      </section>

      <section className="resumos">
        <article className="cartao-resumo">
          <span className="icone-resumo">▦</span>
          <p>Total de canteiros</p>
          <strong>{quantidade}</strong>
          <span className="texto-auxiliar">Canteiros cadastrados</span>
        </article>

        <article className="cartao-resumo">
          <span className="icone-resumo">⌂</span>
          <p>Área total</p>
          <strong>{areaTotal} m²</strong>
          <span className="texto-auxiliar">Área registrada na horta</span>
        </article>

        <article className="cartao-resumo">
          <span className="icone-resumo">✿</span>
          <p>Culturas diferentes</p>
          <strong>{culturasDiferentes}</strong>
          <span className="texto-auxiliar">Tipos de cultura registrados</span>
        </article>
      </section>

      <section className="cartao-conteudo">
        <div className="titulo-secao">
          <div>
            <h2>Sobre o sistema</h2>
            <p>Uma maneira simples de cuidar da sua horta comunitária.</p>
          </div>
          <span className="status">Sistema ativo</span>
        </div>

        <p className="descricao">
          Use o menu para consultar os canteiros cadastrados ou adicionar
          uma nova cultura, informando a área, a estação e o responsável.
        </p>

        <Link className="link-destaque" to="/canteiros">
          Visualizar todos os canteiros →
        </Link>
      </section>
    </main>
  )
}

// Página de cadastro: recebe a função que salva o canteiro.
function Cadastro({ adicionarRegistro }) {
  // Guarda o que foi digitado em cada campo.
  const [cultura, setCultura] = useState('')
  const [area, setArea] = useState('')
  const [estacao, setEstacao] = useState('Ano todo')
  const [responsavel, setResponsavel] = useState('')
  const navegar = useNavigate()

  // Faz o cadastro quando o botão é clicado.
  function salvarRegistro(event) {
    event.preventDefault()

    const culturaLimpa = cultura.trim()
    const responsavelLimpo = responsavel.trim()
    const areaNumerica = Number(area)

    // Verifica se os campos estão preenchidos corretamente.
    if (
      !culturaLimpa ||
      !area ||
      !Number.isFinite(areaNumerica) ||
      areaNumerica <= 0 ||
      !estacao ||
      !responsavelLimpo
    ) {
      return
    }

    // Junta as informações do novo canteiro.
    const novoCanteiro = {
      id: Date.now(),
      cultura: culturaLimpa,
      area: areaNumerica,
      estacao,
      responsavel: responsavelLimpo,
    }

    // Envia o novo canteiro para o App salvar.
    adicionarRegistro(novoCanteiro)

    // Vai para a lista depois de salvar.
    navegar('/canteiros', {
      state: {
        mensagem: 'Canteiro cadastrado com sucesso!',
      },
    })
  }

  return (
    <main className="container pagina-interna">
      <div className="cabecalho-pagina">
        <span className="etiqueta">GERENCIAMENTO</span>
        <h1>Novo canteiro</h1>
        <p>Preencha as informações abaixo para cadastrar uma cultura.</p>
      </div>

      <section className="cartao-formulario">
        <form onSubmit={salvarRegistro}>
          <div className="campo">
            <label htmlFor="cultura">Cultura</label>
            <input
              id="cultura"
              name="cultura"
              type="text"
              placeholder="Ex.: Alface"
              value={cultura}
              onChange={(event) => setCultura(event.target.value)}
              maxLength={30}
              required
            />
            <span className="contador">
              {cultura.length}/30 caracteres
            </span>
          </div>

          <div className="campo">
            <label htmlFor="area">Área (m²)</label>
            <input
              id="area"
              name="area"
              type="number"
              placeholder="Ex.: 5"
              value={area}
              onChange={(event) => setArea(event.target.value)}
              min="0.1"
              step="0.1"
              required
            />
          </div>

          <div className="campo">
            <label htmlFor="estacao">Estação de cultivo</label>
            <select
              id="estacao"
              name="estacao"
              value={estacao}
              onChange={(event) => setEstacao(event.target.value)}
              required
            >
              <option value="Verão">Verão</option>
              <option value="Inverno">Inverno</option>
              <option value="Ano todo">Ano todo</option>
            </select>
          </div>

          <div className="campo">
            <label htmlFor="responsavel">Responsável</label>
            <input
              id="responsavel"
              name="responsavel"
              type="text"
              placeholder="Nome do responsável"
              value={responsavel}
              onChange={(event) => setResponsavel(event.target.value)}
              required
            />
          </div>

          <div className="acoes-formulario">
            <Link className="botao botao-secundario" to="/canteiros">
              Cancelar
            </Link>

            <button className="botao botao-principal" type="submit">
              Salvar canteiro
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}

// Página da lista: recebe o título e os canteiros.
function Canteiros({ title, registros }) {
  // Pega a mensagem mostrada depois do cadastro.
  const localizacao = useLocation()
  const mensagem = localizacao.state?.mensagem

  return (
    <main className="container pagina-interna">
      {mensagem && (
        <p role="status" className="mensagem-sucesso">
          {mensagem}
        </p>
      )}

      <div className="cabecalho-pagina cabecalho-lista">
        <div>
          <span className="etiqueta">GERENCIAMENTO</span>
          <h1>Meus canteiros</h1>
          <p>Consulte as culturas cadastradas na horta comunitária.</p>
        </div>

        <Link className="botao botao-principal" to="/canteiros/novo">
          + Novo canteiro
        </Link>
      </div>

      <section className="cartao-tabela">
        <div className="barra-tabela">
          <div>
            <h2>{title}</h2>
            <p>{registros.length} registro(s) encontrado(s)</p>
          </div>
        </div>

        {/* Mostra uma mensagem se a lista estiver vazia. */}
        {registros.length === 0 ? (
          <div className="estado-vazio">
            <span>▦</span>
            <h2>Nenhum canteiro cadastrado</h2>
            <p>Comece adicionando o primeiro canteiro da sua horta.</p>

            <Link className="botao botao-principal" to="/canteiros/novo">
              Cadastrar primeiro canteiro
            </Link>
          </div>
        ) : (
          <div className="tabela-responsiva">
            <table>
              <thead>
                <tr>
                  <th>Cultura</th>
                  <th>Área (m²)</th>
                  <th>Estação</th>
                  <th>Responsável</th>
                </tr>
              </thead>

              <tbody>
                {/* Passa por todos os canteiros e mostra cada um. */}
                {registros.map((registro) => (
                  <tr key={registro.id}>
                    <td className="nome-cultura">{registro.cultura}</td>
                    <td>{registro.area} m²</td>
                    <td>
                      <span className="etiqueta-estacao">
                        {registro.estacao}
                      </span>
                    </td>
                    <td>{registro.responsavel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  )
}

// Página de erro: mostra o endereço que não foi encontrado.
function NaoEncontrado() {
  const localizacao = useLocation()

  return (
    <main className="container pagina-interna">
      <section className="erro-pagina">
        <span className="numero-erro">404</span>
        <h1>Página não encontrada</h1>
        <p>
          Não encontramos o endereço{' '}
          <strong>{localizacao.pathname}</strong>.
        </p>

        <Link className="botao botao-principal" to="/">
          Voltar ao início
        </Link>
      </section>
    </main>
  )
}

// App: guarda os canteiros e organiza as páginas.
function App() {
  // Busca os canteiros salvos no navegador.
  const [canteiros, setCanteiros] = useState(() => {
    const dadosSalvos = localStorage.getItem('canteiros')

    if (dadosSalvos) {
      try {
        return JSON.parse(dadosSalvos)
      } catch {
        localStorage.removeItem('canteiros')
      }
    }

    // Cria três canteiros de exemplo, incluindo o RA.
    return [
      {
        id: 1,
        cultura: 'Alface',
        area: 5,
        estacao: 'Ano todo',
        responsavel: 'Maria',
      },
      {
        id: 2,
        cultura: 'Tomate',
        area: 8,
        estacao: 'Verão',
        responsavel: 'João',
      },
      {
        id: 3,
        cultura: 'Cenoura',
        area: 4,
        estacao: 'Inverno',
        responsavel: 'RA 53767083817',
      },
    ]
  })

  // Guarda a lista no navegador sempre que ela muda.
  useEffect(() => {
    localStorage.setItem('canteiros', JSON.stringify(canteiros))
  }, [canteiros])

  // Adiciona o novo canteiro sem apagar os anteriores.
  function adicionarRegistro(novoCanteiro) {
    setCanteiros((listaAtual) => [...listaAtual, novoCanteiro])
  }

  // Conta quantos canteiros estão cadastrados.
  const quantidade = canteiros.length

  return (
    <div className="aplicacao">
      <Navbar quantidade={quantidade} />

      {/* Define qual página aparece em cada endereço. */}
      <Routes>
        <Route
          path="/"
          element={
            <Inicio
              registros={canteiros}
              quantidade={quantidade}
            />
          }
        />

        <Route
          path="/canteiros/novo"
          element={
            <Cadastro adicionarRegistro={adicionarRegistro} />
          }
        />

        <Route
          path="/canteiros"
          element={
            <Canteiros
              title="Lista de canteiros"
              registros={canteiros}
            />
          }
        />

        <Route path="*" element={<NaoEncontrado />} />
      </Routes>

      {/* Aparece no final de todas as páginas. */}
      <footer className="rodape">
        <span>Horta comunitária</span>
        <span>Eliezer Santos Beltrame — RA 53767083817</span>
      </footer>
    </div>
  )
}

export default App

import './App.css'

function App() {

  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((Response) => {
      return Response.json()
    })
    .then((json) => {
      console.log(json)
    })
    .catch((error) => {
      console.log(error, "error search");
    })

  const mostrarPokemon = (e) => {
    alert('¡Aqui tienes tu pokemon!');
    e.preventDefault()
  };

  const mostrarSiguiente = () => {
    alert("Has dado click a siguente")
  }

  const mostrarPrevio = () => {
    alert("Has dado click a siguente")
  }

  return (
    <>
      <div className='container pt-5'>

        <h1 className='mb-4 text-light text-center'>
          Listado de Pokemón
        </h1>

        <form onSubmit={mostrarPokemon}>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">🔍</span>
            <input type="text" className="form-control" placeholder="Busca tu Pokemón" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
        </form>

        <h2 className='pt-4 mb-5 text-light'>
          Resultados
        </h2>

        <div className="row">
          <div className="col">
            <div className="card tamañocarta forma border border-3 bg-primary">
              <div className="card-body text-center">
                <img src='https://www.latercera.com/resizer/j-ZtEKzoY5fUQtLLGOVNBOpG7Aw=/arc-anglerfish-arc2-prod-copesa/public/6O3E6FX56FCYFGW5NZFOKYGNY4.jpg' className='img border border-dark'></img>
                <h5 className="card-title text-center mt-3 mb-2">#1</h5>
                <h5 className="card-title text-center mt-3 mb-2">Nombre</h5>
              </div>
            </div>

            <div className="mt-4  card tamañocarta forma border border-3 bg-danger">
              <div className="card-body text-center">
                <img src='https://www.latercera.com/resizer/j-ZtEKzoY5fUQtLLGOVNBOpG7Aw=/arc-anglerfish-arc2-prod-copesa/public/6O3E6FX56FCYFGW5NZFOKYGNY4.jpg' className='img border border-dark'></img>
                <h5 className="card-title text-center mt-3 mb-2">#2</h5>
                <h5 className="card-title text-center mt-3 mb-2">Nombre</h5>
              </div>
            </div>
          </div>

          <div className="col">
            <div className='mb-5'>
              <div className="card tamañocarta forma border border-3 bg-warning">
                <div className="card-body text-center">
                  <img src='https://www.latercera.com/resizer/j-ZtEKzoY5fUQtLLGOVNBOpG7Aw=/arc-anglerfish-arc2-prod-copesa/public/6O3E6FX56FCYFGW5NZFOKYGNY4.jpg' className='img border border-dark'></img>
                  <h5 className="card-title text-center mt-3 mb-2">#3</h5>
                  <h5 className="card-title text-center mt-3 mb-2">Nombre</h5>
                </div>
              </div>

              <div className="mt-4 card tamañocarta forma border border-3 bg-success">
                <div className="card-body text-center">
                  <img src='https://www.latercera.com/resizer/j-ZtEKzoY5fUQtLLGOVNBOpG7Aw=/arc-anglerfish-arc2-prod-copesa/public/6O3E6FX56FCYFGW5NZFOKYGNY4.jpg' className='img border border-dark'></img>
                  <h5 className="card-title text-center mt-3 mb-2">#4</h5>
                  <h5 className="card-title text-center mt-3 mb-2">Nombre</h5>
                </div>
              </div>
            </div>

          </div>
          <div className="col">
            <div className="card formabusqueda border border-3 bg-info mb-5">
              <div className="card-body">
                <div className='text-center'>
                  <img src='https://www.latercera.com/resizer/j-ZtEKzoY5fUQtLLGOVNBOpG7Aw=/arc-anglerfish-arc2-prod-copesa/public/6O3E6FX56FCYFGW5NZFOKYGNY4.jpg' className='mt-3 mb-2 imgbusqueda border border-dark'></img>
                </div>
                <h5 className="card-title text-center mt-3 mb-2">#5</h5>
                <h5 className="card-title text-center mt-3 mb-2">Nombre</h5>
                <div className='font-weight-bold'>
                  <p className="card-title mb-3">Tipo : </p>
                  <p className="card-title mb-3">Peso : </p>
                  <p className="card-title mb-3">Sprites : </p>
                  <p className="card-title mb-3">Movimientos : </p>
                </div>

              </div>
            </div>

          </div>
        </div>






        <div className='d-flex justify-content-between mb-5'>
          <button onClick={mostrarSiguiente}type="button" className="btn btn-primary">Atras</button>
          <button onClick={mostrarPrevio}type="button" class="btn btn-primary">Siguiente</button>
        </div>

      </div>
    </>
  )
}

export default App

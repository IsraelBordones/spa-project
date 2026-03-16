//[]
//{}
function App() {
  const [planes, setPLanes ] = useState()
  const [error, setError ] = useState(null)
  const [loading, setLoading ] = useState (true)

  useEffect(()=>{
    fetch("http://localhost:8080/api/planes")
    .then(response=>{
      if(!response.ok) throw new Error ("Error al obtener planes")
      return response.json
    })
    .then(data =>{
      setPLanes(data)
      setLoading(false)
    })
    .catch(err=>{
      setError(err.message)
      setLoading(false)
    })

  },[])
  return (
    <div>
      <h1>SPA Relax</h1>
      {loading && <p>Cargando planes...</p>}
      {error &&  <p>Error: {error}</p>}

      <ul>
        {planes.map(plan=>(
          <li key={plan.id}>
            <h3>{plan.nombre}</h3>
            <p>{plan.descripcion}</p>
            <strong>${plan.precio}</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

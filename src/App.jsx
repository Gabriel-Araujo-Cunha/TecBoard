import './App.css'

// no react, componentes são FUNÇÕES

//props é um OBJETO
//props.children = conteúdo que fica entre a abertura e o fechamento da tag do componente
function TituloFormulario (props) {
  return (
    <h2>
      {props.children}
    </h2>
  )
}

//desestruturação de props
function CampoDeFormulario ({children}) {
  return (
    <fieldset>
      {children}
    </fieldset>
  )
}

// poderia usar = function Label ({props}) Ex: props.htmlFor
function Label ({children, htmlFor}) {
  return(
    <label htmlFor={htmlFor}>
      {children}
    </label>
  )
}

function CampoDeEntrada (props) {
  return <input {...props} />
}

function FormularioDeEvento () {
  return(
    <form className='form-evento'>
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>
      <CampoDeFormulario>
        <Label htmlFor='nome'>
          Qual o nome do evento?
        </Label>
        <CampoDeEntrada 
          type='text'
          id='nome'
          placeholder='Summer dev hits'
        />
      </CampoDeFormulario>
    </form>
  )
}

function App() {
  return (
  <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <section>
        <img src="/banner.png" alt="" />
      </section>
      <FormularioDeEvento />
  </main>
  )
}

export default App

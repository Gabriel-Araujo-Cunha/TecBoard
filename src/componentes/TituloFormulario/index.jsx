import './titulo-formulario.estilos.css'
//props é um OBJETO
//props.children = conteúdo que fica entre a abertura e o fechamento da tag do componente
export function TituloFormulario (props) {
  return (
    <h2 className='titulo-form'>
      {props.children}
    </h2>
  )
}
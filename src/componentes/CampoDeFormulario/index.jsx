import './campo-de-formulario.estulos.css'

//desestruturação de props
export function CampoDeFormulario ({children}) {
  return (
    <fieldset className='campo-form'>
      {children}
    </fieldset>
  )
}
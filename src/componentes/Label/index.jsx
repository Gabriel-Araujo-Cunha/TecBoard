
import './label.estilos.css'
// poderia usar = function Label ({props}) Ex: props.htmlFor
export function Label ({children, htmlFor}) {
  return(
    <label htmlFor={htmlFor} className='label'>
      {children}
    </label>
  )
}
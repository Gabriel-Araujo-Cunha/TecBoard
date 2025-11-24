// poderia usar = function Label ({props}) Ex: props.htmlFor
export function Label ({children, htmlFor}) {
  return(
    <label htmlFor={htmlFor}>
      {children}
    </label>
  )
}
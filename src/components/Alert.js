import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
const lower = word.toLowerCase(0);
return lower.charAt(0).toUpperCase() + lower.slice(1); //all characters except the first one will become smaller
    }
  return (
    
      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            
</div>
  
  )
}

export default Alert

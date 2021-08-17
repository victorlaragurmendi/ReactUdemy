En Component hay una validacion para que lleguen los props adecuados 
tanto en tipo y urgencia 

```
import React from 'react'
import propTypes from 'prop-types'

const Component = ({saludo})=>{
    return(
        <div>
            <h1>{saludo}</h1>
            <h2>uso de PropTypes</h2>
        </div>
    )
}

Component.propTypes={
    saludo: propTypes.string.isRequired
}

export default Component
```
los datos deben ser enviados por el padre en caso el prop sea requerido

```
function App() {
  return (
    <div>
      <Component saludo="hola como estas"/>
    </div>
  );
}
```

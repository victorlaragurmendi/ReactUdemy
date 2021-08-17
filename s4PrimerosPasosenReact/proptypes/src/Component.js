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
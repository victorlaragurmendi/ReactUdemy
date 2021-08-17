las props se mandan de mayor componente a menor componente

las variables que envia en componente padre se pueden usar en donde se implementa el componente

ahora se usa la destructuracion de objetos en el ejemplo esta asi {nombre}

const AppComponent = ({nombre}) => {
    return (
        
        <pre>
            <div>
            <h>el nombre es {nombre}</h>
            <h3>Texto 2</h3>
        </div>
        </pre>
        )
}
ReactDOM.render(<AppComponent nombre="Victor Lara" />, document.getElementById('root'))


puedes usar props por defecto cuando el componente no envia nada

const AppComponent = ({nombre="nombre por defecto"}) => {
    return (
        <pre>
        <div>
            <h>el nombre es {nombre}</h>
            <h3>Texto 2</h3>
        </div>
        </pre>
        )
}
ReactDOM.render(<AppComponent/>, document.getElementById('root'))


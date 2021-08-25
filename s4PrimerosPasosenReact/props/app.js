


const AppComponent = ({nombre}) => {
    return (
        <div>
            <h1>el nombre es {nombre}</h1>
            <h3>Texto 2</h3>
        </div>
        )
}



ReactDOM.render(<AppComponent nombre="Victor Lara"  />, document.getElementById('root'))


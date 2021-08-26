las funciones tambien se pueden pasar como props se envian como prop desde el padre

 ///funcion que se declara en el componente padre

const functionSuma=(e)=>{
    const nombre="Maffer"
    console.log("funcion pasada como prop " +nombre)
    
}

ReactDOM.render(<AppComponent fu={functionSuma}/>, document.getElementById('root'))

///funcion donde se recibe la funcion como prop

const AppComponent = ({fu}) => {
    return (
        <div>
            <h1>el nombre es </h1>
            <button  onClick={fu}>Push</button>
        </div>
        )
}
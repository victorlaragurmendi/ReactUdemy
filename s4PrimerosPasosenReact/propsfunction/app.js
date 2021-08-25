
const AppComponent = ({fu}) => {
    return (
        <div>
            <h1>el nombre es </h1>
            <button  onClick={fu}>Push</button>
        </div>
        )
}


const functionSuma=(e)=>{
    const nombre="Maffer"
    console.log("funcion pasada como prop " +nombre)
    
}

ReactDOM.render(<AppComponent fu={functionSuma}/>, document.getElementById('root'))
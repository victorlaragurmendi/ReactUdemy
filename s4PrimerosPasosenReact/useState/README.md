
cuando queremos usar hooks desde un CDN usamos 

const en lugar de import

```
const useState = React.useState;

const AppComponent = ({fu}) => {

    const [toogle,setToogle]=useState(true)
    const [nombre,setNombre] =useState('Charls')

    const cambiarNombre=()=>{

        if(!toogle) setToogle(true) 
        else setToogle(false) 

        if(toogle) setNombre('Juana')
        else setNombre('Charls')
       
    }

    return (
        <div>
            <h1>el nombre es </h1>
            <h2>{nombre}</h2>
            <button  onClick={cambiarNombre}>Push</button>
        </div>
        )
}

ReactDOM.render(<AppComponent />, document.getElementById('root'))

```
ahora lo del TEMA los hooks

```
definen un estado en el componente

const [nombre,setNombre]=useState(valorInicial)


nombre = variable de estado
setNombre = funcion para cambiar la variable de estado

useState(valorInicial) = el valor inicial por defecto que toma 'nombre'
```
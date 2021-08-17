el Fragment se usa para evitar que el div que junta los componentes sea renderizado en el doom 
puede ser que ocupe un margen y un estilo no se vea bien

en vez del div principal de app.js usamos fragment

return (
        <Fragment>
            <h1>TEXTO 1</h1>
            <h3>Texto 2</h3>
        </Fragment>
        )

asi

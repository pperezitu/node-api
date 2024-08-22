let express = require('express') // llamamos a Express
let app = express();

let port = 8080; //establecemos nuestro puerto

app.get('/', (req, res) => {
    res.json( {mensaje: 'Hola mundo!!'} );
});

app.get('/cervezas', (req, res) => {
    res.json( {mensaje: 'A beber cervezas!!'} );
});

app.post('/', (req, res) => {
    res.json( {mensaje: 'Metodo Post!!'} );
});

app.delete('/cervezas', (req, res) => {
    res.json( {mensaje: 'Metodo Delete!!'} );
});

// Iniciamos el servidor

app.listen(port);
console.log(`API se esta escuchando en el puerto ${port}`);
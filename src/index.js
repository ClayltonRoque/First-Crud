console.log("aaaaaa")

const express = require ('express');

const server = express();

server.use(express.json());

const cursos = ['fullstack master', 'desenvolvimento de games', 'viver de youtube'];

//retorna um curso
server.get('/cursos/:index', (req, res) => {
    const { index } = req.params;

    return res.json(cursos[index]); 
});

//retornar todos os cursos
server.get('/cursos', (req, res) => {
    return res.json(cursos);
});

//criar um novo curso
server.post('/cursos', (req,res) => {
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos);
});

//atualizar um curso

server.put('/cursos/:index' , (req,res) => {
    const { index } = req.params;
    const { name } = req.body;

    cursos [index] = name;
    
    return res.json(cursos);
});

// deletar um curso
server.delete('/cursos/:index', (req, res) =>  {
    const { index }  = req.params;

    cursos.splice(index, 1);
    return res.json({message: "o curso foi deletado"});

})

server.listen(3000);


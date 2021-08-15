const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors());

app.get('/pessoa', (req, res) => {

  res.json([
    {
      nome: 'pedro',
      sobrenome: 'fernandes',
      email: 'pedro@mail.com',
      telefone: '1923123123'
    }
  ])
})

const port = 8080
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))
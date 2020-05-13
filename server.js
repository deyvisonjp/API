const express = require('express');
const app = express();

const data = require("./data.json");

app.use(express.json());

// Exibe todos
app.get("/clients", (req, res) => {
   res.json(data);
});

// Exibe Apenas um cliente pelo param id
app.get("/clients/:id", (req, res) => {
   const { id } = req.params;
   const client = data.find(cli => cli.id == id);

   if(!client) return res.status(204).json();

   res.json(client);
});

// Salvar um novo cliente
app.post("/clients", (req, res) => {
   const { name, email } = req.body;

   //function save

   res.json({ name,  email });
});

// Atualizar
app.put("/clients/:id", (req, res) => {
   const { id } = req.params;
   const client = data.find(cli => cli.id == id);

   if(!client) return res.status(204).json();

   const { name } = req.body;
   client.name = name;
   res.json(client);
});

app.delete("/clients/:id", (req, res) => {
   const { id } = req.params;
   const clientsFilters = data.filter(client => client.id != id);

   res.json(clientsFilters);

});

app.listen(3333, () => {
   console.log('Server is running');
})
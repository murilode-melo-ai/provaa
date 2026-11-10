clienterouter.get('/jogo', async (req, res) => {
const clientes = await clienteservice.getAllclientes();
return res.json(clientes);
});
clienteRouter.post("/", async (req, res) => {
const cliente = await clienteservice.create(req.body);
return res.status(201).json(cliente);
});
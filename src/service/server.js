class clienteservice {
    asyn getALL() {
        const res = await  Pool.query("SELECT*");
    }
}
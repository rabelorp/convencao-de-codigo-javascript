import express from "express";
import userRoutes from "./src/routers/UserRouters";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Define o prefixo "/users" para todas as rotas do usuário
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Serviço rodando em: http://localhost:${port}`);
});

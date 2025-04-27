# Modular Node.js Application

Uma aplicação Node.js modular com arquitetura limpa, usando TypeScript, Express, Prisma e PostgreSQL.

## 🚀 Tecnologias

- Node.js
- TypeScript
- Express
- Prisma (ORM)
- PostgreSQL
- Docker

## 📋 Pré-requisitos

- Node.js (v18 ou superior)
- Docker e Docker Compose
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/modular-node-app.git
cd modular-node-app
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o ambiente:
   - Crie um arquivo `.env` na raiz do projeto
   - Adicione as seguintes variáveis:
   ```
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/app_database"
   PORT=3000
   ```

4. Inicie o banco de dados:
```bash
docker-compose up -d
```

5. Execute as migrations do Prisma:
```bash
npx prisma migrate dev
```

6. Inicie a aplicação:
```bash
npm run dev
```

## 📚 Estrutura do Projeto

```
src/
├── modules/           # Módulos da aplicação
│   ├── user/         # Módulo de usuários
│   │   ├── controller/
│   │   ├── service/
│   │   ├── repository/
│   │   ├── dto/
│   │   ├── routes.ts
│   │   └── index.ts
│   └── task/         # Módulo de tarefas
│       ├── controller/
│       ├── service/
│       ├── repository/
│       ├── dto/
│       ├── routes.ts
│       └── index.ts
├── shared/           # Código compartilhado
│   ├── middlewares/
│   ├── utils/
│   └── types/
├── app.ts           # Configuração do Express
├── routes.ts        # Rotas principais
└── main.ts          # Ponto de entrada
```

## 🛠️ Funcionalidades

### Usuários
- ✅ Criar usuário
- ✅ Listar usuários
- ✅ Buscar usuário por ID
- ✅ Atualizar usuário
- ✅ Deletar usuário

### Tarefas
- ✅ Criar tarefa
- ✅ Listar tarefas
- ✅ Buscar tarefa por ID
- ✅ Buscar tarefas por usuário
- ✅ Atualizar tarefa
- ✅ Marcar tarefa como concluída
- ✅ Deletar tarefa

## 📝 API Endpoints

### Usuários
- `POST /users` - Criar usuário
- `GET /users` - Listar usuários
- `GET /users/:id` - Buscar usuário por ID

### Tarefas
- `POST /tasks` - Criar tarefa
- `GET /tasks` - Listar todas as tarefas
- `GET /tasks/:id` - Buscar tarefa por ID
- `GET /tasks/user/:userId` - Buscar tarefas de um usuário
- `PUT /tasks/:id` - Atualizar tarefa
- `PATCH /tasks/:id/toggle` - Alternar status de conclusão
- `DELETE /tasks/:id` - Deletar tarefa

## 📦 Exemplos de Uso

### Criar Usuário
```bash
curl -X POST http://localhost:3000/users \
-H "Content-Type: application/json" \
-d '{
  "name": "Maria Silva",
  "email": "maria@email.com",
  "password": "123456"
}'
```

### Criar Tarefa
```bash
curl -X POST http://localhost:3000/tasks \
-H "Content-Type: application/json" \
-d '{
  "title": "Estudar Node.js",
  "description": "Aprender sobre APIs REST",
  "userId": "id-do-usuario"
}'
```

## 🧪 Testando a API

Recomendamos usar o Insomnia ou Postman para testar a API. Configure as seguintes requisições:

1. **Criar Usuário**
   - Método: POST
   - URL: http://localhost:3000/users
   - Body (JSON):
   ```json
   {
     "name": "Maria Silva",
     "email": "maria@email.com",
     "password": "123456"
   }
   ```

2. **Criar Tarefa**
   - Método: POST
   - URL: http://localhost:3000/tasks
   - Body (JSON):
   ```json
   {
     "title": "Estudar Node.js",
     "description": "Aprender sobre APIs REST",
     "userId": "id-do-usuario"
   }
   ```

## 🔒 Segurança

- Validação de dados de entrada
- Tratamento centralizado de erros
- Tipagem forte com TypeScript
- Sanitização de inputs
- Proteção contra SQL Injection (via Prisma)

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✨ Próximos Passos

- [ ] Implementar autenticação JWT
- [ ] Adicionar testes unitários
- [ ] Implementar cache com Redis
- [ ] Adicionar documentação Swagger
- [ ] Implementar rate limiting 
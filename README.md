Backend

src/
├── @types/                # Tipagens customizadas
├── __tests__/             # Testes unitários e de integração
├── controllers/           # Controladores das rotas
├── middlewares/           # Middlewares globais e de validação (com Zod)
├── prisma/                # Cliente Prisma
├── routes/                # Arquivos de rotas organizados
├── services/              # Lógica de negócio
└── index.ts               # Arquivo principal





## 🛠️ Tecnologias Utilizadas

- **Node.js** + **Express**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**
- **Zod** – Validação de dados
- **JWT** – Autenticação segura
- **Jest** – Testes unitários e de integração
- **Docker Compose** – Banco de dados PostgreSQL com facilidade

---

## 🚀 Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/vtrtga/zeine-test
cd backend
```

### 2. Instale as dependências
```
npm install
```

### 3. Criar arquivo .env

```bash
DATABASE_URL=postgresql://user:password@localhost:5432/marketplace
JWT_SECRET=sua_chave_secreta
```
### 4. Rode as migrações com Prisma
```bash
npx prisma migrate dev
```

### 5. Suba o banco de dados (opcional com Docker)
```bash
docker-compose up -d
```

### 6. Inicie o servidor
```bash
npm run dev
```

| Método | Rota            | Descrição                |
| ------ | --------------- | ------------------------ |
| POST   | `/auth/login`   | Login de usuário         |
| POST   | `/users`        | Registro de novo usuário |
| GET    | `/products`     | Lista todos os produtos  |
| POST   | `/products`     | Criação de novo produto  |
| DELETE | `/products/:id` | Exclusão de produto      |


### Rodar testes
```
npm run test
```

🐳 Docker

O projeto vem com um docker-compose.yaml para facilitar o setup do PostgreSQL local.




# 📦 Frontend - Painel do Vendedor

Este é o frontend de um sistema de gerenciamento de produtos voltado para vendedores, utilizando **Next.js**, **Tailwind CSS** e **TypeScript**. Ele se comunica com uma API backend para realizar login, cadastro de usuários e CRUD de produtos.

---

## ✨ Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [Zod](https://zod.dev/) (validações no backend)
- [Jest](https://jestjs.io/) + [Testing Library](https://testing-library.com/) (testes unitários)

---

## 🧩 Estrutura de Pastas

```bash
.
├── __tests__               # Testes unitários com Testing Library
│   └── unit                # Testes de componentes
├── public                  # Imagens e arquivos estáticos
├── src
│   ├── api                 # Serviços de API (axios)
│   ├── app                 # App Router (Next.js 13+)
│   │   └── routes          # Proteção de rotas e constantes de rota
│   ├── components          # Componentes reutilizáveis (Input, Button, etc)
│   ├── context             # Contexto de autenticação
│   ├── hooks               # Custom hooks (useAuth, useTexts)
│   └── types.ts            # Tipagens globais
├── styles                  # Estilizações CSS (Tailwind, loaders, headers)
├── jest.config.ts          # Configuração de testes
└── tailwind.config.ts      # Configuração do Tailwind
```

---

## 🚀 Executando Localmente

### Pré-requisitos
- Node.js >= 18
- Instale as dependências com:
```bash
npm install
```

### Ambiente
Crie um arquivo `.env.local` com as variáveis:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_UPLOAD_URL=https://api.imgbb.com/1/upload
NEXT_PUBLIC_IMGBB_API_KEY=your_imgbb_key
```

> As variáveis `NEXT_PUBLIC_` ficam acessíveis no navegador (não inclua segredos sensíveis).

### Rodando a aplicação
```bash
npm run dev
```

---

## 🧪 Rodando Testes

```bash
npm run test
```

Os testes estão em `__tests__/unit/` e cobrem os principais componentes e formulários.

---

## 🔐 Deploy na Vercel

1. Faça login em [https://vercel.com](https://vercel.com)
2. Clique em **"New Project"**
3. Conecte ao seu repositório do GitHub
4. Defina as variáveis de ambiente na aba "Environment Variables":
   - `NEXT_PUBLIC_API_URL`
   - `NEXT_PUBLIC_UPLOAD_URL`
   - `NEXT_PUBLIC_IMGBB_API_KEY`
5. Clique em **"Deploy"**

---

## 📁 Funcionalidades

- Login e autenticação por token
- Proteção de rotas privadas com `RouteGuard`
- Cadastro de novos usuários
- Cadastro, edição e exclusão de produtos
- Filtro por nome/descrição e status de produtos
- Upload de imagem com pré-visualização
- Feedback visual de carregamento e erro


## 🧠 Autor

**Vitor Yuri Valim**  
📍 Tangará da Serra - MT  
💼 [LinkedIn](https://www.linkedin.com/in/vitor-yuri-valim-125496ba/)

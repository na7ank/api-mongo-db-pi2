# PI-2 Backend V1

Este é o backend do projeto PI-2, desenvolvido utilizando Node.js, Express e MongoDB. O objetivo deste backend é fornecer acesso a um banco de dados que ainda será modelado, permitindo a manipulação de dados através de uma API REST.

## Estrutura
```markdown
api-mongo-db-pi2/
├── config/
│   └── db.js       # Configuração do banco de dados
├── controllers/
│   ├── adminController.js        # Lógica dos endpoints de admins
│   ├── clientController.js       # Lógica dos endpoints de clientes
│   ├── petController.js          # Lógica dos endpoints de pets
│   ├── appointmentController.js  # Lógica dos endpoints de consultas
│   └── timeSlotController.js     # Lógica dos endpoints de horários
├── models/
│   ├── Admin.js           # Modelo de admins
│   ├── Client.js          # Modelo de cliente
│   ├── Pet.js             # Modelo de pet
│   ├── Appointment.js     # Modelo de consulta
│   └── TimeSlot.js        # Modelo de horário
├── routes/
│   ├── adminRoutes.js        # Rotas de Admins
│   ├── clientRoutes.js       # Rotas de clientes
│   ├── petRoutes.js          # Rotas de pets
│   ├── appointmentRoutes.js  # Rotas de consultas
│   └── timeSlotRoutes.js     # Rotas de horários
├── app.js                    # Arquivo principal da aplicação
├── package.json
└── .env                      # Variáveis de ambiente (Apenas exemplo)
```

## Modelagem Inicial - Banco de Dados
![exemplo](/imgs/model-1.PNG)
```markdown
Table clients {
  id integer [primary key]
  name varchar
  email varchar
  phone integer
}

Table pets {
  id integer [primary key]
  client_id integer
  name varchar
  species varchar
  breed varchar
  age integer
}

Table appointments {
  id integer [primary key]
  client_id integer
  pet_id integer
  reason enum
  appointment_date date
  appointment_time time
  status enum
  notes varchar
}

Table time_slots {
  slot_date date
  slot_time time
  is_avaiable bool
  appointment_id integer
}

Table adms {
  id integer [ primary key ]
  username varchar
  password varchar
  password_hash varchar
}

Ref: clients.id < pets.client_id
Ref: appointments.client_id <> clients.id
Ref: appointments.pet_id <> pets.id
Ref: time_slots.appointment_id - appointments.id
```

## Endpoints
Claro! Aqui está um resumo dos endpoints da API para sua aplicação. Esse resumo pode ser usado para o seu README para fornecer instruções claras sobre como interagir com a API.

---

## API Endpoints

### 1. **Clientes (`/clients`)**

- **Listar Todos os Clientes**  
  `GET /clients`  
  Retorna uma lista de todos os clientes.

- **Criar Novo Cliente**  
  `POST /clients`  
  Cria um novo cliente.  
  **Corpo do JSON:**
  ```json
  {
    "name": "Nome do Cliente",
    "email": "email@exemplo.com",
    "phone": "+55 11 91234-5555"
  }
  ```

- **Atualizar Cliente Existente**  
  `PUT /clients/:id`  
  Atualiza um cliente existente com o ID fornecido.  
  **Corpo do JSON:**
  ```json
  {
    "name": "Nome Atualizado",
    "email": "novoemail@exemplo.com",
    "phone": "+55 11 91234-5555"
  }
  ```

- **Deletar Cliente**  
  `DELETE /clients/:id`  
  Deleta um cliente existente com o ID fornecido.

### 2. **Pets (`/pets`)**

- **Listar Todos os Pets**  
  `GET /pets`  
  Retorna uma lista de todos os pets.

- **Criar Novo Pet**  
  `POST /pets`  
  Cria um novo pet associado a um cliente.  
  **Corpo do JSON:**
  ```json
  {
    "client_id": "id_do_cliente",
    "name": "Nome do Pet",
    "species": "Espécie",
    "breed": "Raça",
    "age": 3
  }
  ```

- **Atualizar Pet Existente**  
  `PUT /pets/:id`  
  Atualiza um pet existente com o ID fornecido.  
  **Corpo do JSON:**
  ```json
  {
    "name": "Nome Atualizado",
    "species": "Nova Espécie",
    "breed": "Nova Raça",
    "age": 4
  }
  ```

- **Deletar Pet**  
  `DELETE /pets/:id`  
  Deleta um pet existente com o ID fornecido.

### 3. **Admins (`/admins`)**

- **Listar Todos os Admins**  
  `GET /admins`  
  Retorna uma lista de todos os admins.

- **Criar Novo Admin**  
  `POST /admins`  
  Cria um novo admin.  
  **Corpo do JSON:**
  ```json
  {
    "username": "admin_user",
    "password": "senha_segura",
    "password_hash": "hash_da_senha"
  }
  ```

- **Atualizar Admin Existente**  
  `PUT /admins/:id`  
  Atualiza um admin existente com o ID fornecido.  
  **Corpo do JSON:**
  ```json
  {
    "username": "novo_username",
    "password": "nova_senha",
    "password_hash": "novo_hash"
  }
  ```

- **Deletar Admin**  
  `DELETE /admins/:id`  
  Deleta um admin existente com o ID fornecido.

### 4. **Appointments (`/appointments`)**

- **Listar Todos os Agendamentos**  
  `GET /appointments`  
  Retorna uma lista de todos os agendamentos.

- **Criar Novo Agendamento**  
  `POST /appointments`  
  Cria um novo agendamento associado a um cliente e um pet.  
  **Corpo do JSON:**
  ```json
  {
    "client_id": "id_do_cliente",
    "pet_id": "id_do_pet",
    "reason": "Checkup",
    "appointment_date": "2024-09-15",
    "appointment_time": "14:00",
    "status": "Scheduled",
    "notes": "Notas adicionais"
  }
  ```

- **Atualizar Agendamento Existente**  
  `PUT /appointments/:id`  
  Atualiza um agendamento existente com o ID fornecido.  
  **Corpo do JSON:**
  ```json
  {
    "reason": "Vacinação",
    "appointment_date": "2024-09-16",
    "appointment_time": "15:00",
    "status": "Completed",
    "notes": "Notas atualizadas"
  }
  ```

- **Deletar Agendamento**  
  `DELETE /appointments/:id`  
  Deleta um agendamento existente com o ID fornecido.

### 5. **Time Slots (`/time_slots`)**

- **Listar Todos os Slots de Tempo**  
  `GET /time_slots`  
  Retorna uma lista de todos os slots de tempo.

- **Criar Novo Slot de Tempo**  
  `POST /time_slots`  
  Cria um novo slot de tempo associado a um agendamento.  
  **Corpo do JSON:**
  ```json
  {
    "slot_date": "2024-09-15",
    "slot_time": "14:00",
    "is_available": true,
    "appointment_id": "id_do_agendamento"
  }
  ```

- **Atualizar Slot de Tempo Existente**  
  `PUT /time_slots/:id`  
  Atualiza um slot de tempo existente com o ID fornecido.  
  **Corpo do JSON:**
  ```json
  {
    "slot_date": "2024-09-16",
    "slot_time": "15:00",
    "is_available": false,
    "appointment_id": "id_do_agendamento"
  }
  ```

- **Deletar Slot de Tempo**  
  `DELETE /time_slots/:id`  
  Deleta um slot de tempo existente com o ID fornecido.

---

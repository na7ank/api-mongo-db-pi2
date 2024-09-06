# PI-2 Backend

Este é o backend do projeto PI-2, desenvolvido utilizando Node.js, Express e MongoDB. O objetivo deste backend é fornecer acesso a um banco de dados que ainda será modelado, permitindo a manipulação de dados através de uma API REST.

## Dependências

As seguintes dependências são utilizadas neste projeto:

- **Express**: Framework para Node.js utilizado para criar servidores e gerenciar rotas.
- **MongoDB**: Driver oficial do MongoDB para Node.js, utilizado para conectar e interagir com o banco de dados.

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

## Exemplos
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": 123456789
}
```
```json
{
  "client_id": "60d5f4798c1b4c23b8f5cdd1",  // ID do cliente existente
  "pet_id": "60d5f4798c1b4c23b8f5cdd2",    // ID do pet existente
  "reason": "Checkup",
  "appointment_date": "2023-09-15",
  "appointment_time": "10:30",
  "status": "Scheduled",
  "notes": "Routine check-up"
}

```
```json
{
  "client_id": "60d5f4798c1b4c23b8f5cdd1",  // ID do cliente existente
  "name": "Buddy",
  "species": "Dog",
  "breed": "Golden Retriever",
  "age": 3
}
```
```markdown
my-vet-api/
├── config/
│   └── db.js             # Configuração do banco de dados
├── controllers/
│   ├── clientController.js    # Lógica dos endpoints de clientes
│   ├── petController.js       # Lógica dos endpoints de pets
│   ├── appointmentController.js  # Lógica dos endpoints de consultas
│   └── timeSlotController.js   # Lógica dos endpoints de horários
├── models/
│   ├── Client.js          # Modelo de cliente
│   ├── Pet.js             # Modelo de pet
│   ├── Appointment.js     # Modelo de consulta
│   └── TimeSlot.js        # Modelo de horário
├── routes/
│   ├── clientRoutes.js    # Rotas de clientes
│   ├── petRoutes.js       # Rotas de pets
│   ├── appointmentRoutes.js  # Rotas de consultas
│   └── timeSlotRoutes.js   # Rotas de horários
├── app.js                 # Arquivo principal da aplicação
├── package.json
└── .env                   # Variáveis de ambiente
```
# Money Transfer API

This project is a simple RESTful API for handling money transfers between accounts.

## Technologies

- **TypeScript**
- **NestJS**
- **TypeORM**
- **PostgreSQL**

## Installation and Setup

1. Clone the repository:

   ```
   git clone https://github.com/ahmedaymanbfcai/swqly-challenge.git
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a PostgreSQL database named `money_transfer_db`.

4. Update the `src/app.module.ts` with your PostgreSQL credentials.

5. Run the project:
   ```
   npm run start
   ```

## API Endpoints

- **GET /accounts**: Get all accounts.
- **POST /accounts/transfer**: Transfer money between accounts. Requires `fromId`, `toId`, and `amount` in the request body.
- **POST /accounts/seed**: Seed accounts from a JSON file.

## Example Transfer Request

```bash
curl -X POST http://localhost:3000/accounts/transfer \
  -H 'Content-Type: application/json' \
  -d '{"fromId": 1, "toId": 2, "amount": 100}'
```

# Money Transfer API

## Postman Endpoints Screenshots:

# Seed:

![screenshot](https://github.com/AhmedAymanBfcai/swqly-challenge/blob/main/uploads/seed.PNG)

# Transfer:

![screenshot](https://github.com/AhmedAymanBfcai/swqly-challenge/blob/main/uploads/transfer-done.PNG)

# Get all accounts:

![screenshot](https://github.com/AhmedAymanBfcai/swqly-challenge/blob/main/uploads/get-all-accounts.PNG)

# Bad Request

![screenshot](https://github.com/AhmedAymanBfcai/swqly-challenge/blob/main/uploads/bad-request-transfer.PNG)

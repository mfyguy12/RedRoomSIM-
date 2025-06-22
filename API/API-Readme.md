# How to setup database
1. create redroomsimdb data base
2. create table
    ```
    CREATE TABLE user_login_logs (
    id SERIAL PRIMARY KEY,
    uid VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    role VARCHAR(100),
    event VARCHAR(255),
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    ip_address VARCHAR(45)  -- for future
   

# How start API
1. Create and activate a virtual environment:
    ```
    python -m venv venv
    .\venv\Scripts\activate

3. Install dependencies:
   ```
   pip install fastapi uvicorn sqlalchemy psycopg2-binary pydantic python-dotenv

5. Start the API
   ```
   uvicorn main:app --reload

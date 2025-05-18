# 🌍 Country Quiz App

This is a simple Node.js web application that quizzes users on country flags. It uses:

- **Express.js** for server
- **PostgreSQL** for storing flag data
- **pgAdmin** for database GUI management
- **EJS** for rendering HTML views

---

## 🛠️ Prerequisites

Before starting, ensure you have:

- [Node.js](https://nodejs.org/) and npm installed
- [PostgreSQL](https://www.postgresql.org/) installed
- [pgAdmin](https://www.pgadmin.org/) installed (for GUI-based DB creation)

---

## 🗄️ Step-by-Step: Create Database and Table using pgAdmin

### 1. Open pgAdmin and log in

1. Launch **pgAdmin**
2. Connect to your PostgreSQL server (default user is usually `postgres`)

### 2. Create Database `world`

1. In the left panel, right-click on **Databases > Create > Database**
2. Enter:
   - **Database name:** `world`
   - Leave other settings as default
3. Click **Save**

### 3. Create Table `flags`

1. Expand `world` > **Schemas** > `public` > **Tables**
2. Right-click on **Tables** > **Create** > **Table**
3. In **General** tab:
   - **Table name:** `flags`
4. In the **Columns** tab, click **+** and add:

| Name      | Data Type | Constraints        |
|-----------|-----------|--------------------|
| id        | serial    | Primary Key        |
| name      | varchar   | Not Null           |
| flag      | text      | (URL to flag image)|

5. Click **Save**

### 4. Insert Sample Data

1. Right-click the `flags` table > **View/Edit Data** > **All Rows**
2. Enter some sample rows:

| name     | flag                                        |
|----------|---------------------------------------------|
| France   | https://flagcdn.com/fr.svg                  |
| Germany  | https://flagcdn.com/de.svg                  |
| Japan    | https://flagcdn.com/jp.svg                  |

---

## 💻 Set Up and Run the Project

### 1. Clone or Download the Project

```bash
git clone <your-repo-url>
cd <project-folder>
```

### 2. Install Dependencies

```bash
npm i
```

### 3. Run the App

```bash
node index.js
```




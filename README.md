# College Management System  

This project is a backend application built using **NestJS** and **PostgreSQL** to manage and query college-related data. It demonstrates designing database relationships, handling complex queries, and deploying the application in a production-like environment.  

---

## Features  

- **Colleges Management**  
  - Manage colleges, their scores, and associations with cities and states.  

- **Placement Records**  
  - View placement statistics for colleges, including averages, trends, and detailed records.  

- **Courses Offered**  
  - Retrieve college-specific course information, sorted by course fees.  

- **City and State Filtering**  
  - Query colleges based on city or state.  



---

## Table of Contents  

1. [Database Design](#database-design)  
2. [API Endpoints](#api-endpoints)  
3. [Installation](#installation)  
4. [Running the Application](#running-the-application)  
5. [Deployment](#deployment)  
6. [Technologies Used](#technologies-used)  
7. [Contributing](#contributing)  
8. [License](#license)  

---

## Database Design  

The database consists of the following tables:  

1. **Colleges Table**  
   - `id`: Primary Key  
   - `name`: Name of the college  
   - `score`: Ranking score (1–1000)  
   - `city_id`: Foreign Key to `Cities` table  
   - `state_id`: Foreign Key to `States` table  

2. **College_Placement Table**  
   - `id`: Primary Key  
   - `college_id`: Foreign Key to `Colleges` table  
   - `year`: Year of placement data  
   - `highest_placement`, `average_placement`, `median_placement`, `placement_rate`: Placement statistics  

3. **College_Wise_Course Table**  
   - `id`: Primary Key  
   - `college_id`: Foreign Key to `Colleges` table  
   - `course_name`: Name of the course  
   - `course_duration`: Duration of the course  
   - `course_fee`: Fee of the course  

4. **Cities Table**  
   - `id`: Primary Key  
   - `name`: Name of the city  

5. **States Table**  
   - `id`: Primary Key  
   - `name`: Name of the state  

---

## API Endpoints  

### 1. College Placements Data  

- **Endpoint**: `/college_data/{college_id}`  
- **Features**:  
  - Returns the average placement data grouped by year.  
  - Provides placement records with a `placement_trend` field based on placement rate trends (UP/DOWN).  

### 2. College Courses Data  

- **Endpoint**: `/college_courses/{college_id}`  
- **Features**:  
  - Fetches all courses offered by the college, sorted by course fee in descending order.  

### 3. City and State Filter for Colleges  

- **Endpoint**: `/colleges`  
- **Query Parameters**:  
  - `city`: Retrieve colleges from a specific city.  
  - `state`: Retrieve colleges from a specific state.  

---

## Installation  

### Prerequisites  

1. Install **Node.js** and **npm**: [Download Node.js](https://nodejs.org/)  
2. Install **PostgreSQL**: [Download PostgreSQL](https://www.postgresql.org/)  

### Steps  

1. Clone this repository:  
   ```bash  
   git clone https://github.com/Riteshkaul/Sports-Dunia.git
   cd college-management  

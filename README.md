# boardsapp
Super Scholar task

Used 
1> DB-Browser GUI for creating and managing tables inside the database
2> Knex for writing SQL queries in javascript
3> SQLite3 for database

First, the user has to log in order to access all the REST APIs

# Authentication Process
•	Make a post request with JSON containing email and password to /login endpoint
•	User gets registered in the database
•	Make another post request to /login endpoint with the same credentials to generate the JWT token
•	Now add an authentication header to every request

# GETTING ARTICLES
•	To fetch the list of top articles make a get request to endpoint /articles/:limit

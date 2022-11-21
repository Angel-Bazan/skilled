<div align="center">
  
  <img height="200" src="https://user-images.githubusercontent.com/66194627/203174286-f72ead4f-fa26-4c2a-b79a-8453696bf7d7.png">

  
</div>

<div align="center">
    <a href="https://server-vo1l.onrender.com/">Render Link</a> 
  
 </div>
 
 # Contents

  - [About](#why-skilled---app-overview)
  - [Tech Stack](#techstack)
  - [APIs](#apis)
  [Drawing Board](#drawing-board)
  - [Style Guide](#style-guide)
  - - [Wireframe](#wireframe)
  - - [Data Model](#data-model)
  - - [User Flow](#user-flow)
  - [Installation](#installation)
  - [Testing](#testing)
  - [Future Development](#future-development)

### Your First Express and React App


# Step by Step instructions - To use this project as your start point
### For create the whole project
1. Go to your source directory in your terminal and run the command `git clone https://github.com/Yosolita1978/React-Express-PairProgramming.git NAMENEWDIRECTORY`
[!You will something like this in your terminal.](https://github.com/Yosolita1978/screenshoots/blob/main/template/Screen%20Shot%202022-03-20%20at%207.50.46%20PM.png?raw=true)

2. To restore the DB dump file that the project already contain, just run the command `psql -U postgres -f db.sql`. Make sure that you have your Postgres password on hand. The psql console will ask you for your password. 
3. To clean your folder from the owner git, run the command `rm -rf .git`
4. Run the command `git init` to start your git repository
5. Go to the server folder in the project (`cd server`) and run the command `npm install`
6. Inside your server folder, create an .env file with `touch .env`
7. Inside your server folder, open the file `.env.example` and copy the file there. 
8. Inside your .env file, paste the string from .env.example and change the variables with the values from the project. For this template, don't change the name of your db.
9. Inside your server file: run the command `psql -U postgres -f db.sql` to restore the DB from the file db.sql
10. Go to the cliente folder (`cd .. and cd client`) and run the command `npm start`
11. Both server should run now with `npm start`
12. Go to localhost:3000 and you should see something like this
[!You will something like this in your terminal.](https://github.com/Yosolita1978/screenshoots/blob/main/template/Screen%20Shot%202022-03-20%20at%208.58.13%20PM.png?raw=true)

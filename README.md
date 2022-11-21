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

## Why Skilled? - App Overview 

This app helps Orange County students match their trade career interest to their local community college. The app provides a link to a YouTube video for a better explanation of the trade program and the list of community colleges that offer that trade.

<br/>

## TechStack 

> Tools, languages, and others
<table align="center">
  <tr>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168923681-ece848fc-5700-430b-957f-e8de784e9847.png" width="48" height="48" alt="html" />
      <br>html
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168924521-589f95da-069a-496a-bcc1-ee6dd132ff12.png" width="48" height="48" alt="CSS" />
      <br>CSS
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168977094-6a5073a2-2f48-4f5a-ae0e-ed1421a678c6.png" width="48" height="48" alt="JavaScript" />
      <br>JavaScript
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168976819-15a1f4e0-29cf-4ac0-94a7-1f15eee374a1.png" width="48" height="48" alt="postgreSQL" />
      <br>postgreSQL
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168978951-5ac2af5e-c911-4e59-b493-683071cf1860.png" width="48" height="48" alt="Express" />
      <br>Express
    </td>
    </tr>
  <tr>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168979311-4a486cad-32c8-46f4-a5da-912fdc51b2d6.png" width="48" height="48" alt="React" />
      <br>React
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168979848-733f7090-0f78-401a-9ceb-4267231abef7.png" width="48" height="48" alt="Node" />
      <br>Node
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168980647-1690f9de-bf0e-4318-93cb-1b2ba3701ded.png" width="48" height="48" alt="Bootstrap" />
      <br>Bootstrap
    </td>
     <td align="center" width="96"> 
        <img src="https://user-images.githubusercontent.com/66194627/203179241-2e8bda6b-1853-430d-b62d-423364a440fc.jpg" width="48" height="48" alt="Render" />
      <br>

    </td>

  </tr>
</table>

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

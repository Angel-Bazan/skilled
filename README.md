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
      <br>Render

  </tr>
</table>

## APIs

<table align="center">
  <tr>
    <td align="center" width="96">
      <img src="https://user-images.githubusercontent.com/66194627/203183326-dda15781-7ddc-4b9c-8901-2c3025453626.png" width="48" height="48" alt="motivational quote-api" />
    </td>
    <td align="center" width="96">
       <img src="https://user-images.githubusercontent.com/74997368/168984679-a7fa607e-2a9a-46c8-91a6-9a9e77501dbd.png" width="48" height="48" alt="auth0" />
    </td>
  

  <tr>
    <td align="center" width="96">
      <br>Motivational quote
    </td>
    <td align="center" width="96" >
      <br>Auth0
    </td>
  </tr>
</table>

## Drawing Board 

### Wireframe 
<div align="center"><img width="931" alt="Screen Shot 2022-10-24 at 9 43 46 PM" src="https://user-images.githubusercontent.com/66194627/203221432-753ae53b-a7f0-4513-9ba9-ce4459f119af.png">
</div>

### Database Model 
<div align="center"><img width="1266" alt="Screen Shot 2022-10-24 at 9 45 54 PM" src="https://user-images.githubusercontent.com/66194627/203222037-716eb9e4-7386-4961-83c2-2e9c60e9f9c0.png">
</div>. 

### Installation 

1. Clone the repo: 

   ```sh 
   https://github.com/Angel-Bazan/skilled
   ```
2. Install all NPM packages using this in the root directory:
   ```sh
   npm install
   ```
3. Database setup:
   1. Copy the root example environment file

   ```sh
   cp .env.example .env
   ```
   2. You can choose to edit `.env` or just use as-is.
   3. Run the following to setup the database with the seed file:
   ```sh
   npm run db:init
   ```

## Testing
#### Jest Testing

To run tests on the terminal:
- On client side run the following command:

```sh
   npm test
   ```

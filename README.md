# ICT Skills 2 Assignment.

Name: Cathal Duffy

## Overview.

The Football App is a web application built using React.js, that allows users to view details about their favourite football teams, keep up to date with various different league standings, view fixtures based on their selected dates and selected league, along with being able to create an account, and log in through the use of Firebase.

+ Log in/Log out.
+ Register an account/Reset password.
+ View team standings based on year and league selection of dropdown menu.
+ View team fixtures/result based on date from calendar and league selection.
+ Users can select their favourite team, and view details of the selected team.

## Setup requirements.

+ .env file required with relevant api and firebase settings.
+ run the command '$npm i' in terminal, to install relevant node packages.

## App Design.

### Routing/Navigation.

+ /team/:id - detailed information on a specific team. Team details view
+ /login - login page with login form.
+ /logout - logs user out.
+ /register - form to allow users to register an account.
+ /reset - form to allow user to reset password.
+ /dashboard - contains list of teams in a given division.
+ /fixtures - page that contains fixtures both past and future.
+ /standings - page that renders a table of standings for a given division/year.
+ / - a simple homepage.

### Views/Pages.

[ For each view in your app, show a screenshot and caption - only new/modified ones in the case of the Movies Fan app. If necessary, use multiple screenshots to cover a view's full capability.

e.g.
>Lists teams from the get teams by league id and year, endpoint. Filtering by year and league is supported through the use of dropdown menus

![][dashboard]



>Shows detailed information on a specific team. Calls the team by id endpoint.

![][teamView]



>Displays fixtures by calling the fixtures by id and year endpoint. Can be filtered by selecting the league and date, with a dropdown menu and a calendar.

![][fixtures]



>Displays standings by calling the standings by league id and year endpoint. Can be filtered by selecting the league and year, with dropdown menus.

![][standings]



>Login page that communicates with firebase to allow user to log in.

![][login]



>Registration page that communicates with firebase to allow a user to register an account.

![][register]



>Simple form that allows user to communicate with firebase to reset their account password.

![][reset]

### Component catalogue.

Unfortunately, my Storbook components no longer render correctly due to the fact that after I applied the real data, storybook no longer worked for these components. However, Storybook was used in the building of most of the application's components.

## Caching.

N/A

## Authentication (if relevant).

Firebase authentication added to the application. Firstly, by creating a firebase account and then applying the firebase account credentials to the .env file. A page was created for each of the Login, Logout, Register and Reset Password, each of which (except for Logout) containing a component for a form. Each of these forms provides a desired function to communicate with firebase that allows the user to log in, register, reset their password, or in the case of log out, the function is contained directly in the page.

Also created in the 'nav' component is a boolean value for the routes. The protected routes being 'True' and the unprotected routes being 'False'. This allows the application to only display the protected routes in the navbar when the user is logged in, and vice-versa when the user is not logged in. 

Each protected route page also contains a useEffect() function that will block the user from accessing this page if they are not logged in.

e.g.
+ /dashboard
+ /team/:id
+ /fixtures
+ /standings


## Server-side persistence (if relevant)

The only server side persistence created is that when a user is registered and their account is then stored in firebase.

## Additional features (if relevant),

Dropdown menus that allow the user to select the year and also the league. Calendar component that allows the user to select a particular date to view fixtures for.

## Independent learning (if relevant),

Implementing the use of a calendar component (https://codesandbox.io/s/n5kb8). The use of a function in the component that would allow props to be passed back to the page, and then on the api calls (sent from the dropdown menus). The use of outside API endpoints, from the football-api(https://rapidapi.com/api-sports/api/api-football/).

[dashboard]: ./public/assets/dashboard.png
[fixtures]: ./public/assets/fixtures.png
[home]: ./public/assets/home.png
[login]: ./public/assets/login.png
[register]: ./public/assets/register.png
[reset]: ./public/assets/reset.png
[standings]: ./public/assets/standings.png
[teamView]: ./public/assets/teamView.png

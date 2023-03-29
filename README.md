# Tech-Blog

## Description
In this repository, the developer will create a CMS-style blog site for users to write, publish, view, and comment blog post.

## Installation
1. Create a folder on desktop to download repository to.
2. Copy the link to repository from GitHub.
3. Open Bash or Terminal Window.
4. When the console opens, navigate to the folder create on desktop for repository. *Remember to use the command cd to change directories.*
5. In the console, type the command <i> git clone </i> and paste the link to repository.
6. Open repository in preferred coder editor.

Ensure the following packages are installed. (To install packages, open the terminal in preferred coder editor and type npm install)

* Packages:
    - nodemon (this is a developer dependency)
    - bcrypt
    - dotenv
    - express
    - express-handlebars
    - express-session
    - mysql2
    - sequelize
    - connect-session-sequelize

## Usage
To begin, as a developer, think about how the user will interact with the application to breakdown the steps to install package dependencies and write the database and code necessary for the application to perform its function. Below are the steps on how the user will interact with the Tech-Blog application.

1. The user will be presented with homepage. If user is not signup or logged in, user will be unable click on the blog (if any) to view more content.
<img src='public\images\homepage.png' alt='Image of Homepage'>
2. The user will be prompted to signup or login with credentials to be able to navigate the site. 
<img src='public\images\credentials.png' alt='Image of Login/Signup page'>
3. Once the user inputs credentials, the user will be presented with the dashboard where they are able to create a new blog post or view blogs they have published.
<img src='public\images\dashboard.png' alt='Image of Dashboard'>
4. The user can navigate to the homepage, view blogs from other users, and leave comments.
<img src='public\images\post-commentpage.png' alt='Image of Post/Comment Page'>
5. The user will be logged out from session after being idle for a while or chooses to log out. 

<br>

## License
MIT License

Copyright (c) 2021 Amanda Rodriguez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


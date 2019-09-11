# Online-Shopping

project group 2
npm i
npm i nodemon -d
npm install dotenv
//create .env to store db config

DB_HOST=127.0.0.1
DB_PORT=3306
DB_NAME=online-shopping
DB_USER=root
DB_PASS={input password here!}

package.json
{
"name": "online-shopping",
"version": "0.0.0",
"private": true,
"scripts": {
"start": "node ./bin/www",
"dev": "nodemon"
},
"dependencies": {
"cookie-parser": "~1.4.4",
"debug": "~4.1.1",
"dotenv": "^8.1.0",
"ejs": "~2.7.1",
"express": "~4.17.1",
"http-errors": "~1.7.3",
"morgan": "~1.9.1",
"mysql": "^2.17.1",
"nodemon": "^1.19.2"
}
}

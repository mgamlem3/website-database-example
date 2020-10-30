# Website with API and MySQL database

## Technologies used
- Docker
- next.js
- MySQL
- Adminer

## Setup
1. Install Docker
	- https://docs.docker.com/compose/install/
2. Install Yarn
	- https://classic.yarnpkg.com/en/docs/install#windows-stable
3. (Recommended): Install MySQL Workbench
	- https://dev.mysql.com/downloads/workbench/
4. Create a folder at the root of this project named `mysql-data`

## Starting project
### Backend:
1. From the root directory of this project run `docker-compose up` to download required images and start backend.
	- You can add a `-d` to this command to do this process in the background and get terminal back.

### Frontend
All frontend operations must be performed on the command line from within the `/website` folder.

1. (First time only): run `yarn`
2. run `yarn dev`
3. Navigate to `localhost:3000` in your browser to view the webpage
4. The webpage will automatically reload whenever you make changes.

## Stopping Project
### Backend
- If you ran `docker-compose up -d` to start the project, run `docker-compose down` to stop the project.
- If you ran `docker-compose up` use `ctrl+c` to stop the project.

### Frontend
1. Type `ctrl + c` to stop the running web server

## Connecting to database
### Adminer
This is a web based database editing tool. More information on how to use it can be found [here](https://www.adminer.org/en/).
1. Navigate to `localhost:8080/`. This will bring up the adminer interface and ask you to login
2. Use web interface to edit database

### MySQL Workbench
1. Open MySQL Workbench and choose to add a connection
2. You may leave hostname as `127.0.0.1` or change it to `localhost`
3. Enter port `3306` if not already filled in.
4. Enter username (default is `root`)
5. Enter password (default is `example`)
6. Optional: Choose Test Connection
7. Click OK
8. Click once on connection you made to connect

## Optional steps
- Change the default password for MySQL in `docker-compose.yml`
- Add secrets from `lib/db.js` to next js as detailed just above the section linked [here](https://vercel.com/guides/deploying-next-and-mysql-with-vercel#step-3:-create-your-reusable-database-connection).

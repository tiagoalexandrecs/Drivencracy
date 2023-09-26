# Drivencracy
A back-end application which allows the simulation of an electoral process towards various polls

Its main programming language is Javascript, which was implemented through all the files and layers of the project.Moreover, in order to store all the data and its analysis, the database technology MongoDB was chosen to fulfill this role. Some other technologies and tools are listed below :

- Dayjs library
- Dotenv and MongoClient
- Joi library for schemas' validation
- Architecture( Controllers and Routers)
- Middleware validation

All dependencies are already installed in the project, so the only command you need to apply is the "npm i", which will install all dependencies that are written in the package-json archive.Then, run "npm run start" to initialize the service. However, the connection with MongoDB requires either its local installation by the user, or the usage of a remote MongoDB database.

Creation of a poll
![Captura de tela de 2023-09-25 07-34-43](https://github.com/tiagoalexandrecs/Drivencracy/assets/122137155/3f62f3bc-1627-4270-8bdd-b9348f218a11)


Retrieval of all created polls
![Captura de tela de 2023-09-25 07-36-31](https://github.com/tiagoalexandrecs/Drivencracy/assets/122137155/8869a718-ab7a-4307-aa00-0c435087bfdd)


Creation of a vote choice
![Captura de tela de 2023-09-25 07-47-07](https://github.com/tiagoalexandrecs/Drivencracy/assets/122137155/fcb33d92-2114-48ae-9934-90c5d1495df8)


The return of a poll's vote options 
![Captura de tela de 2023-09-25 07-50-47](https://github.com/tiagoalexandrecs/Drivencracy/assets/122137155/e552977f-fc8a-42cb-9e96-ad8ace4215b4)


A vote
![Captura de tela de 2023-09-25 07-57-44](https://github.com/tiagoalexandrecs/Drivencracy/assets/122137155/942ef683-e21a-4731-9799-9d5a2800a368)


The result of a certain poll
![Captura de tela de 2023-09-25 08-01-44](https://github.com/tiagoalexandrecs/Drivencracy/assets/122137155/fa67a0d4-aeb2-4c16-8a6c-2fd12d00464b)


An example of a .env file for the application
![Captura de tela de 2023-09-25 08-16-49](https://github.com/tiagoalexandrecs/Drivencracy/assets/122137155/350b3cc1-783c-459f-b4bb-121a29211608)



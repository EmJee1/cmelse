# cmelse

A headless cms for developers that want to focus on just the frontend.

- [cmelse](#cmelse)
  - [🗂️ Trello](#️-trello)
  - [🧑‍🤝‍🧑 Contributions](#-contributions)
  - [🖥️ Running the project locally](#️-running-the-project-locally)
    - [💿 Requirements](#-requirements)
      - [Node.js](#nodejs)
      - [Node versions](#node-versions)
      - [Package manager](#package-manager)
      - [Postman (optional)](#postman-optional)
    - [🧱 Base installation](#-base-installation)
    - [💼 Front-end](#-front-end)
    - [🧰 Back-end](#-back-end)
      - [MongoDB](#mongodb)
        - [Docker](#docker)
        - [Local installation](#local-installation)
      - [Environment variables](#environment-variables)
      - [Node](#node)
  - [🤖 GitHub Actions](#-github-actions)

## 🗂️ Trello

<https://trello.com/b/aFDc3tHi/cmelse>

## 🧑‍🤝‍🧑 Contributions

Contributions are welcome, just create an issue or pull request and we will review it ASAP.

## 🖥️ Running the project locally

To set the project up, a few base steps are required, and based on what you want to do there may be additional configuration steps.

### 💿 Requirements

#### Node.js

Since the project runs on JavaScsript, we need to install node.js, make sure to use the node version defined in the .nvmrc which is located in the root of the project. Read more about this in [node versions](#node-versions)

#### Node versions

In order to run multiple node versions in parallel, we suggest using the node version manager, or nvm for short.

- [nvm for Linux & macOS](https://github.com/nvm-sh/nvm)
- [nvm for Windows](https://github.com/coreybutler/nvm-windows)

#### Package manager

NPM is our preferred package manager, it comes installed with Node automatically so no additional installation is required.

#### Postman (optional)

We use a Postman workspace to try out API requests, it is a collection of requests so it also gives a nice overview of all available endpoints. Contact the repository owner (EmJee1) if you want to join the Postman workspace.

- [postman](https://www.postman.com/downloads)

### 🧱 Base installation

1. Start by cloning the repository from GitHub `git clone https://github.com/EmJee1/cmelse.git`
2. Go to the cmelse directory and install the npm packages with the helper command `npm run setup`.

### 💼 Front-end

These are the steps on how to set up the frontend, however you almost always need the backend to retrieve data. If you want to work on the front-end, odds are you have to set up the [back-end](#-back-end) as well.

1. Move into the client directory `cd client`
2. Run the dev command to start the dev server `npm run dev`

### 🧰 Back-end

The back-end is a Node server with MongoDB database.

#### MongoDB

To run mongodb, you have 2 options:

1. Use the provided docker-compose file (**recommended**)
2. Install MongoDB as an application on your system

##### Docker

1. Make sure [docker desktop](https://www.docker.com/products/docker-desktop) is installed on your system.
2. In the root directory of the project, run the command `docker compose up -d` in your favorite terminal, this will start the MongoDB container.
You are done now!

##### Local installation

To install it locally on your system, follow [the official documentation](https://docs.mongodb.com/guides/server/install/).

#### Environment variables

Copy the `server/.env.example` and paste the contents in a `server/.env` file.
Change the variables according to your configuration needs

| **Variable**               | **Description**                                    | **Default**                         |
|--------------------------- |--------------------------------------------------- |------------------------------------ |
| CMS_PORT                   | Port that express listens on for requests          | 3001                                |
| MONGODB_CONNECTION_STRING  | String with connection info for MongoDB            | "mongodb://127.0.0.1:27017/cmelse"  |
| FALLBACK_LOCALE            | This is used if a unsupported locale is requested  | "en"                                |
| BCRYPT_SALT_ROUNDS         | Salt rounds that bcrypt uses for hashing           | 10                                  |
| JSON_WEBTOKEN_SECRET       | The json webtoken secret used for hashing          | ""                                  |

#### Node

1. Go into the server directory (`cd server`)
2. Run `npm run start:dev`

## 🤖 GitHub Actions

We use [GitHub actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions) to run automated checks on code-quality, consistency and automated tests. The checks we run are:

1. Automated unit tests for the server (with Jest).
2. ESLint on both the server and client projects.
3. Build (with type-checking) the server and client

# GraphQL Couchbase Example

A basic example of how to utilize Node, GraphQL, and Couchbase together effectively

## Getting Started

Clone this repo to your machine
```
git clone https://github.com/jontiritilli/graphql-couchbase.git
```
### Prerequisites

Node and NPM are required, as is Docker and Docker Compose. Please ensure these are installed and the Docker Daemon is running


### Installing

1. Start Couchbase Docker container

    ```
    docker-compose up -d
    ```
1. Navigate to [your Couchbase DB](http://localhost:8091/)
1. Setup your cluster, and create an admin login
1. Create a Bucket
1. **Add this information to the config file in the root**

1. Install required Node modules

    ```
    npm install
    ```

1. Start the project
    ```
    npm start
    ```

1. Go to localhost:3000/graphql

    Sample queries available in exampleQueries
## Built With

* [CouchBase](https://docs.couchbase.com/home/index.html)
* [Docker](https://docs.docker.com/)
* [Node](https://nodejs.org/en/docs/)
* [Express](https://expressjs.com/en/4x/api.html)
* [GraphQL](https://graphql.org/graphql-js/)

## Authors

* **Jonathan Tiritilli**

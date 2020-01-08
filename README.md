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
1. Click **Setup your cluster**
1. Create a cluster name and an admin login
1. Disable analytics (uncheck this box) in Service Memory Quotas
1. Create a Bucket
1. Add the bucket and login info to the config file in the project root

1. Install required Node modules

    ```
    npm install
    ```

1. Start the project
    ```
    npm start
    ```

1. Go to [GraphiQL](localhost:3000/graphql)

### DB Setup
1. Using the sample GraphQL mutation available in exampleQueries, add some users to your Couchbase bucket

1. Once there are objects in your bucket, go to your couchbase ui, and navigate to the Query page

1. We need to index and make the bucket queryable using the following command:
    ```
    create primary index on <bucket name>
    ```
## Built With

* [Docker](https://docs.docker.com/)
* [CouchBase](https://docs.couchbase.com/home/index.html)
* [Node](https://nodejs.org/en/docs/)
* [Express](https://expressjs.com/en/4x/api.html)
* [GraphQL](https://graphql.org/graphql-js/)

## Authors

* **Jonathan Tiritilli**

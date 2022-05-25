# Steps to reproduce

This repo setup a minimal Apollo remote schema + user permissions to easily reproduce bug mentioned
here: https://github.com/hasura/graphql-engine/issues/8455


```
git clone git@github.com:avallete/mre-hasura-8455.git
cd mre-hasura-8455
npm install
docker-compose up
```

Then fetch the hasura "user" role graphql schema:

```
npm run get-graphql-user-schema
```

You'll see that the generated schema after docker up is stripped from the "incNumber" mutation (`git diff schema.graphql`)

Then, open hasura console with:

```
npm run console
```

Go to the "remote schema" tab, choose "Apollo", choose "user" role, don't change anything, just click "save permissions"

Then re-run:

```
npm run get-graphql-user-schema
```

You'll see that the `incNumber` mutation is back in the user schema.graphql

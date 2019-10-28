'use strict';

const Todos = require('../models/todo/todo-model');
const { buildSchema } = require('graphql');
const expressGraphql = require('express-graphql');
const todoModel = new Todos();

// graphql API

const todoSchema = buildSchema(`
type Todo {


}

type Query {

}

type Mutation {

}


`);


const rootReducers = {
  todo: (args) => {
    todos.get()
      .then(data => {

        count: data.length();
        results: data,
      }
      return output)
    }
  }
}

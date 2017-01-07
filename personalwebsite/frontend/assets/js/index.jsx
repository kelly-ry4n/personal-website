const React = require('react')
const ReactDOM = require('react-dom')
const app = require('./app')
const Redux = require('redux')
const IpsumReducer = require('./reducers')
const ReduxThunk = require('redux-thunk').default
const ipsumActions = require('./actions')
const ReactRedux = require('react-redux')
const $ = require('jquery')
const ReactRouter = require('react-router')

const Router = ReactRouter.Router
const Route = ReactRouter.Route
const browserHistory = ReactRouter.browerHistory

require('../scss/example/example.scss')
require('../scss/materialize/sass/materialize.scss')
require('../scss/materialize/js/bin/materialize.min.js')
require('materialize-css')
require('../html/index.html')


/*
$(document).ready( () => {
    console.log("ready")

}) */


const express = require('express')
const routes = require('./server/routes.js')
const app=routes(express())
app.listen(8000, errs=>console.log(errs?errs:"listening on 8000"))
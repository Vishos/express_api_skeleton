const Task = require('./models.js')
module.exports = {
    allTasks: (req,res)=>{
        console.log('all tasks in controller')
        Task.find({})
            .then(task=>console.log(task)||res.json(task))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    createTask:(req,res)=>{
        console.log('create tasks in controller')
        Task.create(req.body)
            .then(task=>console.log(task)||res.json(task))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    oneTask:(req,res)=>{
        console.log('one task in controller')
        Task.findById(req.params.id)
            .then(task=>console.log(task)||res.json(task))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    updateTask:(req,res)=>{
        console.log('update in controller')
        Task.findByIdAndUpdate(req.params.id, req.body,{new:true})
            .then(task=>console.log(task)||res.json(task))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    deleteTask:(req,res)=>{
        console.log('delete task in controller')
        Task.findByIdAndRemove(req.params.id)
            .then(task=>console.log(task)||res.json(task))
            .catch(errs=>console.log(errs)||res.json(errs))
    }
}
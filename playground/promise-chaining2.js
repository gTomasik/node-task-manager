
require('../src/db/mongoose')
const Task = require('../src/models/task')
/*
Task.findByIdAndDelete('5e1358cb6301845480de4a66').then(task => {
    console.log(task)
    return Task.count({ completed: true })
}).then( result =>{
    console.log(result)
}).catch(error =>{
    console.log(error)
})
*/
deleteTaskAndCout = async id => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false})
    return count
}

deleteTaskAndCout('5e1377a03036e767c471cc0e').then(count => {
    console.log(count)
}).catch(e => {
    console.log(e)
})
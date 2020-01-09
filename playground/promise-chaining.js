require('../src/db/mongoose')

const User = require('../src/models/user')

/*
User.findByIdAndUpdate('5e1329879f57cf2984c19aa2', { age: 1} ).then(user =>{
    console.log(user)
    return User.countDocuments({ age: 1})
}).then(result =>{
    console.log(result)
}).catch(error =>{
    console.log(error)
})
*/
const updateAgeCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeCount('5e1329879f57cf2984c19aa2', 2).then(count => {
    console.log(count )
}). catch (error => {
    console.log(error)
})

const allStudent = (req,res)=>{
    res.send('student all')
}
const deleteStudent = (req,res)=>{
    console.log(req.params)
    const {id} = req.params
    console.log(id)
    if(id == 10){
        res.send('ye naveen ki id hain to ye delete nahi ho sakti')
    }
    else{
        res.send(`Student delete ${id}`)
    }
}
export {allStudent,deleteStudent}//new way es6
// module.exports={allStudent,deleteStudent}//old way
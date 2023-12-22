const db = require("../database");


const employeeRegistration = async(req,res) => {
    db.query(`SELECT * FROM USERS_TABLE`,(err,result)=>{
        if(err){
            console.log(err);
            res.status(400).json({message:`Error : ${err}`});
            return
        }
        console.log(result.rows);
        res.status(200).json(result.rows);
    })
}


const employeeLogin = async (req, res) => {
  const { email, password } = req.body;
  if (email === "admin@gmail.com" && password === "admin1234") {
    const obj = {
      employee_id: "12345678910",
      name: "Admin",
      department: "administration",
      picture: "https://visualpharm.com/assets/314/Admin-595b40b65ba036ed117d36fe.svg",
      email: "admin@gmail.com",
      admin: true
    };
    return res.status(200).json(obj);
  }
};



module.exports = {employeeLogin,employeeRegistration}
const express = require("express");
const fs = require("fs").promises;
const { v4: uuidv4 } = require("uuid");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();

app.use(cors());
app.use(bodyParser.json());


app.get("/", (req, res) =>{
    console.log(req);

    res.send("Hello world");
})
// app.post("/login" , (req, res)=>{
//     const {email, password} =req.body;
//     if (email === "messi" && password === "messii"){
//         return res.json({
//             token: "123312312",
//         });
//     }
//     res.status(401).send({
//         message: "Invalid credentials"
//     })

// })
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
   
    const filePath = "src/data/users.json";
   
    const usersRaw = await fs.readFile(filePath, "utf8");
   
    const users = JSON.parse(usersRaw);
   
    const user = users.find((user) => user.email === email);
   
    if (!user) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
   
    if (user.password !== password) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
   
    const token = jwt.sign({ email }, "secret-boy");
   
    res.json({
      token,
    });
  });
app.post("/sign", async(req, res) => {
    const { name, email, password } = req.body;
    const filePath = "src/data/users.json";
    const usersRaw = await fs.readFile(filePath, "utf-8");
    const users = JSON.parse(usersRaw);
    const user = users.find((user) => user.email === email);
    if(user){
      return res.status(401).json({
        message: "user already exists"
      });
    }
    const id =uuidv4 ();
    users.push({
      id,
      name,
      email,
      password,
    });
    await fs.writeFile(filePath, JSON.stringify(users));
    const token = jwt.sign({email}, "secret-boy");
    res.json({
      token,
      message: "user already exists"
    });
  })



.get("/test", (req, res)=> {
    res.send("Test");
})
.get("/test/:id", (req, res) => {
    res.send (`Test ${req.params.id}`)
})

const port = 3001 ;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})




// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require("cors")
// const app = express();
// const PORT = 3001;
// app.use(bodyParser.json());


// app.get("/", (req, res) =>{
//     console.log(req);

//     res.send("Hello world");
// })
// app.use(cors())
// const users = [
//  { email: 'test', password: 'pass3' }

// ];



// app.post('/login', (req, res) => {
//  const { email, password } = req.body;
//  if (email && password){
//     return res.json({
//         token: "123312312",
//     });
// }

//  const user = users.find(u => u.email === email);
//  if (!user || user.password !== password) {
//    return res.status(401).json({ message: 'Invalid credentials' });
//  }


//  return res.redirect('/dashboard');
// });
// // .get("/test", (req, res)=> {
// //     res.send("Test");
// // .get("/test/:id", (req, res) => {
// //     res.send (`Test ${req.params.id}`)
// // })
// app.get('/dashboard', (req, res) => {
//  res.send('Welcome to the dashboard');
// });
// app.listen(PORT, () => {
//  console.log(`Server is running on port ${PORT}`);
// });

// const fs = require("fs").promises;
 
// const { v4: uuidv4 } = require("uuid");
 
// const express = require("express");
 
// const cors = require("cors");
// const bodyParser = require("body-parser");
 
// const jwt = require("jsonwebtoken");
 
// const app = express();
 
// app.use(cors());
// app.use(bodyParser.json());
 
// app.post("/sign-in", async (req, res) => {
//   const { email, password } = req.body;
 
//   const filePath = "src/data/users.json";
 
//   const usersRaw = await fs.readFile(filePath, "utf8");
 
//   const users = JSON.parse(usersRaw);
 
//   const user = users.find((user) => user.email === email);
 
//   if (!user) {
//     return res.status(401).json({
//       message: "Unauthorized",
//     });
//   }
 
//   if (user.password !== password) {
//     return res.status(401).json({
//       message: "Unauthorized",
//     });
//   }
 
//   const token = jwt.sign({ email }, "alkdgjkladjg");
 
//   res.json({
//     token,
//   });
// });
 
// app.post("/sign-up", async (req, res) => {
//   const { name, email, password } = req.body;
 
//   const filePath = "src/data/users.json";
 
//   const usersRaw = await fs.readFile(filePath, "utf8");
 
//   const users = JSON.parse(usersRaw);
 
//   const user = users.find((user) => user.email === email);
 
//   if (user) {
//     return res.status(409).json({
//       message: "User already exists",
//     });
//   }
 
//   const id = uuidv4();
 
//   users.push({
//     id,
//     name,
//     email,
//     password,
//   });
 
//   await fs.writeFile(filePath, JSON.stringify(users));
 
//   const token = jwt.sign({ email }, "alkdgjkladjg");
 
//   res.json({
//     token,
//     message: "User created",
//   });
// });
 
// app.post("/records", async (req, res) => {
//   const { authorization } = req.headers;
 
//   if (!authorization) {
//     return res.status(401).json({
//       message: "Unauthorized",
//     });
//   }
 
//   try {
//     const payload = jwt.verify(authorization, "alkdgjkladjg");
 
//     const { email } = payload;
 
//     const {
//       amount,
//       date,
//       iconID,
//       isExpense_,
//       time,
//       category_value,
//       category_name,
//     } = req.body;
 
//     const filePath = "src/data/records.json";
 
//     const recordsRaw = await fs.readFile(filePath, "utf8");
 
//     const records = JSON.parse(recordsRaw);
 
//     records.push({
//       amount,
//       date,
//       iconID,
//       isExpense_,
//       time,
//       category_name,
//       userEmail: email,
//     });
 
//     await fs.writeFile(filePath, JSON.stringify(records));
 
//     res.json({
//       message: "Record created",
//     });
//   } catch (error) {
//     return res.status(401).json({
//       message: "Unauthorized",
//     });
//   }
// });
// app.post("/category", async (req, res) => {
//   const { authorization } = req.headers;
//   if (!authorization) {
//     return res.status(401).json({
//       message: "error",
//     });
//   }
//   try {
//     const verify = jwt.verify(authorization, "alkdgjkladjg");
//     const { email } = verify;
//     const { iconID, color_, categoryInputValue } = req.body;
//     const filePath = "src/data/category.json";
//     const rawFile = await fs.readFile(filePath, "utf8");
 
//     const file = JSON.parse(rawFile);
 
//     file.push({
//       iconID,
//       color_,
//       categoryInputValue,
//       userEmail: email,
//     });
 
//     await fs.writeFile(filePath, JSON.stringify(file));
//     res.json({
//       message: "fine",
//     });
//   } catch (err) {
//     return res.status(401).json({
//       message: "Unauthorized",
//     });
//   }
// });
 
// app.get("/users", async (req, res) => {
//   const { authorization } = req.headers;
 
//   if (!authorization) {
//     return res.status(401).json({
//       message: "Error",
//     });
//   }
 
//   try {
//     const check = jwt.verify(authorization, "alkdgjkladjg");
 
//     const { email } = check;
 
//     const filePath = "src/data/users.json";
 
//     const usersRaw = await fs.readFile(filePath, "utf-8");
 
//     const users = JSON.parse(usersRaw);
 
//     const profile = users.filter((user) => user.email === email);
 
//     res.json({
//       profile,
//     });
//   } catch (err) {
//     return res.status(401).json({
//       message: "error",
//     });
//   }
// });
 
// app.get("/records", async (req, res) => {
//   const { authorization } = req.headers;
 
//   if (!authorization) {
//     return res.status(401).json({
//       message: "Unauthorized",
//     });
//   }
 
//   try {
//     const payload = jwt.verify(authorization, "alkdgjkladjg");
 
//     const { email } = payload;
 
//     const filePath = "src/data/records.json";
 
//     const recordsRaw = await fs.readFile(filePath, "utf8");
 
//     const records = JSON.parse(recordsRaw);
 
//     const usersRecords = records.filter((record) => record.userEmail === email);
 
//     res.json({
//       records: usersRecords,
//     });
//   } catch (error) {
//     return res.status(401).json({
//       message: "Unauthorized",
//     });
//   }
// });
// app.get("/category", async (req, res) => {
//   const { authorization } = req.headers;
//   if (!authorization) {
//     return res.status(401).json({
//       message: "error",
//     });
//   }
//   try {
//     const verify = jwt.verify(authorization, "alkdgjkladjg");
 
//     const { email } = verify;
 
//     const filePath = "src/data/category.json";
 
//     const rawFile = await fs.readFile(filePath, "utf-8");
 
//     const file = JSON.parse(rawFile);
 
//     const userCategory = file.filter((user) => user.userEmail === email);
 
//     res.json({
//       userCategory,
//     });
//   } catch (err) {
//     res.status(401).json({
//       message: "error1",
//     });
//   }
// });
 
// const port = 3001;
 
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
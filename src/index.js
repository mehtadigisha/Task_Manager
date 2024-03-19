// const path = require('path');
// const express = require('express');
// const app = express();
// const port = 3000
// const router = express.Router();

// const publicdirectoryPath = path.join(__dirname,'../public');
// app.use(express.static(publicdirectoryPath))

// app.set('view engine', 'hbs');

// app.get('/', (req, res) => {
//   res.render('index',{
//     title: 'Home',
//     name:'abc'
//   })
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>Hello World! <br> About Page </h1>')
//   })

//   router.route('/users')
//   .get(function (req, res, next) {
//       res.send("GET request called");
//       res.end();
//   });

 
// router.param("userId", (req, res, next, id) => {
//   res.send("res 1");
//   next();
// });
 
// router.get("/user/:userId", (req, res) => {
//     console.log("Then this function will be called");
//     res.send("res 2");
//     // Send the response or end the response here, but don't send multiple responses
//     res.end();
// });

// router.use(function (req, res, next) {
//   // res.send("res 1")
//   console.log("123")
//   next();
// })

// // Always invoked
// router.use(function (req, res, next) {
//   console.log("1234")
//   res.send("Greetings from GeeksforGeeks");
// })

// app.use('/user1', router);


// app.use(router);

// app.listen(port, () => {
//   console.log(`App listening on port ${port}`)
// });

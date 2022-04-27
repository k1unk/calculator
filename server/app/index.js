const express = require('express');

const sequelize = require('./util/database').sequelize;
const User = require('./models/users');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET','POST','PUT','DELETE');
  next();
})

app.get("/", (req, res) => {
  res.json({message: "Calculator's server is working..."});
});
app.use('/dev', require('./routes/dev'));
app.use('/users', require('./routes/users'));

require("./routes/operationsRoute")(app);
require("./routes/usersRoute")(app);
require("./routes/loginRoute")(app);
require("./routes/authRoute")(app);

(async () =>{
  try {
    await sequelize.sync(
      {force: false}
    );
    console.log("test");
    app.listen(process.env.EXTERNAL_PORT || 3001);
  } catch (error) {
    console.error(error);
  }
})()

/* eslint-disable linebreak-style */
const { app } = require('./app');

// ultis
const { bd } = require('./ultis/database');

bd
  .authenticate()
  .then(() => console.log('conexion exite'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log('run sever in the port ', PORT);
});

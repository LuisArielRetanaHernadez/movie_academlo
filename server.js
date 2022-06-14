/* eslint-disable linebreak-style */
const { app } = require('./app');

// ultis
const { bd } = require('./ultis/database');
const { initModel } = require('./ultis/initModels');

initModel();

bd.authenticate()
  .then(() => console.log('conexion exite'))
  .catch((err) => console.log(err));

bd.sync()
  .then(() => {
    // eslint-disable-next-line no-use-before-define
    startServer();
  })
  .catch((err) => console.log(err));

const startServer = () => {
  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log('run sever in the port ', PORT);
  });
};

import express from 'express'; 
import config from './config'; 

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

const port = config.getPort();

app.listen(port, function listenHandler() {
  console.info(`Running on ${port}...`);  // eslint-disable-line no-console
});
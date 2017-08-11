import express from 'express'; 
import config from './util/config/config';
import serverRender from './renderers/serverRender';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const initialContent = serverRender();
  res.render('index', {initialContent});
});

const port = config.getPort();

app.listen(port, function listenHandler() {
  console.info(`Running on ${port}...`);  // eslint-disable-line no-console
});
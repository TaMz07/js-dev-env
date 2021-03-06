import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler , {
  publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
  console.log(path.join(__dirname, '../src/'))
  res.sendFile(path.join(__dirname, '../src/index.html'));
});


app.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    open('http://localhost:' + port);
  }
});

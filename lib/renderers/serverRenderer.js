import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import config from '../util/config/config';
import {StateApi} from '../state-api';
import {App} from '../app';

export default async () => {
  const host = config.getHost();
  const port = config.getPort(); 
  const response = await axios.get(`http://${host}:${port}/data`);
  const initialData = response.data;
  const store = new StateApi(initialData);

  return {
    initialMarkup: ReactDOMServer.renderToString(<App store={store} />),
    initialData
  };       
};
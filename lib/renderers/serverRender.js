import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import config from '../util/config/config';
import DataApi from '../api/DataApi';
import {App} from '../app';

export default async () => {
  const host = config.getHost();
  const port = config.getPort(); 
  const response = await axios.get(`http://${host}:${port}/data`);
  const api = new DataApi(response.data);

  const initialData = { 
    articles: api.getArticles(),
    authors: api.getAuthors()
  };

  return {
    initialMarkup: ReactDOMServer.renderToString(<App initialData={initialData} />),
    initialData
  };       
};
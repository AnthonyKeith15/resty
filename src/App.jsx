import React, { useState } from 'react';
import './App.scss'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

const App = () => {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  const callApi = async (requestParams) => {
    try {
      const response = await fetch(requestParams.url);
      const jsonData = await response.json();
      setData(jsonData);
      setRequestParams(requestParams);
    } catch (error) {
      console.error('Error while making API call:', error);
    }
  };

  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </>
  );
};

export default App;

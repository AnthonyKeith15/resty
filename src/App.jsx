import './App.scss'
import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [apiCalls, setApiCalls] = useState([]);

  const callApi = async (requestParams) => {
    try {
      const response = await fetch(requestParams.url);
      const jsonData = await response.json();
      setData(jsonData);
      setRequestParams(requestParams);
      setApiCalls((prevApiCalls) => [...prevApiCalls, requestParams]);
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
      <section>
        <h2>API Calls:</h2>
        <ul>
          {apiCalls.map((call, index) => (
            <li key={index}>
              <div>Request Method: {call.method}</div>
              <div>URL: {call.url}</div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;

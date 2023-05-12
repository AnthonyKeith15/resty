import React, { useState } from 'react';
import './Form.scss';

function Form(props) {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
    };
    props.handleApiCall(formData);
  };

  const handleMethodChange = (e) => {
    setMethod(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>URL: </span>
        <input name="url" type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
        <button type="submit">GO!</button>
      </label>
      <label className="methods">
        <span>
          <input
            type="radio"
            name="method"
            value="GET"
            checked={method === 'GET'}
            onChange={handleMethodChange}
          />
          GET
        </span>
        <span>
          <input
            type="radio"
            name="method"
            value="POST"
            checked={method === 'POST'}
            onChange={handleMethodChange}
          />
          POST
        </span>
        <span>
          <input
            type="radio"
            name="method"
            value="PUT"
            checked={method === 'PUT'}
            onChange={handleMethodChange}
          />
          PUT
        </span>
        <span>
          <input
            type="radio"
            name="method"
            value="DELETE"
            checked={method === 'DELETE'}
            onChange={handleMethodChange}
          />
          DELETE
        </span>
      </label>
    </form>
  );
}

export default Form;

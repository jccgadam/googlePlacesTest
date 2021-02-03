import React from 'react';
import logo from './logo.svg';
import './App.css';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <GooglePlacesAutocomplete
          apiKey='AIzaSyDw1sTnk2FQgNwghYCFFoaKpl2Vr6iBDvY'
          selectProps={{
              styles: {
                input: (provided) => ({
                  color: 'blue',
                  width:500
                }),
                option:()=>({
                  color:'black'
                })
            },
            language:'en'
          }
          }
        />
      </header>
    </div>
  );
}

export default App;

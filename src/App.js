import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar"
import {UnControlled as CodeMirror} from 'react-codemirror2';
require('codemirror/lib/codemirror.css');
// require('codemirror/theme/monokai.css');
require('./resources/codemirror/theme/monokai.css');

require('codemirror/theme/neat.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');


function App() {


  return (
    <div className="App">
        <Navbar></Navbar>
        
        <h1 id='welcome'>Welcome</h1>

        <div className='code'>  
          <CodeMirror
            Style= "height:800px"
            className='coder'
            value='<h1>I ♥ react-codemirror2</h1>'
            options={{
              mode: 'xml',
              theme: 'monokai',
              lineNumbers: true,
            }}
            onChange={(editor, data, value) => {
            }}
          />

        </div>

      <p>The place to learn to code for free!</p>

      <div id='get-started'>
            <h3 >Get Started</h3>
      </div>

    </div>
  );
}

export default App;

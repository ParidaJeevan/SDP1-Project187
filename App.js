import React from 'react';
import ReactDOM from 'react-dom';
import logo from './cart3.jpg'
const appStyle = {
  height: '10px',
  display: 'flex'
  
};

<style>
</style>


const formStyle = {
  

  margin: 'auto',
  padding: '10px',
  border: '1px solid #c9c9c9',
  borderRadius: '10px',
  background: 'cyan',
  width: '220px',
  display: 'block'
  
};

const labelStyle = {
  margin: '10px 0 5px 0',
  center: 'auto',
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontSize: '15px',
  shadow: 'black',
};

const inputStyle = {
  
  margin: '5px 0 10px 0',
  padding: '10px', 
  border: '1px solid #bfbfbf',
  borderRadius: '50px',
  boxSizing: 'border-box',
  width: '100%'
  
};

const submitStyle = {
  margin: '10px 0 0 0',
  padding: '7px 10px',
  border: '10px solid #efffff',
  borderRadius: '10px',
  background: 'white',
  width: '100%', 
  fontSize: '15px',
  color: 'black',
  display: 'block'
  

};
const Field = React.forwardRef(({label, type}, ref) => {
    return (
      <div>
        <label style={labelStyle} >{label}</label>
        <input ref={ref} type={type} style={inputStyle} />
      </div>

    );
});

const Form = ({onSubmit}) => {
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
           
            username: usernameRef.current.value,
            password: passwordRef.current.value
        };
        onSubmit(data);
    };
    return (
      <form style={formStyle} onSubmit={handleSubmit} >
        <h1>Employee Login</h1>
        
        <Field ref={usernameRef} label="Username:" type="text" />
        <Field ref={passwordRef} label="Password:" type="password" />
        
        <div>
        <button  styletype="submit">LOG IN</button>
        
        <button  styletype="submit">REGISTER?</button>
         
        
       
       
        </div>
      </form>
    );
};

// Usage example:

const App = () => {
    const handleSubmit = data => {
        const json = JSON.stringify(data, null, 4);
        console.clear();
        console.log(json);
    };
    return (
      <div style={appStyle}>
         <img src = {logo} alt="Logo" width="1000" height="1000"/>
         
        <Form onSubmit={handleSubmit} />
      </div>
    );
};

export default App;
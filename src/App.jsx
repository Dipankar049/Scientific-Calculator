// import React, {useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Header from './Header'
// import Navbar from './components/Navbar'
// import TextForm from './components/TextForm'
// import Counter from './counter'
// import Theme from './components/theme.jsx'
// import ProsEx from './components/prosEx.jsx'
// import Note from './components/note.jsx'
// import Alert from './components/Alert.jsx'
// // import { response } from '../../api/app.js'

// // class App extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {apiResponse: ""};
// //   }

// //   callAPI() {
// //     fetch('https://localhost:3000/testApi')
// //     .then(res => res.text())
// //     .then(res => this.setState({apiResponse: res}));
// //   }

// //   componentWillMount() {
// //     this.callAPI();
// //   }
// // }

// function App() {
//   const [count, setCount] = useState(0);
//   const [data2, setData] = useState(null);
//   let bio = {
//     name: "Rakesh",
//     age: 27,
//     Gender: "Male"
//   }

//   React.useEffect(() => {
//     fetch("/api")
//       .then((res) => res.text())
//       .then((data) => setData(data));
//   }, []);

//   const [alertMsg, setAlert] = useState(null);
//   const showAlert = (message, type) => {
//       setAlert({
//           msg: message,
//           type: type
//       })
//       setTimeout(() => {
//         setAlert(null);
//       }, 1500);
//   }
  
//   return (
//     <>
//       {/* <h1>Hello</h1> */}
      
//       {/* <Navbar title="MDN" about="About Us"/> */}
//       {/* <Navbar /> */}
//       {/* <Theme showAlert={showAlert}/>
//       <Alert alert={alertMsg}/>
//       <div className="container my-3">
//         <TextForm showAlert={showAlert} heading="Testing"/>
//       </div>
//       <div className="container my-3"> */}
        
//         {/* <Counter/> */}
//         {/* <ProsEx name="Dipankar"/> */}
//         {/* <Note /> */}
//       {/* </div> */}
//       <p>Hii{!data2 ? "Loading..." : data2}</p>
//     </>
//   )
// }

// export default App;

import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/greet')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;

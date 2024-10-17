// import './App.css';

// import { Routes } from 'react-router-dom';

// import Footer from './Components/Footer';

// import HomeLayout from './Layouts/HomeLayout'; 
// function App() {


//   return (
//     <>
//     {/* <Footer /> */}
//     <HomeLayout />
//     </>
  
//     )
// };

// export default App

// import './App.css';
// import Footer from './Components/Footer';
// import HomeLayout from './Layouts/HomeLayout';  // Import HomeLayout component

// function App() {
//   return (
//     <>
//       {/* Uncomment this line if you want to include Footer */}
//       {/* <Footer /> */}
//       <HomeLayout />  {/* Make sure HomeLayout is imported correctly */}
//     </>
//   );
// }

// export default App;





//3rd chatgpt



import './App.css';


import { Routes, Route } from 'react-router-dom';

import HomePage from  './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import NotFound  from './Pages/NotFound';
// import HomeLayout from './Layouts/HomeLayout';
// import Footer from './Components/Footer';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element ={<HomePage />}> </Route>
        <Route path="/about" element ={<AboutUs />}> </Route>
        <Route path="*" element ={<NotFound />}> </Route>

      </Routes>
     
{/* <HomeLayout />
<Footer /> */}

    </>
  )
}

export default App

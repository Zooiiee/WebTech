//CODE: Single Page Application Using React Router
//npm install --save-dev @babel/plugin-proposal-private-property-in-object
//npm install react@18 react-dom@18

//Index.js

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



//Layout.js
            
import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/*">No Page</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </>
  )
};


export default Layout;



//Home.js

import React from "react";

const Home = () => {
    return <h1>Home Page</h1>;
  };
 
  export default Home;


//Blogs.js

import React from "react";

const Blogs = () => {
    return <h1>Blog Articles</h1>;
  };
 
  export default Blogs;


//Contact.js
import React from "react";

const Contact = () => {
    return <h1>Contact Us</h1>;
  };
 
  export default Contact;


//NoPage.js
import React from "react";

const NoPage = () => {
    return <h1>404 Page Not Found</h1>;
  };
  export default NoPage;

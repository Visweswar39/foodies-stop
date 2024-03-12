/* eslint-disable jsx-a11y/alt-text */
import React,{lazy,Suspense} from "react";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import ShimmerCard from "./components/Shimmer/ShimmerCard";
// import InstaMart from "./components/InstaMart";

const InstaMart = lazy(()=>import('../src/components/InstaMart'))

function App() {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <Footer />
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
        children: [
          {
            path:'profile',
            element: <Profile />
          }
        ]
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantMenu />,
      },
      {
        path: 'instamart',
        element: <Suspense fallback={<ShimmerCard/>}><InstaMart /></Suspense>,
      },
    ]
  },
  
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/cart',
    element: <Cart />
  },
])



export default App;

import './App.css';
import { Playground } from './components/Navbar.tsx';
import { Link } from 'react-router-dom';
// import setupButton from './components/setupButton';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
  UserButton,
  UserProfile,

} from "@clerk/clerk-react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Footer from './components/Footer';
import axios from 'axios';
export const webAppName = "Connexus";
export const themeColors =  {
  "text": "#2e3e57",
  "background": "#f7fffd",
  "primary": "#C8FFD4",
  "secondary": "#B8E8FC",
  "accent": "#A4A2F9"
};

 
if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}



const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
 
function PublicPage() {
  return (
    <>
      <h1>Public page</h1>
      <a href="/protected">Go to protected page</a>
    </>
  );
}

function SetupPage() {
  return (
    <>
      <SignedIn>

      </SignedIn>
      <SignedOut>
        <ProtectedPage></ProtectedPage>
      </SignedOut>
    </>
  );
}

function SetupButton() {
  return (
    <div className='flex justify-center items-center'>  
        <Link to="/setup">
            <button className='group py-4 px-8 bg-gradient-to-br from-secondary to-accent rounded-2xl hover:scale-[1.03] transition-all ease-in-out duration-300 hover:rotate-[-1deg] hover:drop-shadow-xl shadow-accent'>
                <h1 className='text-2xl font-bold text-text group-hover:text-background'> Setup Your Profile </h1>
            </button>
        </Link> 
    </div>
    
  )
}
 
function ProtectedPage() {
  return (
    <>
      <UserProfile />
    </>
  );
}
 
function ClerkProviderWithRoutes() {
  const navigate = useNavigate();
  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
    >
      <Routes>
        <Route path="/" element={
          <Playground></Playground>
        } />
        <Route
          path="/sign-in/*"
          element={<SignIn 
            routing="path"
            path="/sign-in"
            appearance ={{
              elements: {
                formButtonPrimary: "opacity-0"
              }
            }}
            />}
        />
        <Route
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />
        <Route
          path="/user"
          element={
          <>

            <SignedIn>
              <Playground></Playground>
              <div className='flex justify-center items-center py-20 flex-col gap-10 overflow-x-hidden'>
                <SetupButton/>
                <ProtectedPage />
              </div>
              <Footer className="overflow-x-hidden"></Footer>
            </SignedIn>
             <SignedOut>
              <RedirectToSignIn />
           </SignedOut>
          </>
          }
        />
        <Route
          path="/profile"
          element={
          <>

            <SignedIn>
              <Playground></Playground>
              <div className='flex justify-center items-center py-20 flex-col gap-10'>
                <SetupButton/>
                <ProtectedPage />
              </div>
              <Footer></Footer>
            </SignedIn>
             <SignedOut>
              <RedirectToSignIn />
           </SignedOut>
          </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
}
 
function App() {
  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  );
}
 
export default App;

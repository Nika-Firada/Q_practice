import React from 'react';
import {Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage'
import AboutPage from './pages/AboutPage'
import NotFound from './pages/NotFound'
import Blogpage from './pages/Blogpage'
import Layout from './components/Layout';
import SinglePage from './pages/SinglePage';
import Createpost from './pages/Createpost';
import EdistPost from './pages/EdistPost';
import Loginpage from './pages/Loginpage';
import RequireAuth from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
        <Routes>
            <Route path='/' element={ <Layout /> }>
                <Route index element={<Homepage />}/>
                <Route path='about' element={<AboutPage />}/>
                {/* გადამისამართება  */}
                <Route path='about-us' element={<Navigate to="/about" replace/>}/> 
                <Route path='posts' element={<Blogpage />}/>
                <Route path='posts/:id' element={<SinglePage />}/>
                <Route path='posts/:id/edit' element={<EdistPost />}/>
                <Route path='posts/new' element={
                    <RequireAuth>
                        <Createpost />
                    </RequireAuth>
                }/>
                <Route path='login' element={<Loginpage />}/>
                <Route path='*' element={<NotFound />}/>
            </Route>
        </Routes>
    </AuthProvider>
  )
}

export default App
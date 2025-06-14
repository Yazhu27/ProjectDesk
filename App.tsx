import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import CreateProject from './pages/CreateProject';
import ProjectDetails from './pages/ProjectDetails';
import Deployments from './pages/Deployments';
import Usage from './pages/Usage';
import Teams from './pages/Teams';
import Discover from './pages/Discover';
import Templates from './pages/Templates';
import Search from './pages/Search';
import Chat from './pages/Chat';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/create-project" />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/project-details" element={<ProjectDetails />} />
          <Route path="/deployments" element={<Deployments />} />
          <Route path="/usage" element={<Usage />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/search" element={<Search />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
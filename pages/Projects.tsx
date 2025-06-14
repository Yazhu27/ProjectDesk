import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FolderOpen,
  Calendar,
  Users,
  GitBranch,
  ExternalLink,
  Plus,
  Filter,
  Search,
  MoreVertical,
  Star
} from 'lucide-react';

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      name: 'Portfolio Website',
      description: 'Personal portfolio website built with React and Tailwind CSS',
      status: 'Active',
      date: '2025-01-15',
      members: 3,
      commits: 45,
      language: 'React',
      starred: true
    },
    {
      id: 2,
      name: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      status: 'Active',
      date: '2025-01-10',
      members: 5,
      commits: 128,
      language: 'Next.js',
      starred: false
    },
    {
      id: 3,
      name: 'Task Management App',
      description: 'Collaborative task management application with real-time updates',
      status: 'In Progress',
      date: '2025-01-08',
      members: 4,
      commits: 76,
      language: 'Vue.js',
      starred: true
    },
    {
      id: 4,
      name: 'Analytics Dashboard',
      description: 'Business intelligence dashboard with data visualization',
      status: 'Active',
      date: '2025-01-05',
      members: 6,
      commits: 92,
      language: 'Angular',
      starred: false
    },
    {
      id: 5,
      name: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication',
      status: 'Testing',
      date: '2025-01-03',
      members: 8,
      commits: 203,
      language: 'React Native',
      starred: true
    },
    {
      id: 6,
      name: 'Social Media Platform',
      description: 'Modern social media platform with messaging and content sharing',
      status: 'In Progress',
      date: '2024-12-28',
      members: 7,
      commits: 156,
      language: 'Django',
      starred: false
    },
    {
      id: 7,
      name: 'Learning Management System',
      description: 'Comprehensive LMS for online education and course management',
      status: 'Active',
      date: '2024-12-20',
      members: 9,
      commits: 184,
      language: 'Laravel',
      starred: true
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || project.status.toLowerCase() === filter;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'in progress': return 'bg-blue-100 text-blue-800';
      case 'testing': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-600 mt-1">Manage and track all your projects</p>
        </div>
        <Link
          to="/create-project"
          className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </Link>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="in progress">In Progress</option>
            <option value="testing">Testing</option>
          </select>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center text-sm text-gray-600">
          <span>{filteredProjects.length} projects found</span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <FolderOpen className="w-5 h-5 text-white" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {project.starred && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
                  <button className="p-1 rounded-full hover:bg-gray-100">
                    <MoreVertical className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {project.date}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {project.members}
                </div>
                <div className="flex items-center">
                  <GitBranch className="w-4 h-4 mr-1" />
                  {project.commits}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {project.language}
                </span>
                <Link
                  to="/project-details"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View Details
                  <ExternalLink className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <FolderOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
          <Link
            to="/create-project"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create New Project
          </Link>
        </div>
      )}
    </div>
  );
};

export default Projects;
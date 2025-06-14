import React from 'react';
import { Link } from 'react-router-dom';
import {
  FolderOpen,
  Calendar,
  Users,
  GitBranch,
  Star,
  Settings,
  ExternalLink,
  Activity,
  Code,
  Download,
  Share2
} from 'lucide-react';

const ProjectDetails: React.FC = () => {
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
      starred: true,
      lastActivity: '2 hours ago',
      repository: 'https://github.com/yazhini/portfolio',
      deployment: 'https://yazhini-portfolio.vercel.app'
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
      starred: false,
      lastActivity: '1 day ago',
      repository: 'https://github.com/team/ecommerce',
      deployment: 'https://ecommerce-platform.vercel.app'
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
      starred: true,
      lastActivity: '4 hours ago',
      repository: 'https://github.com/team/task-manager',
      deployment: 'https://task-manager.netlify.app'
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
      starred: false,
      lastActivity: '6 hours ago',
      repository: 'https://github.com/team/analytics',
      deployment: 'https://analytics-dashboard.herokuapp.com'
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
      starred: true,
      lastActivity: '12 hours ago',
      repository: 'https://github.com/team/mobile-banking',
      deployment: 'In Testing Phase'
    }
  ];

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
          <h1 className="text-2xl font-bold text-gray-900">Project Details</h1>
          <p className="text-gray-600 mt-1">Detailed view of all your projects</p>
        </div>
        <Link
          to="/create-project"
          className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <FolderOpen className="w-4 h-4 mr-2" />
          New Project
        </Link>
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {/* Project Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <FolderOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center">
                      <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
                      {project.starred && (
                        <Star className="w-5 h-5 text-yellow-500 fill-current ml-2" />
                      )}
                    </div>
                    <p className="text-gray-600 mt-1">{project.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <Settings className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>

            {/* Project Stats */}
            <div className="p-6 bg-gray-50">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Created</p>
                    <p className="text-sm font-medium text-gray-900">{project.date}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-gray-400 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Members</p>
                    <p className="text-sm font-medium text-gray-900">{project.members}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <GitBranch className="w-5 h-5 text-gray-400 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Commits</p>
                    <p className="text-sm font-medium text-gray-900">{project.commits}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Activity className="w-5 h-5 text-gray-400 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Last Activity</p>
                    <p className="text-sm font-medium text-gray-900">{project.lastActivity}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Technology</h4>
                  <div className="flex items-center">
                    <Code className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      {project.language}
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Quick Actions</h4>
                  <div className="flex items-center space-x-3">
                    <button className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors duration-200 text-sm">
                      <Download className="w-3 h-3 mr-1" />
                      Clone
                    </button>
                    <button className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors duration-200 text-sm">
                      <Share2 className="w-3 h-3 mr-1" />
                      Share
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center space-x-6">
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      <GitBranch className="w-4 h-4 mr-1" />
                      View Repository
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                    {project.deployment !== 'In Testing Phase' && (
                      <a
                        href={project.deployment}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-600 hover:text-green-700 text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
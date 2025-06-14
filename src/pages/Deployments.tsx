import React, { useState } from 'react';
import {
  Rocket,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  ExternalLink,
  GitBranch,
  RefreshCw,
  Play,
  Square,
  Plus
} from 'lucide-react';

const Deployments: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const handleNewDeployment = () => {
    alert('New deployment wizard would open here. This would guide you through selecting a project, branch, and deployment settings.');
  };

  const deployments = [
    {
      id: 1,
      projectName: 'Portfolio Website',
      branch: 'main',
      status: 'success',
      environment: 'production',
      deployedAt: '2025-01-15 14:30',
      duration: '2m 45s',
      url: 'https://yazhini-portfolio.vercel.app',
      commit: 'abc123f',
      commitMessage: 'Update hero section design'
    },
    {
      id: 2,
      projectName: 'E-commerce Platform',
      branch: 'main',
      status: 'success',
      environment: 'production',
      deployedAt: '2025-01-14 16:20',
      duration: '4m 12s',
      url: 'https://ecommerce-platform.vercel.app',
      commit: 'def456g',
      commitMessage: 'Add payment gateway integration'
    },
    {
      id: 3,
      projectName: 'Task Management App',
      branch: 'develop',
      status: 'in-progress',
      environment: 'staging',
      deployedAt: '2025-01-15 10:15',
      duration: '3m 28s',
      url: 'https://task-manager-staging.netlify.app',
      commit: 'ghi789h',
      commitMessage: 'Implement real-time notifications'
    },
    {
      id: 4,
      projectName: 'Analytics Dashboard',
      branch: 'main',
      status: 'failed',
      environment: 'production',
      deployedAt: '2025-01-13 09:45',
      duration: '1m 33s',
      url: 'https://analytics-dashboard.herokuapp.com',
      commit: 'jkl012i',
      commitMessage: 'Fix data visualization charts'
    },
    {
      id: 5,
      projectName: 'Mobile Banking App',
      branch: 'feature/biometric',
      status: 'success',
      environment: 'testing',
      deployedAt: '2025-01-12 11:30',
      duration: '5m 17s',
      url: 'https://mobile-banking-test.herokuapp.com',
      commit: 'mno345j',
      commitMessage: 'Add biometric authentication'
    },
    {
      id: 6,
      projectName: 'Social Media Platform',
      branch: 'main',
      status: 'success',
      environment: 'production',
      deployedAt: '2025-01-11 15:45',
      duration: '3m 56s',
      url: 'https://social-platform.vercel.app',
      commit: 'pqr678k',
      commitMessage: 'Optimize messaging performance'
    },
    {
      id: 7,
      projectName: 'Learning Management System',
      branch: 'main',
      status: 'success',
      environment: 'production',
      deployedAt: '2025-01-10 13:20',
      duration: '4m 41s',
      url: 'https://lms-platform.netlify.app',
      commit: 'stu901l',
      commitMessage: 'Add video streaming support'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'failed':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'in-progress':
        return <RefreshCw className="w-5 h-5 text-blue-500 animate-spin" />;
      default:
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'bg-green-100 text-green-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  const getEnvironmentColor = (environment: string) => {
    switch (environment) {
      case 'production':
        return 'bg-purple-100 text-purple-800';
      case 'staging':
        return 'bg-orange-100 text-orange-800';
      case 'testing':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredDeployments = deployments.filter(deployment => {
    if (filter === 'all') return true;
    return deployment.status === filter;
  });

  const stats = {
    total: deployments.length,
    success: deployments.filter(d => d.status === 'success').length,
    failed: deployments.filter(d => d.status === 'failed').length,
    inProgress: deployments.filter(d => d.status === 'in-progress').length
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Deployments</h1>
          <p className="text-gray-600 mt-1">Monitor and manage your application deployments</p>
        </div>
        <button 
          onClick={handleNewDeployment}
          className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <Rocket className="w-4 h-4 mr-2" />
          New Deployment
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Rocket className="w-5 h-5 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Deployments</p>
              <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Successful</p>
              <p className="text-2xl font-bold text-gray-900">{stats.success}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <XCircle className="w-5 h-5 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Failed</p>
              <p className="text-2xl font-bold text-gray-900">{stats.failed}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <RefreshCw className="w-5 h-5 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">In Progress</p>
              <p className="text-2xl font-bold text-gray-900">{stats.inProgress}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-gray-700">Filter by status:</span>
          <div className="flex space-x-2">
            {['all', 'success', 'failed', 'in-progress'].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  filter === status
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Deployments List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Project & Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Branch & Commit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Environment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deployed
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Duration
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredDeployments.map((deployment) => (
                <tr key={deployment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getStatusIcon(deployment.status)}
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">
                          {deployment.projectName}
                        </div>
                        <div className="text-sm text-gray-500">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(deployment.status)}`}>
                            {deployment.status.replace('-', ' ')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900">
                      <GitBranch className="w-4 h-4 mr-2 text-gray-400" />
                      <div>
                        <div className="font-medium">{deployment.branch}</div>
                        <div className="text-gray-500 text-xs">
                          {deployment.commit} • {deployment.commitMessage}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getEnvironmentColor(deployment.environment)}`}>
                      {deployment.environment}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      {deployment.deployedAt}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      {deployment.duration}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      {deployment.status === 'success' && (
                        <a
                          href={deployment.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 flex items-center"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          View
                        </a>
                      )}
                      <button 
                        onClick={() => alert('Redeploy functionality would be implemented here')}
                        className="text-gray-600 hover:text-gray-700"
                      >
                        <RefreshCw className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Deployments;
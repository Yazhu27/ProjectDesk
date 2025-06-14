import React from 'react';
import { Link } from 'react-router-dom';
import {
  FolderOpen,
  Users,
  Rocket,
  BarChart3,
  Plus,
  MessageCircle,
  FileText,
  Search,
  TrendingUp,
  Activity,
  Clock,
  CheckCircle
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { name: 'Total Projects', value: '7', icon: FolderOpen, color: 'bg-blue-500' },
    { name: 'Team Members', value: '15', icon: Users, color: 'bg-green-500' },
    { name: 'Deployments', value: '23', icon: Rocket, color: 'bg-purple-500' },
    { name: 'Active Users', value: '12', icon: Activity, color: 'bg-orange-500' },
  ];

  const recentActivity = [
    { action: 'Project "E-commerce Platform" deployed', time: '2 hours ago', status: 'success' },
    { action: 'Team member "Chen Wei" joined', time: '4 hours ago', status: 'info' },
    { action: 'New template "React Dashboard" created', time: '6 hours ago', status: 'info' },
    { action: 'Deployment "Portfolio Website" completed', time: '1 day ago', status: 'success' },
    { action: 'Usage analytics report generated', time: '2 days ago', status: 'info' },
  ];

  const quickActions = [
    { name: 'Create Project', href: '/create-project', icon: Plus, color: 'bg-blue-500' },
    { name: 'View Projects', href: '/projects', icon: FolderOpen, color: 'bg-green-500' },
    { name: 'Team Chat', href: '/chat', icon: MessageCircle, color: 'bg-purple-500' },
    { name: 'Deployments', href: '/deployments', icon: Rocket, color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Yazhini!</h1>
        <p className="text-blue-100 text-lg">Here's what's happening with your projects today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className={`${stat.color} rounded-lg p-3`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link
                key={action.name}
                to={action.href}
                className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200"
              >
                <div className={`${action.color} rounded-lg p-2 mr-3`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-900">{action.name}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Core Features */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
              <FolderOpen className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-medium text-gray-900 mb-2">Project Management</h3>
              <p className="text-sm text-gray-600">Create, manage, and track your projects with ease.</p>
            </div>
            <div className="p-4 rounded-lg bg-green-50 border border-green-200">
              <Rocket className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-medium text-gray-900 mb-2">Deployment</h3>
              <p className="text-sm text-gray-600">Deploy your applications with one-click deployment.</p>
            </div>
            <div className="p-4 rounded-lg bg-purple-50 border border-purple-200">
              <Users className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-medium text-gray-900 mb-2">Team Collaboration</h3>
              <p className="text-sm text-gray-600">Work together with your team members seamlessly.</p>
            </div>
            <div className="p-4 rounded-lg bg-orange-50 border border-orange-200">
              <BarChart3 className="w-8 h-8 text-orange-600 mb-3" />
              <h3 className="font-medium text-gray-900 mb-2">Analytics</h3>
              <p className="text-sm text-gray-600">Monitor usage and performance metrics.</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.status === 'success' ? 'bg-green-500' : 'bg-blue-500'
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500 flex items-center mt-1">
                    <Clock className="w-3 h-3 mr-1" />
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Tools */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Additional Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/templates" className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200">
            <FileText className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-medium text-gray-900 mb-2">Templates</h3>
            <p className="text-sm text-gray-600">Browse and use project templates</p>
          </Link>
          <Link to="/search" className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200">
            <Search className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="font-medium text-gray-900 mb-2">Search</h3>
            <p className="text-sm text-gray-600">Find projects, templates, and resources</p>
          </Link>
          <Link to="/discover" className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200">
            <TrendingUp className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="font-medium text-gray-900 mb-2">Discover</h3>
            <p className="text-sm text-gray-600">Explore trending projects and features</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
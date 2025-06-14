import React, { useState } from 'react';
import {
  Compass,
  TrendingUp,
  Star,
  Users,
  GitBranch,
  Calendar,
  ExternalLink,
  Filter,
  Search,
  Zap,
  Award,
  Bookmark
} from 'lucide-react';

const Discover: React.FC = () => {
  const [activeTab, setActiveTab] = useState('trending');
  const [searchTerm, setSearchTerm] = useState('');

  const handleViewProject = (projectName: string) => {
    alert(`View project "${projectName}" would open here with detailed information, code repository, and live demo.`);
  };

  const handleExploreWorkspace = (workspaceName: string) => {
    alert(`Explore workspace "${workspaceName}" would open here with all projects, members, and collaboration tools.`);
  };

  const trendingProjects = [
    {
      id: 1,
      name: 'AI-Powered Analytics Platform',
      description: 'Next-generation business intelligence platform with machine learning capabilities',
      category: 'Analytics',
      stars: 2847,
      forks: 456,
      contributors: 23,
      language: 'Python',
      trending: '+1.2K stars this week',
      author: 'DataTech Solutions',
      featured: true
    },
    {
      id: 2,
      name: 'React Native E-commerce Kit',
      description: 'Complete e-commerce solution for mobile apps with payment integration',
      category: 'Mobile',
      stars: 1923,
      forks: 334,
      contributors: 18,
      language: 'React Native',
      trending: '+856 stars this week',
      author: 'MobileDevs',
      featured: false
    },
    {
      id: 3,
      name: 'Blockchain Voting System',
      description: 'Secure and transparent voting platform built on blockchain technology',
      category: 'Blockchain',
      stars: 1456,
      forks: 289,
      contributors: 12,
      language: 'Solidity',
      trending: '+623 stars this week',
      author: 'CryptoGov',
      featured: true
    },
    {
      id: 4,
      name: 'CloudOps Automation Suite',
      description: 'Comprehensive DevOps automation tools for cloud infrastructure management',
      category: 'DevOps',
      stars: 3421,
      forks: 678,
      contributors: 34,
      language: 'Go',
      trending: '+1.5K stars this week',
      author: 'CloudTech',
      featured: false
    },
    {
      id: 5,
      name: 'Neural Network Visualizer',
      description: 'Interactive tool for visualizing and understanding neural network architectures',
      category: 'Machine Learning',
      stars: 987,
      forks: 156,
      contributors: 8,
      language: 'JavaScript',
      trending: '+432 stars this week',
      author: 'ML Visualizations',
      featured: true
    }
  ];

  const featuredWorkspaces = [
    {
      id: 1,
      name: 'Modern Web Development',
      description: 'Curated collection of modern web development tools and frameworks',
      projects: 28,
      followers: 5643,
      category: 'Web Development',
      curator: 'WebDev Community'
    },
    {
      id: 2,
      name: 'AI & Machine Learning Hub',
      description: 'Latest AI/ML projects, datasets, and research implementations',
      projects: 42,
      followers: 8921,
      category: 'Artificial Intelligence',
      curator: 'AI Research Group'
    },
    {
      id: 3,
      name: 'Mobile-First Solutions',
      description: 'Cross-platform mobile development resources and starter kits',
      projects: 19,
      followers: 3456,
      category: 'Mobile Development',
      curator: 'Mobile Innovators'
    },
    {
      id: 4,
      name: 'Cloud Native Ecosystem',
      description: 'Kubernetes, Docker, and cloud-native application development',
      projects: 35,
      followers: 7234,
      category: 'Cloud Computing',
      curator: 'Cloud Native Foundation'
    }
  ];

  const categories = [
    { name: 'All', count: 156, active: true },
    { name: 'Web Development', count: 42, active: false },
    { name: 'Mobile', count: 28, active: false },
    { name: 'AI/ML', count: 35, active: false },
    { name: 'Blockchain', count: 19, active: false },
    { name: 'DevOps', count: 23, active: false },
    { name: 'Data Science', count: 31, active: false }
  ];

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      'Python': 'bg-blue-100 text-blue-800',
      'JavaScript': 'bg-yellow-100 text-yellow-800',
      'React Native': 'bg-blue-100 text-blue-800',
      'Solidity': 'bg-gray-100 text-gray-800',
      'Go': 'bg-green-100 text-green-800',
      'TypeScript': 'bg-blue-100 text-blue-800'
    };
    return colors[language] || 'bg-gray-100 text-gray-800';
  };

  const filteredProjects = trendingProjects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
        <div className="flex items-center mb-4">
          <Compass className="w-8 h-8 mr-3" />
          <h1 className="text-3xl font-bold">Discover Workspace</h1>
        </div>
        <p className="text-blue-100 text-lg">
          Explore trending projects, innovative solutions, and collaborative workspaces from the developer community
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('trending')}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${
              activeTab === 'trending'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <TrendingUp className="w-4 h-4 inline mr-2" />
            Trending Projects
          </button>
          <button
            onClick={() => setActiveTab('workspaces')}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${
              activeTab === 'workspaces'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <Users className="w-4 h-4 inline mr-2" />
            Featured Workspaces
          </button>
          <button
            onClick={() => setActiveTab('categories')}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${
              activeTab === 'categories'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <Filter className="w-4 h-4 inline mr-2" />
            Categories
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects, workspaces, or technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === 'trending' && (
            <div className="space-y-6">
              {filteredProjects.map((project) => (
                <div key={project.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 mr-2">{project.name}</h3>
                        {project.featured && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            <Award className="w-3 h-3 mr-1" />
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-3">{project.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          {project.stars.toLocaleString()}
                        </span>
                        <span className="flex items-center">
                          <GitBranch className="w-4 h-4 mr-1" />
                          {project.forks}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {project.contributors}
                        </span>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getLanguageColor(project.language)}`}>
                          {project.language}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 rounded-full hover:bg-gray-100">
                        <Star className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="p-2 rounded-full hover:bg-gray-100">
                        <Bookmark className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Zap className="w-4 h-4 mr-1 text-green-500" />
                      <span className="text-green-600 font-medium">{project.trending}</span>
                      <span className="mx-2">•</span>
                      <span>by {project.author}</span>
                    </div>
                    <button 
                      onClick={() => handleViewProject(project.name)}
                      className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors duration-200 text-sm"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View Project
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'workspaces' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredWorkspaces.map((workspace) => (
                <div key={workspace.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{workspace.name}</h3>
                      <p className="text-gray-600 mb-3">{workspace.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {workspace.projects} projects
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {workspace.followers.toLocaleString()} followers
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {workspace.category}
                      </span>
                      <span className="ml-2">by {workspace.curator}</span>
                    </div>
                    <button 
                      onClick={() => handleExploreWorkspace(workspace.name)}
                      className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors duration-200 text-sm"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Explore
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'categories' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-colors duration-200 ${
                    category.active
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900">{category.name}</h3>
                    <span className="text-sm text-gray-500">{category.count} projects</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Discover;
import React, { useState } from 'react';
import {
  Search as SearchIcon,
  Filter,
  Clock,
  TrendingUp,
  FileText,
  Users,
  Code,
  Bookmark,
  ExternalLink,
  Star,
  Calendar,
  Tag,
  Zap,
  Settings
} from 'lucide-react';

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');

  const handleViewResult = (resultTitle: string) => {
    alert(`View "${resultTitle}" would open here with detailed information and access to the resource.`);
  };

  const handleOpenSettings = () => {
    alert('Search settings would open here allowing you to customize search preferences, filters, and result display options.');
  };

  const searchResults = [
    {
      id: 1,
      type: 'project',
      title: 'React E-commerce Dashboard',
      description: 'Modern e-commerce admin dashboard built with React, TypeScript, and Tailwind CSS. Features include order management, analytics, and inventory tracking.',
      category: 'Web Development',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Dashboard'],
      author: 'Sarah Chen',
      date: '2025-01-15',
      stars: 1247,
      url: 'https://github.com/sarahchen/react-ecommerce-dashboard',
      featured: true
    },
    {
      id: 2,
      type: 'template',
      title: 'Mobile Banking App Template',
      description: 'Complete React Native template for mobile banking applications with biometric authentication, transaction history, and secure payment processing.',
      category: 'Mobile Development',
      tags: ['React Native', 'Banking', 'Security', 'Mobile'],
      author: 'FinTech Solutions',
      date: '2025-01-12',
      downloads: 3421,
      url: 'https://templates.com/mobile-banking-app',
      featured: false
    },
    {
      id: 3,
      type: 'workspace',
      title: 'AI & Machine Learning Hub',
      description: 'Collaborative workspace featuring the latest AI/ML projects, research papers, datasets, and implementation guides for data scientists and ML engineers.',
      category: 'Artificial Intelligence',
      tags: ['AI', 'Machine Learning', 'Data Science', 'Research'],
      author: 'ML Community',
      date: '2025-01-10',
      members: 8921,
      url: 'https://workspace.com/ai-ml-hub',
      featured: true
    },
    {
      id: 4,
      type: 'project',
      title: 'Blockchain Voting System',
      description: 'Decentralized voting platform built on Ethereum blockchain ensuring transparency, security, and immutability of election processes.',
      category: 'Blockchain',
      tags: ['Blockchain', 'Ethereum', 'Voting', 'Smart Contracts'],
      author: 'CryptoGov Team',
      date: '2025-01-08',
      stars: 892,
      url: 'https://github.com/cryptogov/blockchain-voting',
      featured: false
    },
    {
      id: 5,
      type: 'resource',
      title: 'Complete DevOps Automation Guide',
      description: 'Comprehensive guide covering CI/CD pipelines, containerization, orchestration, and infrastructure as code best practices.',
      category: 'DevOps',
      tags: ['DevOps', 'CI/CD', 'Docker', 'Kubernetes'],
      author: 'DevOps Masters',
      date: '2025-01-05',
      views: 15420,
      url: 'https://devops-guide.com/automation',
      featured: true
    },
    {
      id: 6,
      type: 'template',
      title: 'SaaS Landing Page Kit',
      description: 'High-converting landing page template designed specifically for SaaS products with pricing tables, testimonials, and conversion optimization.',
      category: 'Marketing',
      tags: ['SaaS', 'Landing Page', 'Marketing', 'Conversion'],
      author: 'Marketing Pro',
      date: '2025-01-03',
      downloads: 2156,
      url: 'https://templates.com/saas-landing-kit',
      featured: false
    },
    {
      id: 7,
      type: 'project',
      title: 'Neural Network Visualizer',
      description: 'Interactive web application for visualizing and understanding neural network architectures, training processes, and decision boundaries.',
      category: 'Machine Learning',
      tags: ['Neural Networks', 'Visualization', 'Education', 'Interactive'],
      author: 'AI Educators',
      date: '2024-12-28',
      stars: 567,
      url: 'https://github.com/ai-educators/nn-visualizer',
      featured: false
    },
    {
      id: 8,
      type: 'workspace',
      title: 'Cloud Native Development',
      description: 'Workspace dedicated to cloud-native application development with Kubernetes, microservices, and serverless architectures.',
      category: 'Cloud Computing',
      tags: ['Cloud Native', 'Kubernetes', 'Microservices', 'Serverless'],
      author: 'Cloud Architects',
      date: '2024-12-25',
      members: 5643,
      url: 'https://workspace.com/cloud-native-dev',
      featured: true
    }
  ];

  const filters = [
    { id: 'all', name: 'All Results', count: searchResults.length },
    { id: 'project', name: 'Projects', count: searchResults.filter(r => r.type === 'project').length },
    { id: 'template', name: 'Templates', count: searchResults.filter(r => r.type === 'template').length },
    { id: 'workspace', name: 'Workspaces', count: searchResults.filter(r => r.type === 'workspace').length },
    { id: 'resource', name: 'Resources', count: searchResults.filter(r => r.type === 'resource').length }
  ];

  const recentSearches = [
    'React dashboard template',
    'Machine learning projects',
    'Node.js authentication',
    'Mobile app UI kit',
    'DevOps automation tools'
  ];

  const trendingSearches = [
    'AI chatbot implementation',
    'Blockchain development',
    'React Native templates',
    'Cloud deployment guides',
    'Data visualization tools'
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'project':
        return <Code className="w-4 h-4" />;
      case 'template':
        return <FileText className="w-4 h-4" />;
      case 'workspace':
        return <Users className="w-4 h-4" />;
      case 'resource':
        return <Bookmark className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'project':
        return 'bg-blue-100 text-blue-800';
      case 'template':
        return 'bg-green-100 text-green-800';
      case 'workspace':
        return 'bg-purple-100 text-purple-800';
      case 'resource':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredResults = searchResults.filter(result => {
    if (activeFilter === 'all') return true;
    return result.type === activeFilter;
  });

  const sortedResults = [...filteredResults].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'popularity':
        const aPopularity = a.stars || a.downloads || a.members || a.views || 0;
        const bPopularity = b.stars || b.downloads || b.members || b.views || 0;
        return bPopularity - aPopularity;
      default:
        return 0; // relevance (keep original order)
    }
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <SearchIcon className="w-8 h-8 mr-3" />
            <h1 className="text-3xl font-bold">Search Hub</h1>
          </div>
          <button 
            onClick={handleOpenSettings}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center"
          >
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </button>
        </div>
        <p className="text-green-100 text-lg">
          Find projects, templates, workspaces, and resources across our entire platform
        </p>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="relative mb-4">
          <SearchIcon className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search for projects, templates, workspaces, or resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter.name} ({filter.count})
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="relevance">Relevance</option>
              <option value="date">Date</option>
              <option value="popularity">Popularity</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Recent Searches */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Recent Searches
            </h3>
            <div className="space-y-2">
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(search)}
                  className="block w-full text-left text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded transition-colors duration-200"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>

          {/* Trending Searches */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Trending Searches
            </h3>
            <div className="space-y-2">
              {trendingSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(search)}
                  className="block w-full text-left text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded transition-colors duration-200"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Search Results */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">
                  Search Results ({sortedResults.length})
                </h2>
                {searchQuery && (
                  <span className="text-sm text-gray-500">
                    Results for "{searchQuery}"
                  </span>
                )}
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              {sortedResults.map((result) => (
                <div key={result.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mr-3 ${getTypeColor(result.type)}`}>
                          {getTypeIcon(result.type)}
                          <span className="ml-1 capitalize">{result.type}</span>
                        </span>
                        {result.featured && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            <Zap className="w-3 h-3 mr-1" />
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{result.title}</h3>
                      <p className="text-gray-600 mb-3">{result.description}</p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {result.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Metadata */}
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {result.author}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {result.date}
                        </span>
                        {result.stars && (
                          <span className="flex items-center">
                            <Star className="w-4 h-4 mr-1" />
                            {result.stars.toLocaleString()} stars
                          </span>
                        )}
                        {result.downloads && (
                          <span className="flex items-center">
                            <FileText className="w-4 h-4 mr-1" />
                            {result.downloads.toLocaleString()} downloads
                          </span>
                        )}
                        {result.members && (
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {result.members.toLocaleString()} members
                          </span>
                        )}
                        {result.views && (
                          <span className="flex items-center">
                            <SearchIcon className="w-4 h-4 mr-1" />
                            {result.views.toLocaleString()} views
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => handleViewResult(result.title)}
                        className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors duration-200 text-sm"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {sortedResults.length === 0 && (
              <div className="p-12 text-center">
                <SearchIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search terms or filters to find what you're looking for
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveFilter('all');
                  }}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
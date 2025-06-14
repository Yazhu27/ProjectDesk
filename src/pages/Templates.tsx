import React, { useState } from 'react';
import {
  FileText,
  Download,
  Star,
  Users,
  Clock,
  Search,
  Filter,
  ExternalLink,
  Code,
  Zap,
  Layers,
  Smartphone,
  Globe,
  Database
} from 'lucide-react';

const Templates: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const templates = [
    {
      id: 1,
      name: 'Modern React Dashboard',
      description: 'Complete admin dashboard with authentication, charts, and responsive design',
      category: 'React',
      type: 'Web Application',
      downloads: 15420,
      stars: 2847,
      difficulty: 'Intermediate',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      author: 'UI Templates',
      updatedAt: '2025-01-10',
      featured: true,
      preview: 'https://react-dashboard-demo.vercel.app'
    },
    {
      id: 2,
      name: 'E-commerce Store Template',
      description: 'Full-featured online store with payment integration and inventory management',
      category: 'Next.js',
      type: 'E-commerce',
      downloads: 8934,
      stars: 1923,
      difficulty: 'Advanced',
      tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma'],
      author: 'Commerce Solutions',
      updatedAt: '2025-01-08',
      featured: true,
      preview: 'https://ecommerce-template-demo.vercel.app'
    },
    {
      id: 3,
      name: 'Mobile App Starter Kit',
      description: 'Cross-platform mobile app template with navigation and common components',
      category: 'React Native',
      type: 'Mobile Application',
      downloads: 6721,
      stars: 1456,
      difficulty: 'Beginner',
      tags: ['React Native', 'Expo', 'Redux', 'Firebase'],
      author: 'Mobile Devs',
      updatedAt: '2025-01-05',
      featured: false,
      preview: 'https://mobile-app-demo.expo.dev'
    },
    {
      id: 4,
      name: 'Landing Page Pro',
      description: 'High-converting landing page with animations and contact forms',
      category: 'HTML/CSS',
      type: 'Marketing',
      downloads: 12543,
      stars: 3421,
      difficulty: 'Beginner',
      tags: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
      author: 'Marketing Templates',
      updatedAt: '2025-01-12',
      featured: true,
      preview: 'https://landing-page-pro.netlify.app'
    },
    {
      id: 5,
      name: 'Blog Platform Template',
      description: 'Modern blog with CMS integration, SEO optimization, and comment system',
      category: 'Vue.js',
      type: 'Content Management',
      downloads: 4567,
      stars: 987,
      difficulty: 'Intermediate',
      tags: ['Vue.js', 'Nuxt.js', 'Contentful', 'Vuetify'],
      author: 'Content Creators',
      updatedAt: '2025-01-03',
      featured: false,
      preview: 'https://blog-template-vue.netlify.app'
    },
    {
      id: 6,
      name: 'Portfolio Website Builder',
      description: 'Customizable portfolio template for developers and designers',
      category: 'Gatsby',
      type: 'Portfolio',
      downloads: 9876,
      stars: 2156,
      difficulty: 'Beginner',
      tags: ['Gatsby', 'GraphQL', 'Styled Components', 'Netlify CMS'],
      author: 'Design Studios',
      updatedAt: '2025-01-15',
      featured: true,
      preview: 'https://portfolio-builder.gatsbyjs.io'
    },
    {
      id: 7,
      name: 'SaaS Application Starter',
      description: 'Complete SaaS boilerplate with subscription management and multi-tenancy',
      category: 'Node.js',
      type: 'SaaS',
      downloads: 3421,
      stars: 1234,
      difficulty: 'Advanced',
      tags: ['Node.js', 'Express', 'MongoDB', 'Stripe'],
      author: 'SaaS Builders',
      updatedAt: '2024-12-28',
      featured: false,
      preview: 'https://saas-starter-demo.herokuapp.com'
    },
    {
      id: 8,
      name: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for data analysis with multiple chart types',
      category: 'Python',
      type: 'Analytics',
      downloads: 2789,
      stars: 876,
      difficulty: 'Intermediate',
      tags: ['Python', 'Django', 'D3.js', 'Pandas'],
      author: 'Data Viz Pro',
      updatedAt: '2025-01-07',
      featured: false,
      preview: 'https://data-dashboard-python.herokuapp.com'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Templates', icon: FileText, count: templates.length },
    { id: 'React', name: 'React', icon: Code, count: templates.filter(t => t.category === 'React').length },
    { id: 'Next.js', name: 'Next.js', icon: Globe, count: templates.filter(t => t.category === 'Next.js').length },
    { id: 'React Native', name: 'React Native', icon: Smartphone, count: templates.filter(t => t.category === 'React Native').length },
    { id: 'Vue.js', name: 'Vue.js', icon: Layers, count: templates.filter(t => t.category === 'Vue.js').length },
    { id: 'Node.js', name: 'Node.js', icon: Database, count: templates.filter(t => t.category === 'Node.js').length },
    { id: 'HTML/CSS', name: 'HTML/CSS', icon: Globe, count: templates.filter(t => t.category === 'HTML/CSS').length }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedTemplates = [...filteredTemplates].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.downloads - a.downloads;
      case 'newest':
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      case 'stars':
        return b.stars - a.stars;
      default:
        return 0;
    }
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 text-white">
        <div className="flex items-center mb-4">
          <FileText className="w-8 h-8 mr-3" />
          <h1 className="text-3xl font-bold">Template Library</h1>
        </div>
        <p className="text-purple-100 text-lg">
          Jumpstart your next project with our collection of professional, production-ready templates
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="popular">Most Popular</option>
              <option value="newest">Newest</option>
              <option value="stars">Most Starred</option>
            </select>
            <span className="text-sm text-gray-600">
              {sortedTemplates.length} templates
            </span>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-4 rounded-lg border-2 transition-colors duration-200 ${
                selectedCategory === category.id
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Icon className={`w-6 h-6 mx-auto mb-2 ${
                selectedCategory === category.id ? 'text-purple-600' : 'text-gray-400'
              }`} />
              <div className="text-sm font-medium text-gray-900">{category.name}</div>
              <div className="text-xs text-gray-500">{category.count}</div>
            </button>
          );
        })}
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedTemplates.map((template) => (
          <div key={template.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
            {/* Template Header */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 mr-2">{template.name}</h3>
                    {template.featured && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        <Zap className="w-3 h-3 mr-1" />
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{template.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      {template.downloads.toLocaleString()}
                    </span>
                    <span className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {template.stars.toLocaleString()}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {template.updatedAt}
                    </span>
                  </div>
                </div>
              </div>

              {/* Template Details */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Category</span>
                  <span className="text-sm font-medium text-gray-900">{template.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Type</span>
                  <span className="text-sm font-medium text-gray-900">{template.type}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Difficulty</span>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(template.difficulty)}`}>
                    {template.difficulty}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Author</span>
                  <span className="text-sm font-medium text-gray-900">{template.author}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {template.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Template Actions */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <a
                  href={template.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors duration-200 text-sm"
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Preview
                </a>
                <button className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 text-sm">
                  <Download className="w-4 h-4 mr-2" />
                  Use Template
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {sortedTemplates.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No templates found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
            className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Templates;
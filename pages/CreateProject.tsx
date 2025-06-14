import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, FolderOpen, GitBranch, Settings, Users } from 'lucide-react';

const CreateProject: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    template: 'react',
    visibility: 'private',
    repository: '',
    team: []
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Creating project:', formData);
    // Navigate to projects page after creation
    navigate('/projects');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const templates = [
    { id: 'react', name: 'React', description: 'Modern React application with TypeScript' },
    { id: 'nextjs', name: 'Next.js', description: 'Full-stack React framework' },
    { id: 'vue', name: 'Vue.js', description: 'Progressive JavaScript framework' },
    { id: 'angular', name: 'Angular', description: 'Platform for building mobile and desktop apps' },
    { id: 'node', name: 'Node.js', description: 'Backend JavaScript runtime' },
    { id: 'python', name: 'Python', description: 'Django or Flask web application' },
    { id: 'blank', name: 'Blank', description: 'Start from scratch' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900">Create New Project</h1>
          <p className="text-gray-600 mt-1">Set up a new project with your preferred configuration</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Basic Information */}
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Name *
                </label>
                <div className="relative">
                  <FolderOpen className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter project name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your project..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="repository" className="block text-sm font-medium text-gray-700 mb-2">
                  Repository URL (Optional)
                </label>
                <div className="relative">
                  <GitBranch className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="url"
                    id="repository"
                    name="repository"
                    value={formData.repository}
                    onChange={handleChange}
                    placeholder="https://github.com/username/repo"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="visibility" className="block text-sm font-medium text-gray-700 mb-2">
                  Visibility
                </label>
                <select
                  id="visibility"
                  name="visibility"
                  value={formData.visibility}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="private">Private</option>
                  <option value="public">Public</option>
                  <option value="team">Team Only</option>
                </select>
              </div>
            </div>

            {/* Right Column - Template Selection */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Choose Template
                </label>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {templates.map((template) => (
                    <label
                      key={template.id}
                      className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-colors duration-200 ${
                        formData.template === template.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="template"
                        value={template.id}
                        checked={formData.template === template.id}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className="flex-1">
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full mr-3 ${
                            formData.template === template.id ? 'bg-blue-500' : 'bg-gray-300'
                          }`} />
                          <h3 className="text-sm font-medium text-gray-900">{template.name}</h3>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 ml-6">{template.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project Settings */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              Project Settings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Initialize with README</span>
                </label>
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Add .gitignore</span>
                </label>
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Enable CI/CD</span>
                </label>
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Auto-deploy</span>
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex items-center justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate('/projects')}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
import React, { useState } from 'react';
import {
  Users,
  UserPlus,
  Mail,
  MapPin,
  Crown,
  Shield,
  Code,
  BarChart3,
  Search,
  Filter,
  MoreVertical,
  ExternalLink
} from 'lucide-react';

const Teams: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');

  const handleInviteMember = () => {
    alert('Invite member dialog would open here. You could enter email addresses and assign roles.');
  };

  const handleViewProfile = (memberName: string) => {
    alert(`View profile for ${memberName} would open here with detailed information, project assignments, and activity history.`);
  };

  const teamMembers = [
    {
      id: 1,
      name: 'Yazhini S',
      email: 'yazhini.s@team.com',
      role: 'OWNER',
      title: 'Lead Engineer',
      region: 'South India',
      avatar: 'YS',
      joinDate: '2024-01-15',
      lastActive: 'Online now'
    },
    {
      id: 2,
      name: 'Aarav Mehta',
      email: 'aarav.mehta@team.com',
      role: 'ADMIN',
      title: 'Product Manager',
      region: 'North India',
      avatar: 'AM',
      joinDate: '2024-02-01',
      lastActive: '2 hours ago'
    },
    {
      id: 3,
      name: 'Priya Narayanan',
      email: 'priya.n@team.com',
      role: 'ADMIN',
      title: 'Data Strategist',
      region: 'South India',
      avatar: 'PN',
      joinDate: '2024-02-10',
      lastActive: '1 hour ago'
    },
    {
      id: 4,
      name: 'Jacob Williams',
      email: 'jacob.w@team.com',
      role: 'ADMIN',
      title: 'Tech Architect',
      region: 'USA',
      avatar: 'JW',
      joinDate: '2024-02-15',
      lastActive: '4 hours ago'
    },
    {
      id: 5,
      name: 'Divya Sharma',
      email: 'divya.sharma@team.com',
      role: 'DEVELOPER',
      title: 'Frontend Developer',
      region: 'North India',
      avatar: 'DS',
      joinDate: '2024-03-01',
      lastActive: '30 minutes ago'
    },
    {
      id: 6,
      name: 'Arjun Raj',
      email: 'arjun.raj@team.com',
      role: 'DEVELOPER',
      title: 'Backend Developer',
      region: 'South India',
      avatar: 'AR',
      joinDate: '2024-03-05',
      lastActive: '1 day ago'
    },
    {
      id: 7,
      name: 'Chen Wei',
      email: 'chen.wei@team.com',
      role: 'DEVELOPER',
      title: 'Full Stack Developer',
      region: 'China',
      avatar: 'CW',
      joinDate: '2024-03-10',
      lastActive: '3 hours ago'
    },
    {
      id: 8,
      name: 'Anjali Kapoor',
      email: 'anjali.kapoor@team.com',
      role: 'ANALYST',
      title: 'Data Analyst',
      region: 'North India',
      avatar: 'AK',
      joinDate: '2024-03-15',
      lastActive: '2 days ago'
    },
    {
      id: 9,
      name: 'Ravi Sankar',
      email: 'ravi.s@team.com',
      role: 'DEVELOPER',
      title: 'Mobile Developer',
      region: 'South India',
      avatar: 'RS',
      joinDate: '2024-03-20',
      lastActive: '5 hours ago'
    },
    {
      id: 10,
      name: 'Sarah Thompson',
      email: 'sarah.t@team.com',
      role: 'ANALYST',
      title: 'UX Researcher',
      region: 'UK',
      avatar: 'ST',
      joinDate: '2024-04-01',
      lastActive: '6 hours ago'
    },
    {
      id: 11,
      name: 'Nishant Bhatia',
      email: 'nishant.b@team.com',
      role: 'DEVELOPER',
      title: 'DevOps Engineer',
      region: 'North India',
      avatar: 'NB',
      joinDate: '2024-04-05',
      lastActive: '1 hour ago'
    },
    {
      id: 12,
      name: 'Aishwarya Iyer',
      email: 'aishwarya.iyer@team.com',
      role: 'ANALYST',
      title: 'ML Analyst',
      region: 'South India',
      avatar: 'AI',
      joinDate: '2024-04-10',
      lastActive: '8 hours ago'
    },
    {
      id: 13,
      name: 'Omar Ahmed',
      email: 'omar.ahmed@team.com',
      role: 'DEVELOPER',
      title: 'Cloud Engineer',
      region: 'UAE',
      avatar: 'OA',
      joinDate: '2024-04-15',
      lastActive: '12 hours ago'
    },
    {
      id: 14,
      name: 'Haruki Tanaka',
      email: 'haruki.t@team.com',
      role: 'ANALYST',
      title: 'BI Specialist',
      region: 'Japan',
      avatar: 'HT',
      joinDate: '2024-04-20',
      lastActive: '2 hours ago'
    },
    {
      id: 15,
      name: 'Samantha Lee',
      email: 'samantha.lee@team.com',
      role: 'DEVELOPER',
      title: 'QA Engineer',
      region: 'USA',
      avatar: 'SL',
      joinDate: '2024-04-25',
      lastActive: '4 hours ago'
    }
  ];

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'OWNER':
        return <Crown className="w-4 h-4 text-yellow-600" />;
      case 'ADMIN':
        return <Shield className="w-4 h-4 text-blue-600" />;
      case 'DEVELOPER':
        return <Code className="w-4 h-4 text-green-600" />;
      case 'ANALYST':
        return <BarChart3 className="w-4 h-4 text-purple-600" />;
      default:
        return <Users className="w-4 h-4 text-gray-600" />;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'OWNER':
        return 'bg-yellow-100 text-yellow-800';
      case 'ADMIN':
        return 'bg-blue-100 text-blue-800';
      case 'DEVELOPER':
        return 'bg-green-100 text-green-800';
      case 'ANALYST':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || member.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const roleStats = {
    OWNER: teamMembers.filter(m => m.role === 'OWNER').length,
    ADMIN: teamMembers.filter(m => m.role === 'ADMIN').length,
    DEVELOPER: teamMembers.filter(m => m.role === 'DEVELOPER').length,
    ANALYST: teamMembers.filter(m => m.role === 'ANALYST').length
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Team Members</h1>
          <p className="text-gray-600 mt-1">Manage your team and their roles</p>
        </div>
        <button 
          onClick={handleInviteMember}
          className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <UserPlus className="w-4 h-4 mr-2" />
          Invite Member
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Members</p>
              <p className="text-2xl font-bold text-gray-900">15</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Developers</p>
              <p className="text-2xl font-bold text-gray-900">{roleStats.DEVELOPER}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Admins</p>
              <p className="text-2xl font-bold text-gray-900">{roleStats.ADMIN}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Analysts</p>
              <p className="text-2xl font-bold text-gray-900">{roleStats.ANALYST}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Roles</option>
              <option value="OWNER">Owner</option>
              <option value="ADMIN">Admin</option>
              <option value="DEVELOPER">Developer</option>
              <option value="ANALYST">Analyst</option>
            </select>
          </div>
          <div className="text-sm text-gray-600">
            {filteredMembers.length} of {teamMembers.length} members
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          <div key={member.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">{member.avatar}</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.title}</p>
                </div>
              </div>
              <button className="p-1 rounded-full hover:bg-gray-100">
                <MoreVertical className="w-4 h-4 text-gray-400" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">{member.email}</span>
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">{member.region}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {getRoleIcon(member.role)}
                  <span className={`ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(member.role)}`}>
                    {member.role}
                  </span>
                </div>
                <span className="text-xs text-gray-500">{member.lastActive}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Joined {member.joinDate}</span>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => handleViewProfile(member.name)}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
'use client';

import { useState } from 'react';
import Avatar from '@/components/Avatar';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const areaData = [
  { name: 'Jan', users: 4000, revenue: 2400 },
  { name: 'Feb', users: 3000, revenue: 1398 },
  { name: 'Mar', users: 2000, revenue: 9800 },
  { name: 'Apr', users: 2780, revenue: 3908 },
  { name: 'May', users: 1890, revenue: 4800 },
  { name: 'Jun', users: 2390, revenue: 3800 },
  { name: 'Jul', users: 3490, revenue: 4300 },
];

const barData = [
  { name: 'Mobile', value: 400 },
  { name: 'Desktop', value: 300 },
  { name: 'Tablet', value: 200 },
  { name: 'Other', value: 100 },
];

const pieData = [
  { name: 'Active', value: 400 },
  { name: 'Inactive', value: 300 },
  { name: 'Pending', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const activities = [
  { 
    id: 1, 
    content: 'New user registration', 
    time: '2 minutes ago', 
    type: 'user',
    user: {
      name: 'Alice Johnson',
      avatar: null
    }
  },
  { 
    id: 2, 
    content: 'System update completed', 
    time: '1 hour ago', 
    type: 'system',
    user: {
      name: 'System',
      avatar: null
    }
  },
  { 
    id: 3, 
    content: 'Payment processed', 
    time: '3 hours ago', 
    type: 'payment',
    user: {
      name: 'Bob Smith',
      avatar: null
    }
  },
  { 
    id: 4, 
    content: 'New feature deployed', 
    time: '5 hours ago', 
    type: 'deployment',
    user: {
      name: 'Dev Team',
      avatar: null
    }
  },
];

export default function DashboardOverview() {
  const [activeTimeRange, setActiveTimeRange] = useState('7d');

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h1>
        <div className="flex items-center space-x-2">
          {['24h', '7d', '30d', '90d'].map((range) => (
            <button
              key={range}
              onClick={() => setActiveTimeRange(range)}
              className={`px-3 py-1 text-sm font-medium rounded-md ${
                activeTimeRange === range
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { title: 'Total Users', value: '12,345', change: '+12%', color: 'blue' },
          { title: 'Revenue', value: '$45,231', change: '+8%', color: 'green' },
          { title: 'Active Users', value: '1,234', change: '+23%', color: 'indigo' },
          { title: 'Conversion Rate', value: '3.2%', change: '-2%', color: 'yellow' },
        ].map((stat) => (
          <div key={stat.title} className="bg-white rounded-lg shadow p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">{stat.title}</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</dd>
            <dd className={`mt-1 text-sm font-medium text-${stat.color}-600`}>
              {stat.change} from last period
            </dd>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Area Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">User Growth & Revenue</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={areaData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="users"
                  stackId="1"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stackId="2"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Device Distribution</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8">
                  {barData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">User Status Distribution</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {pieData.map((entry, index) => (
              <div key={entry.name} className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span className="text-sm text-gray-600">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Timeline */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
          <div className="flow-root">
            <ul className="-mb-8">
              {activities.map((activity, activityIdx) => (
                <li key={activity.id}>
                  <div className="relative pb-8">
                    {activityIdx !== activities.length - 1 ? (
                      <span
                        className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>
                        <Avatar
                          src={activity.user.avatar}
                          alt={activity.user.name}
                          size="sm"
                          className={`ring-8 ring-white ${
                            activity.type === 'user'
                              ? 'bg-blue-500'
                              : activity.type === 'system'
                              ? 'bg-yellow-500'
                              : activity.type === 'payment'
                              ? 'bg-green-500'
                              : 'bg-purple-500'
                          }`}
                        />
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p className="text-sm text-gray-500">
                            <span className="font-medium text-gray-900 mr-1">
                              {activity.user.name}
                            </span>
                            {activity.content}
                          </p>
                        </div>
                        <div className="text-right text-sm whitespace-nowrap text-gray-500">
                          <time>{activity.time}</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 
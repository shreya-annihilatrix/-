'use client';

import React, { useState, useEffect } from 'react';
import { Bell, X, UserCircle, AlertCircle, CheckCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const HomePage = () => {
  const [notifications, setNotifications] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showReportForm, setShowReportForm] = useState(false);
  const [trackingIssues, setTrackingIssues] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Sample data
  const analyticsData = [
    { month: 'Jan', reported: 65, resolved: 45, pending: 20 },
    { month: 'Feb', reported: 78, resolved: 60, pending: 18 },
    { month: 'Mar', reported: 82, resolved: 70, pending: 12 },
    { month: 'Apr', reported: 95, resolved: 85, pending: 10 }
  ];

  const issueTypes = [
    { name: 'Infrastructure', value: 45, color: '#3B82F6' },
    { name: 'Environmental', value: 30, color: '#10B981' },
    { name: 'Safety', value: 25, color: '#F59E0B' }
  ];

  const recentActivities = [
    { type: 'alert', user: 'System', action: 'New safety guidelines published', time: '30 mins ago', category: 'Announcement', urgency: 'Medium' },
    { type: 'report', user: 'Rahul S.', action: 'reported a streetlight issue', time: '2 hours ago', category: 'Infrastructure', urgency: 'High' },
    { type: 'resolve', user: 'Municipality', action: 'resolved water logging complaint', time: '4 hours ago', category: 'Environmental', urgency: 'Medium' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Login Modal */}
      {showLoginForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
            <button 
              onClick={() => setShowLoginForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Login to Samadhaan</h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email or Phone</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email or phone"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input 
                  type="password" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-800">Forgot password?</a>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white rounded-lg py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Login
              </button>

              <div className="text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="#" className="text-blue-600 hover:text-blue-800">Sign up</a>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Report Issue Modal */}
      {showReportForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
            <button 
              onClick={() => setShowReportForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Report an Issue</h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>Infrastructure</option>
                  <option>Environmental</option>
                  <option>Safety</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={4}
                  placeholder="Enter a description of the issue"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white rounded-lg py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Header */}
      <header 
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-md' 
            : 'bg-black/30 backdrop-blur-sm'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <span className={`text-2xl font-bold ${
                isScrolled ? 'text-blue-600' : 'text-white'
              }`}>
                समाधान
              </span>
              <button 
                className={`px-4 py-2 ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                }`}
                onClick={() => setNotifications(!notifications)}
              >
                <Bell className="h-5 w-5" />
              </button>
            </div>

            <button 
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => setShowLoginForm(true)}
            >
              <UserCircle className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Notifications Dropdown */}
        {notifications && (
          <div className="absolute right-4 mt-2 w-96 bg-white rounded-lg shadow-lg">
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-900">Notifications</h3>
                <button className="text-sm text-blue-600 hover:text-blue-800">
                  Mark all as read
                </button>
              </div>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0">
                      {activity.type === 'report' && <AlertCircle className="h-5 w-5 text-blue-500" />}
                      {activity.type === 'resolve' && <CheckCircle className="h-5 w-5 text-green-500" />}
                      {activity.type === 'alert' && <Bell className="h-5 w-5 text-red-500" />}
                    </div>
                    <div>
                      <p className="text-sm text-gray-900">
                        <span className="font-medium">{activity.user}</span> {activity.action}
                      </p>
                      <span className="text-xs text-gray-500">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section with Background Image */}
      <div 
        className="relative pt-16 min-h-[600px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/samadhan.jpeg")'
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-5xl font-bold text-white mb-6 text-shadow-lg">
            Empowering Communities,<br />
            Ensuring Safety, Together
          </h1>
          <p className="text-xl text-white mb-8 text-shadow">
            Join hands with your community to create a safer and better<br />
            environment for everyone
          </p>
          <div className="flex justify-center gap-4">
            <button 
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 font-medium shadow-lg"
              onClick={() => setShowReportForm(true)}
            >
              Report an Issue
            </button>
            <button 
              className="px-8 py-3 bg-blue-600 text-white border-2 border-white rounded-lg hover:bg-blue-700 font-medium shadow-lg"
              onClick={() => setTrackingIssues(true)}
            >
              Track Issues
            </button>
          </div>
        </div>
      </div>

      {/* Track Issue Section */}
      {trackingIssues && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
            <button 
              onClick={() => setTrackingIssues(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Track Issues</h2>
            <div>
              {/* Insert tracking issues content here */}
              <p className="text-center text-gray-700">Tracking issues... (content coming soon)</p>
            </div>
          </div>
        </div>
      )}

      {/* Analytics Dashboard */}
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Line Chart */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-blue-600 ">Issue Analytics</h3>
                <select className="p-2 border rounded-lg text-blue-600">
                  <option>Last 30 days</option>
                  <option>Last 3 months</option>
                  <option>Last year</option>
                </select>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={analyticsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="reported" stroke="#3B82F6" />
                    <Line type="monotone" dataKey="resolved" stroke="#10B981" />
                    <Line type="monotone" dataKey="pending" stroke="#F59E0B" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Pie Chart */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-blue-600">Issue Distribution</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={issueTypes}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label
                    >
                      {issueTypes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">&copy; 2023 Samadhaan. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-blue-400 hover:text-blue-600 mx-2">Privacy Policy</a>
            <a href="#" className="text-blue-400 hover:text-blue-600 mx-2">Terms of Service</a>
            <a href="#" className="text-blue-400 hover:text-blue-600 mx-2">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
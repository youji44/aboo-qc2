export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-blue-600 px-4 py-5 sm:px-6">
            <h1 className="text-2xl font-bold text-white">Profile</h1>
          </div>
          
          {/* Profile Content */}
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 gap-6">
              {/* Profile Image */}
              <div className="flex justify-center">
                <div className="h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl text-gray-500">👤</span>
                </div>
              </div>
              
              {/* Profile Information */}
              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-medium text-gray-900">John Doe</h2>
                  <p className="text-sm text-gray-500">Software Developer</p>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Email</dt>
                      <dd className="mt-1 text-sm text-gray-900">john.doe@example.com</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Location</dt>
                      <dd className="mt-1 text-sm text-gray-900">New York, USA</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Bio</dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        Passionate about web development and creating amazing user experiences.
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
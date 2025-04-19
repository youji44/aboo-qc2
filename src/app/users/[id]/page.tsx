interface UserPageProps {
  params: {
    id: string;
  };
}

export default function UserPage({ params }: UserPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="bg-blue-600 px-4 py-5 sm:px-6">
            <h1 className="text-2xl font-bold text-white">User Profile</h1>
          </div>
          
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 gap-6">
              <div className="flex justify-center">
                <div className="h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl text-gray-500">👤</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-medium text-gray-900">User #{params.id}</h2>
                  <p className="text-sm text-gray-500">Dynamic User Profile</p>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-600">
                    This is a dynamic route example. The ID in the URL is: {params.id}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
export default function Loading() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-2/3">
              <div className="h-12 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
            </div>
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto">
                <div className="w-full h-full bg-gray-200 rounded-lg animate-pulse"></div>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <div className="bg-gray-100 rounded-lg shadow-md p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                {[...Array(20)].map((_, index) => (
                  <div key={index} className="aspect-[3/4] bg-gray-200 rounded animate-pulse"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
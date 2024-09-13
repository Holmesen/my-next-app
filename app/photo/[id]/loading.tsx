
export default function Loading() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-8 sm:mb-12 animate-pulse"></div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16 sm:mb-20">
        <div className="lg:flex-[2] flex justify-center">
          <div className="relative w-full max-w-[480px] aspect-ratio-[4/3] rounded-lg overflow-hidden bg-gray-200 animate-pulse"></div>
        </div>
        <div className="lg:flex-1 flex flex-col gap-6 bg-white shadow-lg rounded-lg p-6 h-auto">
          <div className="grid grid-cols-3 gap-4 pb-6 border-b border-gray-200">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="h-4 bg-gray-200 rounded w-16 mb-2 animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded w-8 animate-pulse"></div>
              </div>
            ))}
          </div>
          <div className="space-y-4 sm:space-y-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-16 sm:mb-20">
        <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-8 sm:mb-12 animate-pulse"></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="aspect-square rounded-lg overflow-hidden bg-gray-200 animate-pulse"></div>
          ))}
        </div>
      </div>
    </div>
  )
}
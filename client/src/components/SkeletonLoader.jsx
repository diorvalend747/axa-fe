const SkeletonLoader = () => {
  return (
    <table className="min-w-full">
      <thead>
        <tr className="animate-pulse">
          <td className="px-3 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
            <div className="h-4 bg-gray-300 rounded"></div>
          </td>
          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div className="flex gap-2">
              <div className="rounded-full bg-gray-300 h-12 w-12"></div>
              <div className="flex-1 space-y-2 py-1">
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded"></div>
              </div>
            </div>
          </td>

          <td className="px-1 py-4 whitespace-no-wrap border-b border-gray-200">
            <div className="h-4 bg-gray-300 rounded"></div>
          </td>

          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div className="h-4 bg-gray-300 rounded"></div>
          </td>

          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
            <div className="h-4 bg-gray-300 rounded"></div>
          </td>

          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
            <div className="h-4 bg-gray-300 rounded"></div>
          </td>
          <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
            <div className="h-4 bg-gray-300 rounded"></div>
          </td>
        </tr>
      </thead>
      <tbody>
        {Array(1, 2, 3, 4, 5, 6, 7).map((item, i) => {
          return (
            <>
              <tr key={i} className="animate-pulse">
                <td className="px-3 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                  <div className="h-4 bg-gray-300 rounded"></div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="flex gap-2">
                    <div className="rounded-full bg-gray-300 h-12 w-12"></div>
                    <div className="flex-1 space-y-2 py-1">
                      <div className="h-4 bg-gray-300 rounded"></div>
                      <div className="h-4 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </td>

                <td className="px-1 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="h-4 bg-gray-300 rounded"></div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="h-4 bg-gray-300 rounded"></div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                  <div className="h-4 bg-gray-300 rounded"></div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                  <div className="h-4 bg-gray-300 rounded"></div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                  <div className="h-4 bg-gray-300 rounded"></div>
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
};

export default SkeletonLoader;

import { useNavigate } from "react-router-dom";

function Album({ data, user }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col mt-8">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    No.
                  </th>
                  <th className="py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Album Title
                  </th>

                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"></th>
                </tr>
              </thead>

              <tbody className="bg-white">
                {data.map((item, index) => {
                  return (
                    <>
                      <tr
                        key={index}
                        onClick={() =>
                          navigate(`/albums/${item.id}/photos`, {
                            state: {
                              title: item?.title,
                              user: user,
                            },
                          })
                        }
                        className="hover:bg-slate-100 cursor-pointer"
                      >
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                          {index + 1}.
                        </td>
                        <td className="py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                          {item?.title}
                        </td>

                        <td className="py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                          <button
                            onClick={() =>
                              navigate(`/albums/${item.id}/photos`)
                            }
                            className="block uppercase mr-8 mx-auto shadow bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded"
                          >
                            See Photos
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Album;

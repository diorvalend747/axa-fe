import useFetchUsers from "../hooks/useFetchUsers";
import { Link, useNavigate } from "react-router-dom";
import SkeletonLoader from "../components/SkeletonLoader";

function Home() {
  const [isLoading, users] = useFetchUsers();
  const navigate = useNavigate();

  return (
    <>
      <h3 className="text-gray-700 text-3xl font-medium items-center justify-center flex mt-5">
        Admin Dashboard
      </h3>
      <div className="mt-9"></div>

      <div className="flex flex-col mt-8 overflow-hidden">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block overflow-auto min-w-full shadow sm:rounded-lg border-b border-gray-200">
            {isLoading ? (
              <SkeletonLoader />
            ) : (
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-3 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      No.
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-1 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Address
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Username
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Phone Number
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Website
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"></th>
                  </tr>
                </thead>

                <tbody className="bg-white">
                  {users.map((user, index) => {
                    return (
                      <>
                        <tr
                          onClick={() => {
                            navigate(`users/${user.id}/posts`, {
                              state: {
                                name: user?.name,
                                userName: user?.username,
                                userId: user?.id,
                              },
                            });
                          }}
                          key={index}
                          className="hover:bg-slate-100 cursor-pointer"
                        >
                          <td className="px-3 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                            {index + 1}.
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                  alt=""
                                />
                              </div>

                              <div className="ml-4">
                                <div className="text-sm leading-5 font-medium text-gray-900">
                                  {user.name}
                                </div>
                                <div className="text-sm leading-5 text-gray-500">
                                  {user.email}
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="px-1 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="text-sm leading-5 text-gray-900">
                              {user?.address?.street}
                            </div>
                            <div className="text-sm leading-5 text-gray-500">
                              {user?.address?.city}
                            </div>
                          </td>

                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {user?.username}
                            </span>
                          </td>

                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                            {user?.phone}
                          </td>

                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                            {user?.website}
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                            <Link to={`users/${user.id}/posts`}>
                              <div className="text-indigo-900 hover:text-white hover:bg-slate-600 px-5 py-1 inline-flex text-s leading-5 font-semibold rounded-full bg-slate-400">
                                Detail User
                              </div>
                            </Link>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

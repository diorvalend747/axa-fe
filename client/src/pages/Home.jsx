import useFetchUsers from "../hooks/useFetchUsers";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import SkeletonLoader from "../components/SkeletonLoader";
import { setUser } from "../store/actionCreators";

function Home() {
  const [isLoading, users] = useFetchUsers();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <h3 className="text-gray-700 text-3xl font-medium items-center justify-center flex mt-5">
        Admin Dashboard
      </h3>
      <div className="mt-9"></div>

      <div className="container p-2 mx-auto sm:p-4">
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <table className="min-w-full">
            <thead>
              <tr>
                {/* <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  No.
                </th> */}
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Username
                </th>
                <th className="pl-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Address
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
                            name: user.name,
                            username: user.username,
                            id: user.id,
                          },
                        });
                        dispatch(setUser(user));
                      }}
                      key={index}
                      className="hover:bg-slate-100 cursor-pointer p-9"
                    >
                      {/* <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500 tracking-wider">
                        {index + 1}.
                      </td> */}
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 tracking-wider text-xs leading-4">
                        <div className="flex items-center">
                          <div className="h-10 w-10 bg-slate-500 rounded-full">
                            <div className="text-white mt-1 text-lg font-bold text-center items-center justify-center flex">
                              {user.name[0]}
                            </div>
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

                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 tracking-wider text-xs leading-4">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {user?.username}
                        </span>
                      </td>

                      <td className="pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-xs leading-4">
                        <div className="text-sm leading-5 text-gray-900">
                          {user?.address?.street}
                        </div>
                        <div className="text-sm leading-5 text-gray-500">
                          {user?.address?.city}
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                        {user?.phone}
                      </td>

                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                        {user?.website}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                        <Link to={`users/${user.id}/posts`}>
                          <div className="text-white hover:text-white hover:bg-slate-600 px-5 py-1 inline-flex text-s leading-5 font-semibold rounded-full bg-slate-500">
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
    </>
  );
}

export default Home;

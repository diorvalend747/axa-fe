import { useNavigate } from "react-router";

function UserPost({
  data,
  user,
  setShowModalDelete = () => {},
  setShowEditPostModal = () => {},
  setPostId = () => {},
  setPostForm = () => {},
}) {
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
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Body
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"></th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"></th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"></th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"></th>
                </tr>
              </thead>

              <tbody className="bg-white">
                {data.map((item, index) => {
                  return (
                    <>
                      <tr
                        key={index}
                        className="hover:bg-slate-100 cursor-pointer"
                      >
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                          {index + 1}.
                        </td>
                        <td
                          onClick={() =>
                            navigate(`/posts/${item.id}/comments`, {
                              state: {
                                title: item?.title,
                                user: user,
                              },
                            })
                          }
                          className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"
                        >
                          {item?.title}
                        </td>

                        <td
                          onClick={() =>
                            navigate(`/posts/${item.id}/comments`, {
                              state: {
                                title: item?.title,
                                user: user,
                              },
                            })
                          }
                          className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"
                        >
                          {item?.body}
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                          {item?.website}
                        </td>
                        <td className="px-3 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                          <button
                            onClick={() =>
                              navigate(`/posts/${item.id}/comments`, {
                                state: {
                                  title: item?.title,
                                  user: user,
                                },
                              })
                            }
                            className="block uppercase mx-auto shadow bg-green-600 hover:bg-green-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded"
                          >
                            Detail
                          </button>
                        </td>
                        <td className="px-3 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                          <button
                            onClick={() => {
                              setPostForm({
                                title: item?.title,
                                body: item?.body,
                              });
                              setShowEditPostModal(true);
                              setPostId(item?.id);
                            }}
                            className="block uppercase mx-auto shadow bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded"
                          >
                            Edit
                          </button>
                        </td>
                        <td className="px-3 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                          <button
                            onClick={() => {
                              setShowModalDelete(true);
                              setPostId(item?.id);
                            }}
                            className="block uppercase mx-auto shadow bg-red-500 hover:bg-red-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded"
                          >
                            Delete
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

export default UserPost;

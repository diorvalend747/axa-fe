import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../components/Sidebar";
import UserPost from "../components/UserPost";
import SkeletonLoader from "../components/SkeletonLoader";
import ModalDelete from "../components/ModalDelete";
import ModalAddPost from "../components/ModalAddPost";
import { dataUser } from "../util";
import config from "../api/base";

function UserPosts() {
  const [isLoadingPost, setLoading] = useState(true);
  const [userPosts, setUserPosts] = useState([]);
  const [postId, setPostId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddPostModal, setShowAddPostModal] = useState(false);
  const [showEditPostModal, setShowEditPostModal] = useState(false);
  const [postForm, setPostForm] = useState({
    title: "",
    body: "",
    userId: null,
  });

  const { userId } = useParams();

  const userDetail = JSON.parse(dataUser);

  const notify = () => toast("Post deleted!");
  const notifyCreated = () => toast("Post created!");
  const notifyEdited = () => toast("Post edited!");

  const _getUserPosts = async () => {
    try {
      const { data } = await config.get(`/users/${userId}/posts`);
      setUserPosts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const _createPost = async () => {
    try {
      setLoading(true);
      const { data } = await config.post(`/posts/`, {
        ...postForm,
        userId: Number(userId),
      });
      setUserPosts([data, ...userPosts]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const _editPost = async (postId) => {
    try {
      setLoading(true);
      const { data } = await config.put(`/posts/${postId}`, {
        ...postForm,
        id: postId,
        userId: Number(userId),
      });
      setUserPosts(
        userPosts.reduce((acc, curr) => {
          if (postId === curr.id) {
            acc.push(data);
          } else {
            acc.push(curr);
          }
          return acc;
        }, [])
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const _deletePost = async (id) => {
    try {
      setLoading(true);
      const response = await config.delete(`/posts/${id}`);
      if (response.status === 200) {
        setUserPosts(userPosts.filter((item) => item.id !== id));
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    _getUserPosts();
  }, []);

  return (
    <>
      <div className="flex overflow-hidden">
        <div className="basis-1/5">
          <Sidebar />
        </div>
        <div className="container p-7">
          <div className="flex justify-between">
            <h3 className="text-gray-700 text-3xl font-medium">
              {userDetail.name} Posts
            </h3>
            <button
              onClick={() => setShowAddPostModal(true)}
              className="block uppercase shadow bg-yellow-500 hover:bg-yellow-600 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 mr-3 rounded"
            >
              Add Post
            </button>
          </div>
          {isLoadingPost ? (
            <div className="mt-6">
              <SkeletonLoader />
            </div>
          ) : (
            <UserPost
              data={userPosts}
              user={userDetail}
              setShowModalDelete={setShowDeleteModal}
              setPostId={setPostId}
              setPostForm={setPostForm}
              setShowEditPostModal={setShowEditPostModal}
            />
          )}
        </div>
      </div>
      <ModalDelete
        onClickCancel={() => setShowDeleteModal(false)}
        onClickSubmit={() => {
          _deletePost(postId);
          notify();
          setShowDeleteModal(false);
        }}
        isOpen={showDeleteModal}
      />
      <ModalAddPost
        onClickCancel={() => {
          setShowAddPostModal(false);
          setPostForm({});
        }}
        onClickSubmit={() => {
          _createPost();
          notifyCreated();
          setShowAddPostModal(false);
          setPostForm({});
        }}
        isOpen={showAddPostModal}
        setPostForm={setPostForm}
        postForm={postForm}
      />

      <ModalAddPost
        onClickCancel={() => {
          setShowEditPostModal(false);
          setPostForm({});
        }}
        onClickSubmit={() => {
          _editPost(postId);
          notifyEdited();
          setShowEditPostModal(false);
          setPostForm({});
        }}
        isOpen={showEditPostModal}
        setPostForm={setPostForm}
        postForm={postForm}
        editMode={true}
      />
      <ToastContainer />
    </>
  );
}

export default UserPosts;

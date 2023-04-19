import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../components/Sidebar";
import DetailPost from "../components/DetailPost";
import SkeletonLoader from "../components/SkeletonLoader";
import ModalDelete from "../components/ModalDelete";
import ModalAddComment from "../components/ModalAddComment";
import config from "../api/base";

function UserDetailPost() {
  const [isLoadingDetailPost, setLoading] = useState(false);
  const [userPosts, setUserPosts] = useState([]);
  const [user, setUser] = useState({
    name: null,
    userName: null,
    userId: null,
  });
  const [commentId, setCommentId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddCommentModal, setShowAddCommentModal] = useState(false);
  const [showEditCommentModal, setShowEditCommentModal] = useState(false);
  const [commentForm, setCommentForm] = useState({
    name: "",
    body: "",
    email: "",
    userId: null,
    postId: null,
  });

  const { postId } = useParams();
  const location = useLocation();

  const notify = () => toast("Comment deleted!");
  const notifyCreated = () => toast("Comment created!");
  const notifyEdited = () => toast("Comment edited!");

  const _getDetailPost = async () => {
    try {
      setLoading(true);
      const { data } = await config.get(`/posts/${postId}/comments`);
      setUserPosts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const _getUser = async () => {
    try {
      const { data } = await config.get(
        `/users/${location?.state?.user?.userId}`
      );
      setUser({
        name: data?.name,
        userName: data?.username,
        userId: data?.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const _createComment = async () => {
    try {
      setLoading(true);
      const { data } = await config.post(`/comments`, {
        ...commentForm,
        userId: Number(location?.state?.user?.userId),
      });
      setUserPosts([data, ...userPosts]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const _editComment = async () => {
    try {
      setLoading(true);
      const { data } = await config.put(`/comments/${commentId}`, {
        ...commentForm,
        id: commentId,
        userId: Number(location?.state?.user?.userId),
      });
      console.log(data);
      setUserPosts(userPosts);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const _deleteComment = async (id) => {
    try {
      const response = await config.delete(`/comments/${id}`);
      setLoading(true);
      const { data } = await config.get(`/posts/${postId}/comments`);
      setUserPosts(data.filter((item) => item.id !== id));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    _getDetailPost();
  }, []);

  useEffect(() => {
    _getUser();
  }, [location?.state?.user?.userId]);

  return (
    <>
      <div className="flex overflow-hidden">
        <div className="basis-1/5">
          <Sidebar user={user} />
        </div>
        <div className="container p-7 ml-7">
          <div className="flex justify-between">
            <h3 className="text-gray-700 text-3xl font-medium">
              {location?.state?.title}
            </h3>
            <button
              onClick={() => setShowAddCommentModal(true)}
              className="block uppercase shadow bg-yellow-500 hover:bg-yellow-600 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 mr-3 rounded"
            >
              Add Comment
            </button>
          </div>
          {isLoadingDetailPost ? (
            <div className="mt-6">
              <SkeletonLoader />
            </div>
          ) : (
            <DetailPost
              data={userPosts}
              setShowDeleteModal={setShowDeleteModal}
              setShowEditCommentModal={setShowEditCommentModal}
              setCommentId={setCommentId}
              setCommentForm={setCommentForm}
            />
          )}
        </div>
      </div>
      <ModalDelete
        onClickCancel={() => setShowDeleteModal(false)}
        onClickSubmit={() => {
          _deleteComment(commentId);
          notify();
          setShowDeleteModal(false);
        }}
        isOpen={showDeleteModal}
        isComment={true}
      />
      <ModalAddComment
        onClickCancel={() => setShowAddCommentModal(false)}
        onClickSubmit={() => {
          _createComment();
          notifyCreated();
          setShowAddCommentModal(false);
          setCommentForm({});
        }}
        isOpen={showAddCommentModal}
        setCommentForm={setCommentForm}
        commentForm={commentForm}
      />
      <ModalAddComment
        onClickCancel={() => {
          setShowEditCommentModal(false);
          setCommentForm({});
        }}
        onClickSubmit={() => {
          _editComment(commentId);
          notifyEdited();
          setShowEditCommentModal(false);
          setCommentForm({});
        }}
        isOpen={showEditCommentModal}
        setCommentForm={setCommentForm}
        commentForm={commentForm}
        editMode={true}
      />
      <ToastContainer />
    </>
  );
}

export default UserDetailPost;

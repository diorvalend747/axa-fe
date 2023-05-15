import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../components/Sidebar";
import DetailPost from "../components/DetailPost";
import SkeletonLoader from "../components/SkeletonLoader";
import ModalDelete from "../components/ModalDelete";
import ModalAddComment from "../components/ModalAddComment";
import config from "../api/base";

function UserDetailPost() {
  const [isLoadingDetailPost, setLoading] = useState(true);
  const [userPosts, setUserPosts] = useState([]);
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

  const userDetail = useSelector((state) => state.user);

  const notify = () => toast("Comment deleted!");
  const notifyCreated = () => toast("Comment created!");
  const notifyEdited = () => toast("Comment edited!");

  const _getDetailPost = async () => {
    try {
      const { data } = await config.get(`/posts/${postId}/comments`);
      setUserPosts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const _createComment = async () => {
    try {
      setLoading(true);
      const { data } = await config.post(`/comments`, {
        ...commentForm,
        userId: Number(userDetail?.userId),
      });
      setUserPosts([data, ...userPosts]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const _editComment = async (commentId) => {
    try {
      setLoading(true);
      const { data } = await config.put(`/comments/${commentId}`, {
        ...commentForm,
        id: commentId,
        userId: Number(userDetail?.userId),
      });
      setUserPosts(
        userPosts.reduce((acc, curr) => {
          if (commentId === curr.id) {
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

  const _deleteComment = async (id) => {
    try {
      setLoading(true);
      const response = await config.delete(`/comments/${id}`);
      if (response.status === 200) {
        setUserPosts(userPosts.filter((item) => item.id !== id));
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    _getDetailPost();
  }, []);

  return (
    <>
      <div className="flex overflow-hidden">
        <div className="md:flex-shrink-0 md:w-64">
          <Sidebar />
        </div>
        <div className="flex-grow mx-auto container p-7">
          <div className="flex flex-col gap-2 lg:flex-row lg:justify-between">
            <h3 className="text-gray-700 text-3xl font-medium">
              Comments - {location?.state?.title}
            </h3>
            <button
              onClick={() => setShowAddCommentModal(true)}
              className="flex uppercase shadow bg-slate-500 hover:bg-slate-600 focus:shadow-outline focus:outline-none text-white gap-2 py-3 px-5 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <p>Comment</p>
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

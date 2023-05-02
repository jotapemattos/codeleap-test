import trash from '../../assets/trash.svg';
import edit from '../../assets/edit.svg';
import DeleteModal from './DeleteModal';
import UpdateModal from './UpdateModal';
import { usePostsCards } from '../../hooks/FormPosts/usePostsCards';

const PostsCards = () => {
  const {
    filterIdToDelete,
    filterIdToUpdate,
    setIsOpen,
    handlePrev,
    handleNext,
    page,
    username,
    newData,
    deleteId,
    updateId,
    isDeleting,
    isOpen
  } = usePostsCards();
  return (
    <>
      {newData?.map((post) => (
        <div
          key={post.id}
          className="w-5/6 md:w-[540px] xl:w-[752px] h-auto border border-firstGray rounded-2xl"
        >
          <header className="h-[70px] bg-mainBlue rounded-t-2xl flex items-center justify-between">
            <h1 className="text-[20px] text-white font-bold p-6">
              {post.title}
            </h1>
            {username == post.username && (
              <div className="p-6 flex items-center gap-8">
                <button onClick={() => filterIdToDelete(post.id)}>
                  <img
                    src={trash}
                    alt="delete-post"
                    className="w-[31.2px] h-[30px]"
                  />
                </button>
                <button onClick={() => filterIdToUpdate(post.id)}>
                  <img
                    src={edit}
                    alt="edit-post"
                    className="w-[31.2px] h-[30px]"
                  />
                </button>
              </div>
            )}
            {isOpen && post.id === deleteId && isDeleting && (
              <DeleteModal setIsOpen={setIsOpen} id={deleteId} />
            )}
            {isOpen && post.id === updateId && !isDeleting && (
              <UpdateModal setIsOpen={setIsOpen} id={updateId} />
            )}
          </header>
          <main className="flex flex-col justify-center p-6 gap-4">
            <span className="flex items-center justify-between text-secondGray text-lg">
              <h3 className="font-bold">@{post.username}</h3>
              {post.minutes_ago <= 60 && (
                <h3>{post.minutes_ago} minutes ago</h3>
              )}
              {post.minutes_ago > 60 && (
                <h3>{(post.minutes_ago / 60).toFixed(0)} hours ago</h3>
              )}
            </span>
            <p className="text-lg text-black break-words">{post.content}</p>
          </main>
        </div>
      ))}
      <div className="w-full p-2 flex justify-center items-center gap-8">
        <button
          className={
            page === 0
              ? `w-28 h-10 p-2 rounded-xl bg-gradient-to-b from-mainBlue to-[#989FF8]`
              : 'w-28 h-10 p-2 rounded-xl bg-gradient-to-b from-mainBlue to-[#989FF8] hover:scale-95 transition-all duration-300'
          }
          disabled={page === 0}
          onClick={() => handlePrev()}
        >
          Prev
        </button>
        <button
          className="w-28 h-10 p-2 rounded-xl bg-gradient-to-b from-mainBlue to-[#989FF8] hover:scale-95 transition-all duration-300"
          onClick={() => handleNext()}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default PostsCards;

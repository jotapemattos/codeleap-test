import { deletePost } from '../../actions/service';

interface PostCardProps {
  setIsOpen: (b: boolean) => void;
  id: number;
}

const DeleteModal = ({ setIsOpen, id }: PostCardProps) => {
  const handleClick = () => {
    deletePost(id);
    setIsOpen(false);
  };

  return (
    <div className="w-screen h-screen fixed inset-0 bg-secondGray/80 flex items-center justify-center">
      <main className="w-[660px] h-[146px] border border-firstGray rounded-2xl bg-white p-6 flex flex-col items-end justify-between">
        <h1 className="text-[24px] w-full font-bold">
          Are you sure you want to delete this item?
        </h1>
        <span className="flex gap-4 items-center">
          <button
            onClick={() => setIsOpen(false)}
            className="w-[120px] h-[32px] rounded-lg border border-firstGray text-lg font-bold"
          >
            Cancel
          </button>
          <button
            onClick={handleClick}
            className="w-[120px] h-[32px] rounded-lg bg-[#FF5151] text-white text-lg font-bold"
          >
            Delete
          </button>
        </span>
      </main>
    </div>
  );
};

export default DeleteModal;

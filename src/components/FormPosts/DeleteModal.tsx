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
      <main className="w-[300px] min-[420px]:w-[400px] md:w-[440px] xl:w-[660px] xl:h-auto border border-firstGray rounded-2xl bg-white p-6 flex flex-col gap-4 xl:gap-10 items-center md:items-end justify-between">
        <h1 className="text-[24px] w-full font-bold">
          Are you sure you want to delete this item?
        </h1>
        <span className="flex gap-4 items-center">
          <button
            onClick={() => setIsOpen(false)}
            className="w-[120px] h-[32px] rounded-lg border border-firstGray text-lg font-bold hover:scale-95 hover:bg-black/10 transition-all duration-300"
          >
            Cancel
          </button>
          <button
            onClick={handleClick}
            className="w-[120px] h-[32px] rounded-lg bg-[#FF5151] text-white text-lg font-bold  hover:scale-95 hover:bg-[#b32f2f] transition-all duration-300"
          >
            Delete
          </button>
        </span>
      </main>
    </div>
  );
};

export default DeleteModal;

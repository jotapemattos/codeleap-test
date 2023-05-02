import { useState } from 'react';
import { updatePost } from '../../actions/service';

interface PostCardProps {
  setIsOpen: (b: boolean) => void;
  id: number;
}

const UpdateModal = ({ setIsOpen, id }: PostCardProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const isPostValid = title.trim() !== '' && content.trim() !== '';

  const handleClick = () => {
    const post = {
      title,
      content
    };
    updatePost(id, post);
    setIsOpen(false);
  };

  return (
    <div className="w-screen h-screen fixed inset-0 bg-secondGray/80 flex items-center justify-center">
      <main className="min-[420px]:w-[400px] md:w-[400px] lg:w-[500px] xl:w-[660px] h-auto border border-firstGray rounded-2xl bg-white p-6 flex flex-col items-end gap-6">
        <h1 className="text-[24px] w-full font-bold">Edit item</h1>
        <span className="w-full flex flex-col gap-2">
          <label className="text-base text-black">Title</label>
          <input
            type="text"
            className="outline-none border border-secondGray rounded-lg h-8 p-2 text-sm"
            placeholder="Hello world"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </span>
        <span className="w-full flex flex-col gap-2">
          <label className="text-base text-black">Content</label>
          <textarea
            className="outline-none border border-secondGray rounded-lg h-[74px] px-2 py-2 text-sm resize-none"
            placeholder="Content here"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
        </span>
        <span className="flex gap-4 items-center">
          <button
            onClick={() => setIsOpen(false)}
            className="w-[120px] h-[32px] rounded-lg border border-firstGray text-lg font-bold"
          >
            Cancel
          </button>
          <button
            onClick={handleClick}
            className={
              !isPostValid
                ? `w-[120px] h-[32px] rounded-lg bg-[#47B960] text-white text-lg font-bold opacity-60`
                : `w-[120px] h-[32px] rounded-lg bg-[#47B960] text-white text-lg font-bold`
            }
            disabled={!isPostValid}
          >
            Save
          </button>
        </span>
      </main>
    </div>
  );
};

export default UpdateModal;

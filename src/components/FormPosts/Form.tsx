import { useDispatch } from 'react-redux';
import { useNameSelector } from '../../hooks/useAppSelector';
import { setPost } from '../../redux/FormPosts/posts-slice';
import { useState } from 'react';

const Form = () => {
  const username = useNameSelector((state) => state.name.value);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const isPostValid = title.trim() !== '' && content.trim() !== '';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setPost({ username, title, content }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="gap-6 items-end w-[752px] h-[334px] border border-firstGray rounded-2xl flex flex-col px-6 py-4"
    >
      <h1 className="text-xl font-bold w-full">What’s on your mind?</h1>
      <span className="w-full flex flex-col gap-2">
        <label className="text-base text-black">Title</label>
        <input
          type="text"
          className="outline-none border border-secondGray rounded-lg h-8 p-2 text-sm"
          placeholder="Hello world"
          onChange={(e) => setTitle(e.target.value)}
        />
      </span>
      <span className="w-full flex flex-col gap-2">
        <label className="text-base text-black">Content</label>
        <textarea
          className="outline-none border border-secondGray rounded-lg h-[74px] px-2 py-2 text-sm resize-none"
          placeholder="Content here"
          onChange={(e) => setContent(e.target.value)}
        />
      </span>
      <button
        className={
          !isPostValid
            ? `w-28 h-8 rounded-lg bg-mainBlue text-white opacity-40`
            : `w-28 h-8 rounded-lg bg-mainBlue text-white`
        }
        type="submit"
        disabled={!isPostValid}
      >
        Create
      </button>
    </form>
  );
};

export default Form;

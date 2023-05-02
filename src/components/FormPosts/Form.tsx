import { useForm } from '../../hooks/FormPosts/useForm';

const Form = () => {
  const { isPostValid, handleSubmit, title, setTitle, content, setContent } =
    useForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="gap-6 items-end w-5/6 h-auto md:w-[540px] xl:w-[752px] xl:h-[334px] border border-firstGray rounded-2xl flex flex-col px-6 py-4"
    >
      <h1 className="text-xl font-bold w-full">What’s on your mind?</h1>
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
      <button
        className={
          !isPostValid
            ? `w-28 h-8 rounded-lg bg-mainBlue text-white opacity-40`
            : `w-28 h-8 rounded-lg bg-gradient-to-b from-mainBlue to-[#989FF8] text-white hover:scale-95 transition-all duration-300`
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

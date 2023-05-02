import Form from '../../components/FormPosts/Form';
import PostsCards from '../../components/FormPosts/PostsCards';

const FormPosts = () => {
  return (
    <div className="w-[800px] min-h-screen flex flex-col items-center gap-6 bg-white pb-6">
      <header className="w-full h-20 bg-mainBlue flex items-center px-9">
        <h1 className="text-xl font-bold text-white">CodeLeap Network</h1>
      </header>
      <Form />
      <PostsCards />
      <div></div>
    </div>
  );
};

export default FormPosts;

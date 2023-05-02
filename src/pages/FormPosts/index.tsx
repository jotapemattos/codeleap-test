import Form from '../../components/FormPosts/Form';
import PostsCards from '../../components/FormPosts/PostsCards';

const FormPosts = () => {
  return (
    <div className="w-full md:w-[600px] xl:w-[800px] min-h-screen flex flex-col items-center gap-6 bg-white pb-6">
      <header className="w-full lg:w-full h-20 bg-gradient-to-br from-mainBlue to-[#6c73d3] flex items-center justify-start px-9">
        <h1 className="text-xl font-bold text-white">CodeLeap Network</h1>
      </header>
      <Form />
      <PostsCards />
    </div>
  );
};

export default FormPosts;

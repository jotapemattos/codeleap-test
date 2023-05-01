import { useEffect, useState } from 'react';
import { Data, getPosts } from '../../actions/service';
import { useNameSelector } from '../../hooks/useAppSelector';
import trash from '../../assets/trash.svg';
import edit from '../../assets/edit.svg';

const PostsCards = () => {
  const username = useNameSelector((state) => state.name.value);
  const [data, setData] = useState<Data[] | null>(null);
  const now = new Date().toISOString();
  useEffect(() => {
    getPosts(setData);
  }, [data]);

  const newData = data?.map((item) => {
    const minutesAgo =
      new Date(now).getTime() - new Date(item.created_datetime).getTime();
    const roundedMinutesAgo = Math.floor(minutesAgo / 60000);
    return { ...item, minutes_ago: roundedMinutesAgo };
  });
  return (
    <>
      {newData?.map((post) => (
        <div
          key={post.id}
          className="w-[752px] h-[316px] border border-firstGray rounded-2xl"
        >
          <header className="h-[70px] bg-mainBlue rounded-t-2xl flex items-center justify-between">
            <h1 className="text-[20px] text-white font-bold p-6">
              {post.title}
            </h1>
            {username == post.username && (
              <div className="p-6 flex items-center gap-8">
                <button>
                  <img
                    src={trash}
                    alt="delete-post"
                    className="w-[31.2px] h-[30px]"
                  />
                </button>
                <button>
                  <img
                    src={edit}
                    alt="edit-post"
                    className="w-[31.2px] h-[30px]"
                  />
                </button>
              </div>
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
            <p className="text-lg text-black">{post.content}</p>
          </main>
        </div>
      ))}
    </>
  );
};

export default PostsCards;

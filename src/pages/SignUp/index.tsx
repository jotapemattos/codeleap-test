import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setName } from '../../redux/SignUp/name-slice';
import { useState } from 'react';

const index = () => {
  const [user, setUser] = useState<string>(() => {
    const storedUsername = localStorage.getItem('username');
    return storedUsername || '';
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isUserValid = user.trim() !== '';

  const handleClick = () => {
    navigate('/posts');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUser(value);
    dispatch(setName(value));
    localStorage.setItem('username', value);
  };

  return (
    <div className="bg-white w-[300px] md:w-[400px] lg:w-[450px] xl:w-[500px] xl:h-[205px] flex flex-col gap-6 border border-thirdGray rounded-2xl p-6">
      <h1 className="font-bold text-2xl">Welcome to CodeLeap network!</h1>
      <span className="flex flex-col gap-4 items-center md:items-end">
        <form className="w-full flex flex-col gap-2 text-base">
          <label>Please enter your username</label>
          <input
            type="text"
            className="outline-none border border-secondGray rounded-lg h-8 p-2 text-sm"
            placeholder="John Doe"
            value={user}
            onChange={handleChange}
          />
        </form>
        <button
          type="submit"
          className={
            !user
              ? `w-28 h-8 rounded-lg bg-gradient-to-b from-mainBlue to-[#989FF8] text-white opacity-40 `
              : `w-28 h-8 rounded-lg bg-gradient-to-b from-mainBlue to-[#989FF8] text-white hover:scale-95 transition-all duration-300`
          }
          onClick={() => handleClick()}
          disabled={!isUserValid}
        >
          ENTER
        </button>
      </span>
    </div>
  );
};

export default index;

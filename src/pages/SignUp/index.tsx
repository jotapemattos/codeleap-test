import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setName } from '../../redux/SignUp/name-slice';
import { useCustomSelector } from '../../hooks/useAppSelector';

const index = () => {
  const user = useCustomSelector((state) => state.name.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isUserValid = user.trim() !== '';

  const handleClick = () => {
    navigate('/posts');
    dispatch(setName(''));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };

  return (
    <div className="bg-white w-[500px] h-[205px] flex flex-col gap-6 border border-[#CCCCCC] rounded-2xl p-6">
      <h1 className="font-bold text-2xl">Welcome to CodeLeap network!</h1>
      <span className="flex flex-col gap-4 items-end">
        <form className="w-full flex flex-col gap-2 text-base">
          <label>Please enter your username</label>
          <input
            type="text"
            className="outline-none border border-[#777777] rounded-lg h-8 p-2 text-sm"
            placeholder="John Doe"
            value={user}
            onChange={handleChange}
          />
        </form>
        <button
          type="submit"
          className={
            !user
              ? `w-28 h-8 rounded-lg bg-[#7695EC] text-white opacity-40`
              : `w-28 h-8 rounded-lg bg-[#7695EC] text-white`
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

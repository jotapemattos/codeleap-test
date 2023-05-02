import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postPosts } from '../../actions/service';
import { setPost } from '../../redux/FormPosts/posts-slice';
import { useNameSelector } from '../useAppSelector';

export const useForm = () => {
  const username = useNameSelector((state) => state.name.value);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const created_datetime = today.toISOString();

  const isPostValid = title.trim() !== '' && content.trim() !== '';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const post = {
      username,
      created_datetime,
      title,
      content
    };
    dispatch(setPost(post));
    postPosts(post);
  };

  return {
    isPostValid,
    handleSubmit,
    title,
    setTitle,
    content,
    setContent,
    username
  };
};

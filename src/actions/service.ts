import axios from 'axios';
import { PostState } from '../redux/FormPosts/posts-slice';

export interface Data {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
}

interface UpdatePostProps {
  title: string;
  content: string;
}

interface DataProps {
  setData: (data: Data[]) => void;
}

export const postPosts = async (post: PostState) => {
  await axios.post('https://dev.codeleap.co.uk/careers/?format=api', post);
};

export const getPosts = async (setData: DataProps['setData']) => {
  await axios
    .get(`https://dev.codeleap.co.uk/careers/?format=json&limit=10&offset=0`)
    .then((response) => setData(response.data.results));
};

export const deletePost = async (id: number) => {
  await axios.delete(`https://dev.codeleap.co.uk/careers/${id}/`);
};

export const updatePost = async (id: number, post: UpdatePostProps) => {
  await axios.patch(`https://dev.codeleap.co.uk/careers/${id}/`, post);
};

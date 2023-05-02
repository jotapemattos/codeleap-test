import { useEffect, useState } from 'react';
import { Data, getPosts } from '../../actions/service';
import { setName } from '../../redux/SignUp/name-slice';
import { useDispatch } from 'react-redux';

export const usePostsCards = () => {
  const dispatch = useDispatch();
  const username = localStorage.getItem('username');
  const [data, setData] = useState<Data[] | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const [updateId, setUpdateId] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const now = new Date().toISOString();

  if (username) {
    dispatch(setName(username));
  }

  useEffect(() => {
    getPosts(setData);
  }, [data]);

  const newData = data?.map((item) => {
    const minutesAgo =
      new Date(now).getTime() - new Date(item.created_datetime).getTime();
    const roundedMinutesAgo = Math.floor(minutesAgo / 60000);
    return { ...item, minutes_ago: roundedMinutesAgo };
  });

  const filterIdToDelete = (id: number) => {
    setDeleteId(id);
    setIsOpen(true);
    setIsDeleting(true);
  };

  const filterIdToUpdate = (id: number) => {
    setUpdateId(id);
    setIsOpen(true);
    setIsDeleting(false);
  };

  return {
    filterIdToDelete,
    filterIdToUpdate,
    setIsOpen,
    setDeleteId,
    setUpdateId,
    username,
    newData,
    deleteId,
    updateId,
    isDeleting,
    isOpen
  };
};

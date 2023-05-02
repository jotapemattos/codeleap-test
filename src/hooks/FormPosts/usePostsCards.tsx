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
  const [page, setPage] = useState(0);
  const now = new Date().toISOString();

  if (username) {
    dispatch(setName(username));
  }

  useEffect(() => {
    getPosts(setData, page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const handlePrev = () => {
    setPage(page - 10);
    window.scroll(0, 0);
  };

  const handleNext = () => {
    setPage(page + 10);
    window.scroll(0, 0);
  };
  return {
    filterIdToDelete,
    filterIdToUpdate,
    setIsOpen,
    setDeleteId,
    setUpdateId,
    handlePrev,
    handleNext,
    page,
    username,
    newData,
    deleteId,
    updateId,
    isDeleting,
    isOpen
  };
};

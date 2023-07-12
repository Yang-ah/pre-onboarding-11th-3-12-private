import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IDetail } from '../models';
import { TitleContext } from '..';
import { getAnIssue } from '../api';

const useDetail = () => {
  const { id } = useParams();
  const { organization, repository } = useContext(TitleContext);
  const [isLoading, setIsLoading] = useState(true);
  const [detail, setDetail] = useState<IDetail>({
    number: 0,
    title: '',
    created_at: '',
    body: '',
    comments: 0,
    user: {
      login: '',
      avatar_url: '',
    },
  });

  const getDetail = async () => {
    const response = await getAnIssue({
      organization,
      repository,
      id: Number(id),
    });

    const { title, created_at, body, comments, user } = response.data;

    setDetail({
      number: Number(id),
      title,
      created_at,
      body,
      comments,
      user: {
        login: user.login,
        avatar_url: user.avatar_url,
      },
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return { detail, isLoading };
};

export default useDetail;

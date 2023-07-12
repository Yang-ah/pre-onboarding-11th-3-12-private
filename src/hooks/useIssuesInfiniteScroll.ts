import { useCallback, useContext, useEffect, useState } from 'react';
import { TitleContext } from '..';
import { IIssue } from '../models';
import { getIssues } from '../api';

const useIssuesInfiniteScroll = () => {
  const { organization, repository } = useContext(TitleContext);
  const [issues, setIssues] = useState<IIssue[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(2);
  const [isLoading, setIsLoading] = useState(true);

  const getIssueList = async (page: number) => {
    const response = await getIssues({
      organization,
      repository,
      page,
    });

    setIssues(issues.concat(response.data));
    setCurrentPage(page);
    setIsLoading(false);
  };

  const handleScroll = useCallback(() => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const { scrollTop } = document.documentElement;

    if (Math.round(scrollTop + innerHeight) >= scrollHeight) {
      setIsLoading(true);
      getIssueList(currentPage + 1);
    }
  }, [currentPage]);

  useEffect(() => {
    getIssueList(1);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [handleScroll]);

  return { issues, isLoading };
};

export default useIssuesInfiniteScroll;

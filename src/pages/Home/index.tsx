import React, { useCallback, useContext, useEffect, useState } from 'react';
import { IssuesContext } from '../..';
import { getIssues } from '../../api';
import { IIssue } from '../../models';
import { Advertisement, IssueTitle } from '../../components';

const Home = () => {
  const issues = useIssuesInfiniteScroll();

  return (
    <main>
      <h1>Home</h1>
      {issues.map((issue: IIssue, index) => {
        return (
          <React.Fragment key={issue.created_at + issue.number}>
            {index % 4 === 0 && index !== 0 && (
              <Advertisement
                src={adObject.src}
                alt={adObject.alt}
                path={adObject.path}
              />
            )}
            <IssueTitle
              number={issue.number}
              title={issue.title}
              created_at={issue.created_at}
              commentCount={issue.commentCount}
              username={issue.user.login}
            />
          </React.Fragment>
        );
      })}
    </main>
  );
};

const adObject = {
  src: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100',
  alt: 'wanted',
  path: 'https://www.wanted.co.kr/',
};

const useIssuesInfiniteScroll = () => {
  const { organization, repository } = useContext(IssuesContext);
  const [issues, setIssues] = useState<IIssue[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const getIssueList = async (page: number) => {
    const response = await getIssues({
      organization,
      repository,
      page,
    });

    setIssues(issues.concat(response.data));
    setCurrentPage(page);
  };

  const handleScroll = useCallback(() => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const { scrollTop } = document.documentElement;

    if (Math.round(scrollTop + innerHeight) >= scrollHeight) {
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

  return issues;
};

export default Home;

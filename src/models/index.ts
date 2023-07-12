// TODO : 겹치는 부분 리팩토링하기

interface ITitle {
  organization: string;
  repository: string;
}

export interface IGetIssues extends ITitle {
  page: number;
}

export interface IGetAnIssue extends ITitle {
  id: number;
}

export interface ICommon {
  number: number;
  title: string;
  created_at: string;
  commentCount: number;
}

export interface IIssue extends ICommon {
  user: {
    login: string;
  };
}

export interface IDetail extends ICommon {
  body: string;
  user: {
    login: string;
    avatar_url: string;
  };
}

export interface IIssueTitle extends ICommon {
  username: string;
}

export interface IImage {
  src: string;
  alt: string;
  path: string;
}

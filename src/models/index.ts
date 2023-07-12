// TODO : 겹치는 부분 리팩토링하기

export interface ITitle {
  organization: string;
  repository: string;
}

export interface IAnIssue {
  organization: string;
  repository: string;
  id: number;
}

export interface IIssue {
  number: number;
  title: string;
  created_at: string;
  commentCount: number;
  user: {
    login: string;
  };
}

export interface IDetail {
  number: number;
  title: string;
  created_at: string;
  body: string;
  commentCount: number;
  user: {
    login: string;
    avatar_url: string;
  };
}

export interface IIssueTitle {
  number: number;
  title: string;
  created_at: string;
  commentCount: number;
  username: string;
}

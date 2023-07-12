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
  comments: number;
}

export interface IIssue extends ICommon {
  state: string;
  user: {
    login: string;
  };
}

export interface IDetail extends ICommon {
  state: string;
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

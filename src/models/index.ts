export interface ITitle {
  organization: string;
  repository: string;
}

export interface IIssue {
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

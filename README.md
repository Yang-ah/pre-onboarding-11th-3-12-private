## 원티드 프리온보딩 프론트엔드 인턴십 - 3주차 과제
- 배포링크: [바로가기](https://web-pre-onboarding-11th-3-12-private-7xwyjq992llizvha4k.sel4.cloudtype.app/)
- 개인 과제: [특정 깃헙 레포지토리](https://github.com/facebook/react/issues)의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축
- 팀 과제: 동료학습을 통해서 팀에서 생각한 3주차 과제의 Best Pratice를 만들고 제출 ([팀 과제 Repository](https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-3-12))
- 팀 토론: [무한스크롤](https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-3-12/discussions/7), [Context API를 활용한 api 연동](https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-3-12/discussions/2), [데이터 요청 중 로딩 표시](https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-3-12/discussions/3), [지정된 조건에 맞게 데이터 요청 및 표시](https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-3-12/discussions/5)
- [팀 회의록 및 타임라인](https://yangah.notion.site/f18d918b470b43b889e0f334fbf8c8c2?pvs=4), [개발 flow](https://www.figma.com/file/fZE333aiqYLWVoJhpw0rah/%EA%B0%9C%EB%B0%9C-flow?type=design&node-id=0-1&mode=design&t=9rtDUmfLLdcSMxKs-0)


<br>

<details>
<summary>요구 사항</summary>
<div markdown="1">

* 주어진 [**`와이어 프레임`**](https://lean-mahogany-686.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4dce1f3c-8939-4dbd-8568-e899d0ae91fc%2FUntitled.png?id=32732b3a-a57f-4631-9f54-664d6d4069df&table=block&spaceId=72b256b1-ae08-4e70-bb6c-f9c3cad5a793&width=2000&userId=&cache=v2) 구현
* Github의 REST API를 통해 Issue 데이터 호출

* 필수 요구 사항
  - [X] 이슈 목록 및 상세 화면 기능 구현
  - [X] Context API를 활용한 API 연동
  - [X] 데이터 요청 중 로딩 표시
  - [X] 에러 화면 구현
  - [X] 지정된 조건(open 상태, 코멘트 많은 순)에 맞게 데이터 요청 및 표시
  - [X] React, Context API 사용
  - [X] 5번째 셀마다 광고 이미지 출력
  - [X] 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)
  - [X] 두 페이지는 공통 헤더를 공유합니다.

* 선택 사항
  - [X] CSS-in-JS 적용


</div>
</details>




<br>
<br>


## 프로젝트 시작 
로컬에서 프로젝트 실행 시, 깃허브 토큰 환경변수 설정이 필요합니다.

```
REACT_APP_GITHUB_TOKEN=발급받은 깃허브 토큰
```

환경변수 설정 후 터미널에 아래 명령어를 실행하여 프로젝트를 시작 할 수 있습니다. 

```
npm install
npm start
```

<br>
<br>




## 기능 구현


### 🍋 Context API를 활용한 API 연동

> `활용`: API 호출 시 & Header에서 공통적으로 사용 하고 있는`organization`, `repository` 공유 <br>
> `의도`: 이후에 facebook & react가 아닌 다른 repo의 issues를 받아오는 상황 발생시 title 객체만 변경하도록 하기 위해 활용 

<br>

**👉🏻 최상단 index.tsx에서 context 생성**

```tsx
const title = {
  organization: 'facebook',
  repository: 'react',
};

export const TitleContext = createContext(title);
```

**👉🏻 organization, repository을 인자로 받아서 API 호출**

```ts
// api/index.ts

export const getIssues = ({
  organization,
  repository,
  page = 1,
}: IGetIssues) => {
  return apiClient.get(`${organization}/${repository}/issues`, {
    params: { sort: 'comments', page },
  });
};
```

```ts
// hooks/useIssuesInfiniteScroll.ts

const useIssuesInfiniteScroll = () => {
  const { organization, repository } = useContext(TitleContext);
  const getIssueList = async (page: number) => {
    if (page !== 1 && !issues.length) {
      page = 1;
    }

    const response = await getIssues({
      organization,
      repository,
      page,
    });

    setIssues(issues.concat(response.data));
    setCurrentPage(page);
    setIsLoading(false);
  };
}
```

**👉🏻 공통 Header에 활용**

```tsx
// Layout/Header/index.tsx

const Header = () => {
  const title = useContext(TitleContext);
  const navigate = useNavigate();

  return (
    <HeaderBox>
      <TitleWrap onClick={() => navigate('/')}>
        <IconGithub />
        {title.organization.toUpperCase()} / {title.repository.toUpperCase()}
      </TitleWrap>
    </HeaderBox>
  );
};

```

<br>
<br>

### 🍋 인피니티 스크롤

> 관심사 분리: 커스텀 훅으로 인피니티 스크롤과 issues를 불러오고, 로딩하는 기능적인 logic을 만들었고,<br>
> UI는 Home Page에 나타나도록 구현하였습니다.

<br>

**👉🏻 `useIssuesInfiniteScroll()` 커스텀 훅**

<details>
<summary> issues를 받아오는 역할</summary>
<div markdown="1">

<br>
최초 실행 시 해당 repository의 issues 첫 페이지 issues를 받는 api를 호출합니다.

<br>

```tsx
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

// 코드 생략 

  useEffect(() => {
    getIssueList(1);
  }, []);
```

</div>
</details>


<details>
<summary> 무한스크롤 : scroll이 화면 가장 아래에 닿으면 issues 다음 페이지를 불러오는 역할</summary>
<div markdown="1">


```tsx
  const handleScroll = useCallback(() => {
    const { innerHeight } = window;   // 브라우저창 내용의 크기 (스크롤을 포함X)
    const { scrollHeight } = document.body; // 브라우저 총 내용의 크기 (스크롤을 포함)
    const { scrollTop } = document.documentElement; // 현재 스크롤 위치

// scrollTop과 innerHeight를 더한 값이 scrollHeight보다 크다면, 아래에 도달했다는 의미 
    if (Math.round(scrollTop + innerHeight) >= scrollHeight) {
      setIsLoading(true);
      getIssueList(currentPage + 1);
    }
  }, [currentPage, issues]);

// ... 코드 생략

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [handleScroll]);

```

</div>
</details>





<br>
<br>

**👉🏻 `<Home />` 페이지에서 UI 구현**

<img width="800" alt="IssueTitle" src="https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-3-12/assets/97151214/ffb6d5c1-ea38-4c22-8a6d-0f99fe2b0d7a">

<details>
<summary> useIssuesInfiniteScroll()를 호출하여 받은 issues배열을 map method를 통해 각 요소마다 'IssueTitle 컴포넌트' 반환 </summary>
<div markdown="1">

```tsx
const Home = () => {
  const { issues, isLoading } = useIssuesInfiniteScroll();

  return (
    <>
      <Main>
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
              <div>
                <StateTag>{issue.state === 'open' && <IconLeaf />}</StateTag>
                <IssueTitle
                  number={issue.number}
                  title={issue.title}
                  created_at={issue.created_at}
                  comments={issue.comments}
                  username={issue.user.login}
                />
              </div>
            </React.Fragment>
          );
        })}
      </Main>
      {isLoading && <Loading />}
    </>
  );
};
```
</div>
</details>

<br>
<br>
<br>



## 구현 결과
<img width="1200" src="https://github.com/Yang-ah/pre-onboarding-11th-3-12-private/assets/97151214/87e3781f-ed23-403e-a41f-fa7572b4ccf4" />


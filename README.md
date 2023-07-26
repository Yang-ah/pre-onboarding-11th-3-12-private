## 원티드 프리온보딩 프론트엔드 인턴십 - 3주차 과제
- 배포링크: [바로가기](https://web-pre-onboarding-11th-3-12-kvmh2mlk0cmy85.sel4.cloudtype.app/)
- 과제: [특정 깃헙 레포지토리](https://github.com/facebook/react/issues)의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축

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

* 선택 사항
  - [X] CSS-in-JS 적용

</div>
</details>




<br>
<br>



## 기능 구현


### Context API를 활용한 API 연동

- repository, organization 저장
- 이유 : API 호출 시 활용 & header의 타이틀 활용 & 추후 issues 불러오는 레포 변경 시 context만 변경하면 됨.

<br>
<br>

### 인피니티 스크롤

- 이벤트 리스너 활용

<br>
<br>

### Router / 에러 화면 처리

- `<Route path="/*" element={} />`

<br>
<br>


### DetailPage 구현

- 특정 issue를 받아오는 api 활용 & params 활용
이유 : 단일 데이터 받을 수 있는 api가 있어서 공식문서보고 사용.
list와 중복된 데이터라 전역으로 관리할지 고민하였으나 단일 데이터 따로 호출 하는 것을 선호하여 사용

<br>
<br>

### 디테일 페이지 마크다운 -> 마크업으로 변환

- react-markdown + plugin 사용 

<br>
<br>
<br>
<br>


## 구현 결과

<br>


### Home Page Loading

<img width="1280" alt="homeLoading" src="https://github.com/Yang-ah/pre-onboarding-11th-3-12/assets/97151214/5adadb64-c165-4d27-8ce7-c3c262094601">

### Home Page

<img width="1280" alt="home" src="https://github.com/Yang-ah/pre-onboarding-11th-3-12/assets/97151214/5669e966-36c5-4b39-91ac-b29263fd1299">

<br>

### Home Page Loading Scroll

<img width="1280" alt="lodingScroll" src="https://github.com/Yang-ah/pre-onboarding-11th-3-12/assets/97151214/2ea21d02-d062-4f4e-ab92-bf72eb81e119">

<br>

### Detail Page Loading

<img width="933" alt="loadingDetail" src="https://github.com/Yang-ah/pre-onboarding-11th-3-12/assets/97151214/f3bbc99b-9a91-473c-a623-a24a043d4732">

<br>

### Detail Page

<img width="1280" alt="detail" src="https://github.com/Yang-ah/pre-onboarding-11th-3-12/assets/97151214/c41364fd-e127-45d5-a3fd-20865cbe7af0">

<br>

### Error Page

<img width="1280" alt="errorpage" src="https://github.com/Yang-ah/pre-onboarding-11th-3-12/assets/97151214/8795ac7d-dd91-44f9-b7cb-d3b82d8add72">

![로고](https://user-images.githubusercontent.com/79398383/171569945-46bfed25-cd98-47b4-82ca-e894839282f2.png)

# 📖 독서스터디 온/오프라인 모임 서비스, 북-잉

### [👉 북-잉 바로가기](https://book-ing.co.kr)

<br>

## 💡 북-잉 주요기능

### 🥺 꼭 만나서 해야하나요? ➔ 온라인 스터디를 위한 화상채팅!

### 🧐 오프라인 스터디 장소가 어디죠? ➔ 카카오 지도 스터디 장소 표시!

### ☎️ 모임별 연락은? ➔ 실시간 채팅 기능으로 편리하게!

### 📚 어떤 책을 공부할까요? ➔ 손쉬운 책 검색 및 등록으로 모두에게 알려주세요!

### 📝 스터디 끝! 정리는? ➔ 웹 에디터로 누구나 보기 쉽게 스터디노트 작성!

<br>

## ⚙️ 북-잉 아키텍처

![아키텍처](https://blog.kakaocdn.net/dn/1yDmG/btrDOSWYdv4/zwJdDEWrGSaOf9mYRBnKZ0/img.png)

<br>

## 🛠 북-잉 프론트엔드 기술스택

![Javascript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Css](https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white)

![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Redux](https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/react%20router-CA4245?style=for-the-badge&logo=react%20router&logoColor=black)
![Axios](https://img.shields.io/badge/axios-00AF9C?style=for-the-badge&logo=axios&logoColor=black)
![Yarn](https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=black)
![Styled-components](https://img.shields.io/badge/styled%20components-DB7093?style=for-the-badge&logo=styled%20components&logoColor=black)

![Socket.Io](https://img.shields.io/badge/socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)
![WebRTC](https://img.shields.io/badge/webrtc-E03C31?style=for-the-badge&logo=webrtc&logoColor=white)
![Json web tokens](https://img.shields.io/badge/json%20web%20tokens-000000?style=for-the-badge&logo=json%20web%20tokens&logoColor=white)

![Amazonaws](https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white)
![Amazon S3](https://img.shields.io/badge/amazon%20s3-569A31?style=for-the-badge&logo=amazon%20s3&logoColor=white)
![Amplify](https://img.shields.io/badge/-aws%20amplify-FF9900?style=for-the-badge&logo=aws%20amplify&logoColor=white)

![Git](https://img.shields.io/badge/git-333333?style=for-the-badge&logo=git&logoColor=white)
![Git Hub](https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white)

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

### Library

|           Name            |      Appliance       | Version  |
| :-----------------------: | :------------------: | :------: |
|         toast-ui          |      웹 에디터       |  3.1.5   |
|     universal-cookie      |      쿠키 관리       |  4.0.4   |
|           immer           |    리덕스 스토어     |  9.0.12  |
|          moment           |      날짜 관리       |  2.29.3  |
|     react-datepicker      |      일시 생성       |  4.7.0   |
|        react-icons        |        아이콘        |  4.3.1   |
|   react-kakao-maps-sdk    |       지도 api       |  1.0.7   |
| react-responsive-carousel |    배너 슬라이더     |  3.2.23  |
|       redux-actions       |  리덕스 state 관리   |  2.6.5   |
|       redux-logger        |  리덕스 state 확인   |  3.0.6   |
|     socket.io-client      |  웹소켓 라이브러리   |  4.5.1   |
|          swiper           | 메인 페이지 슬라이더 |  8.1.5   |
|          aws-sdk          |       S3 접근        | 2.1134.0 |

## 🎯 북-잉 트러블슈팅

<details>
<summary>1. 스터디 목록 조회</summary>
<div markdown="1">
<br>

저희 서비스 내 모임페이지에서 스터디 목록을 조회할 때, 서버에서 응답하는 속도가 스터디 개수에 비례하여 느려지는 현상을 발견하였습니다.<br>
확인해보니, 스터디 목록 조회 시, 카카오 지도에 위치를 표시하기 위한 좌표정보가 필요하여 스터디 생성 시 DB에 저장했던 주소정보를 구글 API를 통해 위도와 경도로 바꿔주는 과정을 거침에 따라 시간이 오래 걸리는
것을 확인하였습니다.<br>
해당 문제를 해결하기위해 스터디 컬렉션 내 위도와 경도 도큐먼트를 추가하고, 스터디 생성 시 입력받은 주소정보를 즉시 좌표정보로 변환하여 위도와 경도 도큐먼트에 값을 삽입하였습니다.<br>
이에 수정 전 10개 스터디를 조회하는데 있어 걸렸던 평균시간 2.5초에서 수정 후 0.5초 이내로 속도개선이 된 것을 확인할 수 있었습니다.<br>

</div>
</details>

<details>
<summary>2. 다른 네트워크 상의 P2P 연결</summary>
<div markdown="1">
<br>

WebRTC를 이용하여 1:N P2P 연결을 시도하던 중 테스트 단계에서 STUN서버를 이용하여 동일한 네트워크 내에 있는 사용자 간 연결은 성공했으나, 다른 네트워크 상에 있는 사용자와는 연결되지 않는 현상이
있었습니다.<br>
해당 문제에 대해 확인해보니, NAT에 막혀 각 피어 간 시그널링 불가능으로 인해 장치 정보를 불러오지 못했습니다. 기본적으로 P2P 연결 시 최적의 ICE를 찾으며 다른 클라이언트에게 갈 수 있는 최적의 네트워크를
찾는 것이 맞으나, STUN 서버를 거쳐도 NAT 뒤에 어떤 IP정보가 있는지 알 수 없는 상황이 있는 것이 원인이었습니다.<br>
따라서 해당 문제를 해결하기 위해 NAT 환경에서 릴레이하여 통신할 수 있는 TURN 서버를 자체적으로 구축하여 해당 문제를 해결하였습니다.<br>
TURN 서버는 인터넷 망에 위치하고 각 피어들이 사설망 안에서 통신하는데, 이 때 각 피어가 직접 통신하는 것이 아니라 릴레이 역할을 하는 TURN 서버를 통해 경유하여 다른 네트워크 사용자들끼리 연결가능 할 수
있다는 것을 알았습니다.<br>

</div>
</details>

<details>
<summary>3. 화면 공유</summary>
<div markdown="1">
<br>

WebRTC를 이용하여 화면공유 기능을 구현하던 중, 화면공유 스트림이 피어끼리 연결되지 못해 화면이 공유되지 않는 문제가 발생하였습니다.<br>
이 문제를 확인하기 위해 화면 스트림에 또 다른 소켓 아이디를 부여하여 시그널링 서버에서 Offer, Answer, Icecandidate를 주고 받으며, P2P 연결에 성공하였습니다. 하지만 화면공유 시, 각
피어의 트랙이 일정하지 않은 형태로 중복되어 여러개의 비디오와 음성이 출력되어 렌더링되는 문제가 발생하였습니다.<br>
해당 문제를 해결하기 위해 브레인 스토밍 하던 중, 최종 발표 준비까지의 시간이 여유치 않아, 최종 발표 이후 기능을 추가하기로 했습니다.<br>

</div>
</details>

## 👨‍👨‍👦‍ 북-잉 프론트엔드 팀원소개

|    [박민우🔰](https://github.com/MinwooPark93)   |       [김주탁](https://github.com/Taak-e)       |  
|:——————————————————————————————————————————————:|:——————————————————————————————————————————————:|
| <img src="https://avatars.githubusercontent.com/u/79454069?v=4" alt="프로필 이미지" width="200px"/> | <img src="https://avatars.githubusercontent.com/u/83898103?v=4" alt="프로필 이미지" width="200px"/> |
|                   `Front-End`                  |                  `Front-End`                   |




# millie_clone_coding
밀리의 서재 클론 코딩

### How to start
1. server/config/default.yml, development.yml 수정

```
// server/config/default.yml

server: 
  port: 5000

db: 
  type: 'postgres'
  port: 5432
  database: 'millie-app'

jwt:
  expiresIn: 3600 
```
```
// server/config/development.yml

db: 
  host: 'localhost'
  username: 'postgres'
  password: 'your db password'
  synchronize: true


jwt: 
  secret: 'your secret key'
```

2. 터미널 실행
``` 
npm run server
npm run client
```

### Landing Page
<img src = "https://user-images.githubusercontent.com/80209277/188632838-5eab6c5e-68c4-4d85-96ae-fda59d47847a.png" width="80%" height="80%">

### Login / Logout
<img src = "https://user-images.githubusercontent.com/80209277/188685410-f975aa16-59a9-409a-bd5a-84b29dd07d3b.gif" width="80%" height="80%">

### Slider
<img src = "https://user-images.githubusercontent.com/80209277/188635297-8d8724cb-cbff-4f40-97b1-77c5c4c54a0b.gif" width="80%" height="80%">
<ul> 
<li>인터파크 book api 이용한 추천도서 베스트셀러 슬라이더</li>
<li>슬라이더 라이브러리 없이 구현</li>
</ul>

### Server 구성
<img src = "https://user-images.githubusercontent.com/80209277/188686079-40eed191-7038-4d3a-a4e8-69939ff32ace.png" width="80%" height="80%">
<ul> 
<li>login logout 시 access token 과 refresh token 발급</li>
</ul>

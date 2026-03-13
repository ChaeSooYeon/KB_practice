# KB_practice

KB IT's Your Life 실습 코드

## Index

0. HTTP
1. HTML
2. CSS
3. Js
4. Node.js
5. Vue.js
6. Spring
7. Git
8. CI/CD

## Git

### git Flow

> Ref: https://medium.com/corca/%EC%8B%A4%EB%AC%B4%EC%97%90%EC%84%9C-%EC%82%AC%EC%9A%A9%EB%90%98%EB%8A%94-git-flow-%EC%82%AC%EC%9A%A9%EB%B2%95-aka-app%EA%B0%9C%EB%B0%9C%EC%97%90-%EC%93%B0%EC%9D%B4%EB%8A%94-git-flow-%EB%B8%8C%EB%9E%9C%EC%B9%AD-%EC%A0%84%EB%9E%B5-9e860d7ce771

- main
- develop
- feature
- hotfix

### 커밋 메세지 컨벤션

<code>feat</code> : 새로운 기능 추가  
<code>fix</code> : 버그 수정  
<code>docs</code> : 문서 수정  
<code>style</code> : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우  
<code>refactor</code> : 코드 리펙토링  
<code>test</code> : 테스트 코드, 리펙토링 테스트 코드 추가  
<code>chore</code> : 빌드 업무 수정, 패키지 매니저 수정

### git

.gitignore

```md
# 파일 제외 (파일명.확장자)

파일명.txt

# 현재 경로에 있는 파일만 제외 (다른 경로의 동일한 파일명은 추적)

/파일명.txt

# 특정 경로안의 특정 파일 제외

폴더명/파일명.txt

# 특정 폴더안의 파일 전부 제외

폴더명/

# 해당 확장자 파일 전체 제외

\*.txt

# 예외

!제외할 파일명.txt
```

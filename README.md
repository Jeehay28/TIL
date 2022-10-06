# Today I Learned

> 매일매일 배운 것을 기록합니다.

## :date: 13/09/2022

### 웹 프로그래밍 기획과 기본

#### :pencil2: 리눅스 커맨드라인 기초

- `pwd` : print working directory의 약자로 현재 작업 경로를 출력해주는 명령어
- `cd` : change directory의 약자로 현재 작업 경로를 변경할 때 쓰는 명령어
  - 절대경로는 `/`로 시작함
  - 상위경로는 `..` 으로 나타냄
  - tab을 사용하면 경로 자동 완성이 됨`
- `ls` : list의 약자로 현재 작업 경로에 있는 파일이나 디렉토리를 출력해주는 명령어
  - `ls -a`, `ls -l`, `ls -al` 과 같은 옵션을 붙일 수 있음
- `history` : 과거에 사용했던 명령어 리스트를 보여줌
  - 132번째 명령어를 복구하고 싶으면 `!132` 입력

#### :pencil2: vim 사용법

- **Vim** is a free and open-source, screen-based **text editor program**.

- 명령 모드와 입력 모드
  - vim 에디터를 열때는 명령 모드로 진입함
  - 명령모드에서는 입력이 불가능함
  - 입력을 하려면 입력모드로 바꿔야 함
    - 키보드에서 `i`누름
  - 입력이 끝나고, 저장하고 나오려면 명령 모드로 바꿔야 함
    - 키보드에서 `ESC` 누름
  - 입력 가능한 명령어
    - `:w` : 저장하기
    - `:q` : 나오기
    - `:wq` : 저장하고 나오기
  - 참고자료 [링크](https://zeddios.tistory.com/122)
  - 비정상적으로 종료시 해결 방법
    - vim 이 비정상 종료 되었을 때 `swp` 파일이 생성됨
      - ATTENTION 문구가 뜨는 경우
        1. 두 프로세스, 두 사람이 동시에 한 파일을 수정하는 경우
        2. crash 발생 vim이 비정상적으로 닫힌 경우
    - 기존에 입력했던 내용을 복구하고 싶을 때는 `vim -r 파일명`을 입력하거나 Recovery 모드로 진입
    - 정상 종료 후, `swp` 파일 삭제
      - `rm 789.txt.swp` <-- `rm` 명령어는 remove 약어

#### :pencil2: 마크다운 문법

- 외부 링크 추가

```
사용문법: [Title](link)
적용예: [Google](https://google.com, "google link")
```

- [참고자료](https://gist.github.com/ihoneymon/652be052a0727ad59601)

#### :pencil2: 버전 관리 시스템과 git

##### 버전 관리 시스템을 사용하는 이유

1. 실행 취소, 재실행이 가능함
2. 버전간 소스코드 비교가 가능함
3. 협업이 쉬워짐

##### 다양한 버전관리 방법

이름 변경하기 등의 방법이 있는데 개발할 때는 git을 주로 사용함

##### 커밋

- 커밋은 논리적 변경이 있을 때 만듦
- 가능하면 커밋 크기가 작을 수록 좋음

##### 리포지토리

- 정의: 여러 파일을 하나로 모은 컬렉션

###### 커밋 이력 보기

```
git log

```

##### 리포지토리

- 정의 : 여러 파일을 하나로 모은 컬렉션
- 일반 디렉터리와 리포지토리의 차이 : `git` 디렉터리의 유무

##### 저장소 상태 파악하기

```
git status
```

## :date: 20/09/2022

#### :pencil2: 브랜치

- 정의: **A branch in Git is simply a lightweight movable pointer to one of these commits.**
- 브랜치는 특정한 목표를 가지고 코드를 수정할 때 주로 만듦
  - 이슈 하나 당 브랜치 하나를 주로 만듦

##### 관련 명령어

- 브랜치 목록 보기

```
git branch
```

- 브랜치 생성하기

```
git branch 브랜치 이름
```

- 특정 브랜치로 전환하기

```
git checkout 브랜치 이름

or

git switch 브랜치 이름
```

- 브랜치 생성과 체크아웃 동시에 하기

```
git checkout -b 브랜치명

git checkout -b 브랜치 이름

```

## :date: 27/09/2022

### 브랜치 병합

- 명령어: `git merge 브랜치명`

## 새로운 branch를 생성하여 원격저장소 main branch 에 업데이트

### from a local repository

- make a new branch
- switch to a new branch
- commit using add, commit, push

```
git branch 8-branch
git checkout 8-branch
git add README.md
git commit -m "commit from 8-branch"
git push origin 8-branch
```

### @GitHub(Remote)

- pull request
- `main <- 8-branch`
- confirm

### Sync between Local & Remote

```
git pull origin main
```

## :date: 30/09/2022

### How to delete all commit history

1. **Delete the .git directory** in your project root (note that it's hidden)
2. Initialize a new repository in the same folder and link it to the GitHub repository

```
rm -rf .git
git init
git remote add origin https://github.com/Jeehay28/Jeehay28.git
```

3. Commit your current version of code

```
git add *
git commit -am "message"
```

4. Force the update to GitHub

```
git push -f origin master
```

## :date: 04/10/2022

### What to Include in your README

1. Project's Title
2. Project Description
3. Table of Contents (Optional)
4. How to Install and Run the Project
5. How to Use the Project
6. Include Credits
7. Add a License
8. Badges (Additional README Sections)
   🔗[for further information](https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/)

## :date: 04/10/2022

### How to push a cloned repo to my repo

```
$ git clone HTTPS

$ git remote -v

$ git remote remove origin       <----- reset origin

$ git remote add origin HTTPS    <----- adds new origin

$ git branch -M main             <----- changes 'master' to 'main'

$ git push -u origin main        <----- uploads content from a local repository to a remote repository

```

:date: 06/10/2022

### How to delete a git branch both locally and remotely

```
// delete branch locally
git branch -d localBranchName

// delete branch remotely
git push origin --delete remoteBranchName
```

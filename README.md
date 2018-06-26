## 간단하게 Babel 사용하기
- project 생성
	> mkdir <project명>
	> cd <project명>
	> npm init -y
- src directory 생성
	> mkdir src
- taget directory 생성
	> mkdir lib
- babel 설치
	> npm install --save-dev babel-cli babel-preset-env
- package.json 수정
```
{
  	......
  	"scripts": {
    	"build": "babel src -d lib",
    	......
  	},
	......
}
```
- 컴파일
	> npm run build
- vscode에서의 컴파일
	> cmd + shift + b -> npm:build 선택
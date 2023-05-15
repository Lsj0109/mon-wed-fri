// console.log('hello JavaScript');

/*
		JavaScript

		목차

		1 데이터 타입
		2 연산자
		3 조건문
		4 반복문
		5 변수와 상수
		6 함수
		7 배열
		8 객체
		9 클래스
		10 에러와 에러처리
		11 비동기 작업
		12 프로미스
		13 ES6 문법
		14 정규식
		15 JSON

*/


/*
		데이터 타입

		1 String (문자열)
		2 Number
		3 Boolean
		4 null
		5 undefined
		6 BigInt
*/

/*
		1 String (문자열)

		연속된 문자
		'', "" 안에 값을 작성한다
*/

// var foo = 'bar'

// console.log(foo) // bar
// console.log(typeof foo) // string

// console.log(foo[0]); // b
// console.log(foo[1]) // a
// console.log(foo[2]) // r

// console.log(foo.length) // 3


/*
		Number

		-(2^1024-1) 에서 2^1024-1 사이의 숫자를 나타낸다

		값의 종류:
				정수, 소수, NaN(Not a Number), +Infinity, -Infinity
*/

// 정수
// var year = 2023;
// console.log(year); // 2023
// console.log(typeof year); // number

// 소수
// var pi = 3.14
// console.log(pi); // 3.14

// NaN
// var nan = 2 - 'foo';
// console.log(nan);


// Number타입의 최대 값
// var max_value = Number.MAX_VALUE;
// console.log(max_value);

// Number타입의 최소 값
// var negative_max_value = -Number.MAX_VALUE;
// console.log(negative_max_value);


// 양의 무한대
// var infinity = Number.MAX_VALUE * 1.1;
// console.log(infinity); // Infinity

// 음의 무한대
// var negative_infinity = -Number.MAX_VALUE * 1.1;
// console.log(negative_infinity); // -Infinity


/*
	Boolean
	참 또는 거짓 (true or false)의 값을 갖는다
*/

// var bool = true;

// console.log(bool);
// console.log(typeof bool); // boolean
	

// 비교연산이나 논리연산은 boolean값을 리턴한다
// console.log(1 > 0) // true
// console.log(1 == 2) // false


/*
	Null 
	'무효' 또는 '없는'의 상태를 나타낸다
*/

// var foo = null;
// console.log(foo); // null
// console.log(typeof foo) // object


/*
	undefined
	정의되지 않은 변수를 나타낸다
*/

// var x;

// console.log(x);
// console.log(typeof x)


/*
	BigInt
	안전한 정수(safe integer) 밖의 정수를 나타낸다
	Number 타입 값의 뒤에 n을 붙여 선언한다

	* 안전한 정수: -(2^53 - 1) 에서 2^53 - 1 사이의 정수
*/


// 안전한 정수 (최대)
// var max_safe_integer = Number.MAX_SAFE_INTEGER;
// console.log(max_safe_integer);

// 안전한 정수 최소
// var min_safe_integer = Number.MIN_SAFE_INTEGER;
// console.log(min_safe_integer);


// Number타입은 안전한 정수 밖의 정수를 정확하게 저장할 수 없다
// var not_safe_integer = 9999999999999999;
// console.log(not_safe_integer); // 10000000000000000

// var bigint = 9999999999999999n;
// console.log(bigint); // 99999999999999999n

// console.log(typeof bigint) // bigint


/*
	연산자

	1 수리연산자
	2 할당연산자
	3 비교 연산자
	4 논리 연산자
	5 타입 연산자
*/


/*
	수리연산자

	1 4칙연산
	+ - * /

	2 증가 연산자
	++

	3 감소 연산자
	--

	4 제곱연산자
	**

	5 계수 연산자
	%
*/


// 4칙 연산
// var add = 1 + 1
// var subtract = 2 - 1
// var divide = 1 / 2
// var multiply = 1 * 1

// console.log('덧셈:', add)


// 증가연산자
// var i = 1;
// i++
// console.log(i)

// 제곱 연산자 (지수)
// var exp = 2 ** 7
// console.log(exp) // 128

// 계수 연산자 
// var mod = 5 % 2;
// console.log(mod) // 1


/*
	할당연산자

	1 변수할당연산자
	=
	2 덧셈할당연산자
	+=
	3 빼기할당연산자
	-=
	4 곱하기할당연산자
	*=
	5 나누기할당연산자
	/=
	6 지수할당연산자
	**=
	7 계수할당연산자
	%=
*/


// 변수할당연산자
// var foo = 'bar'
// console.log(foo);


// 덧셈할당연산자

// var longVariablesName = 1;

// longVariablesName = longVariablesName + 1 와 같다
// longVariablesName += 1;

// console.log(longVariablesName); // 2


/*
	비교 연산자

	1 동등연산자 ==
	2 비동등연산자 !=
	3 엄격동등연산자 ===
	4 엄격비동등연산자 !==
	5 greater than 연산자 >
	6 greater than or equal 연산자 >=
	7 less than 연산자 <
	8 less than or equal 연산자 <=
*/


// 동등연산
// console.log('동등:', 2023 == 2023) // true
// console.log('동등', 2023 == '2023') // true
// console.log('동등:', null == undefined); // true

// 비동등연산
// console.log('비동등', 2023 != 2023) // false
// console.log('비동등', 2023 != '2023') // false
// console.log('비동등', null != undefined) // false


// 엄격동등연산
// console.log('엄격동등', 2023 === 2023); // true
// console.log('엄격동등', 2023 === '2023') // false
// console.log('엄격동등', null === undefined) // false

// 엄격비동등연산
// console.log('엄격비동등', 2023 !== 2023) // false
// console.log('엄격비동등', 2023 !== '2023') // true
// console.log('엄격비동등', null !== undefined) // true


// greater than 
// console.log(1 > 0)


/*
	논리연산자

	1 AND (그리고)
	expr 1 && expr 2

	2 OR (또는)
	expr 1 || expr2

	3 ! (NOT)
	!expr
*/


// AND 
// console.log(1 > 0 && 1 < 2) // true

// OR
// console.log(1 > 0 || 1 > 2) // true

// NOT (부정)
// console.log(!(1>0)) // false
// console.log(!true) // false


// boolean타입이 아닌 다른 데이터 타입을 부정할 경우

// console.log('Not null:', !null) // true

// console.log('Not undefined', !undefined) // true

// console.log('Not zero:', !0) // true

// console.log('Not 빈문자열', !""); // true


/* 
	타입 연산자 

	1 typeof
	2 instanceof
*/

// var foo = 'bar';

// // 인수의 타입을 리턴한다
// console.log('foo의 타입:', typeof foo);


// Q. 연산자 문제
// 다음 문장을 표현식으로 작성해보세요
// 나이가 13세 이상이고 19세 이하인 사람 (청소년)

// age >= 13 && age <= 19


/*
	조건문

	1 if 조건문
	2 switch 조건문
	3 ? (삼항연산자) 조건문
*/


/*
	1 if 조건문

	if (조건) {
		조건이 참일 경우 실행되는 코드
	}
*/


// var year = 2023;


// if (year === 2023) {
// 	console.log('이번 년도')
// }


// var year = 2023;

// if (year === 2023) {
// 	console.log('이번 년도')
// } else {
// 	console.log('이번 년도가 아닙니다')
// }


// var year = 2023;

// if (year === 2022) {
// 	console.log('작년')
// } else if (year === 2023) {
// 	console.log('올 해')
// } else if (year === 2024) {
// 	console.log('내년')
// } else {
// 	console.log('가까운 년도가 아닙니다')
// }


/*
	2 switch 조건문
	엄격동등비교를 수행한다
*/


// var year = 2023;

// switch(year) {
// 	case 2022:
// 		console.log('작년');
// 		break;
// 	case 2023:
// 		console.log('올해')
// 		break;
// 	case 2024:
// 		console.log('내년')
// 		break;
// 	default:
// 		console.log('가까운 년도가 아닙니다')
// }


/*
	삼항연산자

	조건 ? 값1 : 값2

	조건이 참이면 값1 리턴
	조건이 거짓이면 값 2 리턴
*/

// var year = 2023;

// console.log(year === 2023 ? '올해' : '올해가 아닙니다');



/*
	나이가 성인이면 "성인입니다"
	성인이 아니면 "성인이 아닙니다"
	를 출력하는 조건문을 만들어 보세요

	1 if조건문
	2 삼항연산자 조건문
*/

// var age = 20;

// // ...

// // if/else 조건문
// if (age >= 18) {
// 	console.log('성인입니다')
// } else {
// 	console.log('성인이 아닙니다')
// }


// // 삼항연산자
// var r = age >= 18 ? '성인입니다' : '성인이 아닙니다'

// console.log(r);


/*
	반복문

	1 for 반복문
	2 while 반복문
*/


// for 반복문

// for (var i=0; i<10; i++) {
// 	console.log(i + '번 실행되었습니다')
// }

// 1에서 10까지의 합을 구한다

// var sum = 0;

// for (var i=1; i<=10; i++) {
// 	sum += i; // sum = sum + i
// }

// console.log(sum);


// while 반복문

// let i = 0;

// while(i < 10) {

// 	console.log(i + '번 실행되었습니다');

// 	i++;
// }


// Q. 반복문

// 1/1, 1/2, 1/3, ... 1/10 까지의 합을 구해보세요

// var sum = 0;

// for (var i=1; i<=10; i++) {
// 	sum += (1/i);
// }

// console.log(sum);


/*

	변수와 상수

	1 변수: var, let
	2 상수: const
	3 변수/상수의 범위
*/


// 1 var

// 변수 초기화
// var foo = 'bar';

// console.log(foo) // bar


// var foo = 'bar'; // 초기화
// foo = 'baz'; // 재정의(재할당)

// console.log(foo) // baz

// var foo; // 선언
// foo = 'bar'; // 정의

// console.log(foo) // bar

// var foo = 'bar'
// var foo = 'baz' // 재선언

// console.log(foo) // baz


// let 변수
// let foo = 'bar'

// console.log(foo); // bar

// let foo = 'bar';
// foo = 'baz' // 재정의

// console.log(foo) // baz

// let foo; // 선언
// foo = 'bar' // 정의

// console.log(foo) // bar

// let foo = 'bar'
// let foo = 'baz' // 재선언 불가


// 3 const (constant) 상수

// const foo = 'bar'

// console.log(foo) // bar

// const foo;
// foo = 'bar'; // 에러


/*
	변수/상수의 범위

	1 전역 범위
	2 블록 범위
	3 지역 (함수) 범위
*/


/*
	1 전역 범위
	함수 또는 블록 밖에서 선언된 변수가 갖는 범위
*/

// 전역(global) 변수
// 어디에서든지 접근 가능하다
// var varInGlobal = true;


// { // 블록
// 	console.log(varInGlobal) // true
// }

// function f() {
// 	console.log(varInGlobal) // true
// }

// f()


/*
	2 지역 범위(함수 범위)
	함수안에서 선언된 변수가 갖는 범위
*/

// function f() {
// 	// 함수내에서만 접근 가능
// 	var varInFunction = true;
// }

// console.log(varInFunction) // 에러


// 3 블록 범위
// 블록안에서 선언된 변수가 갖는 범위

// {
// 	var varInBlock = true;
// 	let letInBlock = true;
// 	const constInBlock = true;
// }

// console.log('var', varInBlock) // true
// // console.log('let', letInBlock) // 에러
// console.log('const', constInBlock); // 에러


// /*
// 	함수

// 	정의: 호출될 때만 실행되는 코드

// 	1 함수 선언 방법
// 	2 게양
// 	3 인자
// 	4 return 
// 	5 콜백
// */


/*
	1 함수 선언 방법

	1 함수선언식
	2 함수표현식
	3 화살표 함수
*/


// 함수 선언식

// function f() {
// 	console.log('foo')
// }


// 함수표현식
// 변수에 익명함수를 할당한다
// var f = function () {
// 	console.log('foo')
// }


// 화살표 함수

// var f = () => {
// 	console.log('foo')
// }


/*
	게양 (Hoisting);
*/

// f()
// // 함수선언식에만 적용된다

// // 함수의 정의가 호출 시점보다 올라간다
// function f() {
// 	console.log('foo');
// }


// let f = function () {
// 	console.log('foo')
// }

// f()


// parameter (인자, 매개변수)

// function add(x, y) { // x, y는 파라미터
// 	console.log(x + y);
// }

// add(1, 2)


// return 

// function add(x, y) {
// 	return x + y;
// }

// var r = add(1, 2);

// console.log(r)


/*
	콜백 (callback)
	다른 함수의 인자가 되는 함수
*/

// function f(callback) {
// 	let r = callback(); // f함수 내부에서 콜백이 실행되었다
// 	console.log(r)
// }

// function cb() { // 콜백
// 	return 'foo'
// }

// f(cb);


// 콜백 예시
// function getTime() {
// 	let time = new Date().toLocaleTimeString(); // 현재시간
// 	console.log(time);
// }

// // setInterval(callback, ms)
// // ms마다 callback을 실행하는 함수
// setInterval(getTime, 1000);



// Q. 인자에 따라서 성인인지 아닌지를 말해주는 함수를 만들어 보세요

// 함수 선언
// function isAdult(age) { // age: 매개변수(parameter)

// 	if (typeof age !== 'number') {
// 		console.log('인자는 숫자만 가능합니다')
// 		return; // return 아래 코드는 실행되지 않는다
// 	}

// 	if (age >= 18) {
// 		console.log('성인입니다')
// 	} else {
// 		console.log('성인이 아닙니다')
// 	}
// }


// // 함수 호출
// isAdult(15) // 성인이 아닙니다
// isAdult(20) // 성인입니다 20: 인자(argument), 함수에 실제 전달하는 값

// isAdult('hello') // 성인이 아닙니다..?



/*
	배열 (Array)

	한개 이상의 값을 갖는 데이터 타입

	1 배열에 접근하기
	2 배열 메서드
	3 배열과 반복문
*/


// 1 배열에 접근하기

var arr = ['foo', 'bar', 'baz']; // 문자열 배열


// 첫번째 아이템의 index는 0이다
// console.log(arr[0]) // foo

// console.log(arr[1]) // bar

// console.log(arr[2]) // baz

// console.log(arr.length) // item의 갯수: 3


// 아이템 업데이트하기
// arr[2] = 'Baz';

// console.log(arr)


// 아이템 추가하기
// arr[3] = 'duck'

// console.log(arr);

// arr[4] = 'duck'

// console.log(arr)

// console.log(arr[3]) // undefined


/*
	배열 메서드

	Array.push()
	Array.pop()
	Array.concat()
	Array.sort()
*/


// Array.push(newItem1, newItem2, ...);

// var arr = ['foo', 'bar'];

// arr.push('baz'); // 새로운 아이템을 추가한다

// console.log(arr); // foo, bar, baz


// Array.pop()
// var arr = ['foo', 'bar', 'baz'];

// arr.pop(); // 가장 마지막 아이템을 제거한다

// console.log(arr);


// Array1.concat(Array2)
// Array1뒤에 Array2를 합친다
// var arr1 = ['foo', 'bar'];
// var arr2 = ['baz'];

// var result = arr1.concat(arr2); // concatenate 

// console.log(result)


// Array.sort();

// var arr = ['foo', 'bar', 'baz'];

// arr.sort(); // 정렬 메서드
// // 문자열의 기본값은 알파벳순으로 정렬한다

// console.log(arr); // bar, baz, foo


/*
	반복문과 배열

	배열에 특정한 작업을 수행할 수 있다
*/


// var arr = ['foo', 'bar', 'baz'];

// // 배열의 아이템에 특정한 작업을 수행할 수 있다
// for (var i=0; i<arr.length; i++) {
// 	console.log(arr[i].toUpperCase())
// }


// 필터링 작업

// var arr = ['foo', 'bar', 'baz'];

// for (var i=0; i<arr.length; i++) {
// 	if (arr[i][0] === 'b') { // b로 시작하는 아이템
// 		console.log(arr[i])
// 	}
// }

// console.log('    foo     ')
// console.log('    foo     '.trim())

// console.log('foo, bar, baz'.split(',')) // [foo, bar, baz]



// Q1. beers 배열에 미국 맥주를 추가해보세요

// var beers = ['기네스', '하이네켄']
// var americanBeer = '버드와이저'


// // beers.push(americanBeer);

// // console.log(beers)

// beers[2] = americanBeer;

// console.log(beers)



// 성인의 나이만 출력하는 코드를 작성해보세요
// 반복문 사용
// var ages = [12, 19, 23, 30];


// for (var i=0; i<ages.length; i++) {
// 	if (ages[i] >= 18) { // 조건
// 		console.log(ages[i])
// 	}
// }



/*
	객체 (Object)
	데이터와 함수의 집합
*/


// 객체
// var cat = {
// 	// 객체의 속성 (property)
// 	name: '치즈',
// 	home: null,
// 	sound: function() { // 메서드 (method)
// 		return '야옹'
// 	}
// }


// console.log(cat)
// console.log(cat.name) // name 속성에 접근
// console.log(cat['name']) // name 속성에 접근
// console.log(cat.color); // 존재하지 않는 속성에 접근: undefined
// console.log(cat.sound()) // 메서드 호출



// 새로운 속성 추가
// cat.age = 2; // age 속성 추가

// console.log(cat)

// var cat = {
// 	// 객체의 속성 (property)
// 	name: '치즈',
// 	home: null,
// 	sound: function() { // 메서드 (method)
// 		return '야옹'
// 	}
// }

// // 속성 업데이트

// // cat.home = '삼산동' // home 속성 업데이트

// // console.log(cat);


// // 속성 삭제
// delete cat.home; // home 속성 삭제

// console.log(cat)


// // Q. 네덜란드 맥주의 이름에 접근해보세요
// var beers = [
// 	{ name: '기네스', origin: '아일랜드' },
// 	{ name: '하에네켄', origin: '네덜란드' },
// 	{ name: '버드와이저', origin: '미국' },
// ]


// console.log(beers[1].name); // 하이네켄


/*
	클래스 (class)
	객체를 생성하기 위한 템플릿

	1 클래스 인스턴스
	2 static 속성과 static 메서드
	3 미리 정의된 클래스
	4 리터럴 표기법
*/


// 1 클래스 인스턴스

// class Cat {

// 	// 생성자 함수: 인스턴스 속성을 설정하기 위해 사용된다
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	// 클래스 멤버 (속성)
// 	home = null;

// 	// 클래스 멤버 (메서드)
// 	sound() {
// 		return '야옹'
// 	}
// }

// // Cat 클래스의 인스턴스
// const cat = new Cat('치즈', 2);

// console.log(cat);

// console.log(cat instanceof Cat); // true


// // 상속 (코드재사용)
// console.log(cat.home) // null


// // 상속
// console.log(cat.sound()) // 야옹



/*
	2 static 속성과 static 메서드

	클래스와 인스턴스와 관련된 유틸리티를 제공한다
*/

// class Cat {

// 	// ... (생성자, 멤버 등)

// 	// static 속성
// 	static family = '고양이과'

// 	// static 메서드
// 	static isAdult(age) {
// 		if (age < 1) {
// 			return '아기고양이'
// 		} else {
// 			return '성체고양이'
// 		}
// 	}
// }

// // static 속성과 메서드는 클래스 자체가 호출한다
// console.log(Cat.family) // 고양이과

// console.log(Cat.isAdult(2)) // 성체고양이


// var pi = Math.PI;

// console.log(pi);


/*
	3 미리 정의된 클래스

	문자처리: String
	숫자 및 날짜: Number, Math, Date
	인덱스가 있는 콜렉션: Array
	에러: SyntaxError, ReferenceError 기타 에러 등
	기타: Promise, JSON
*/


/*
	4 리터럴 표기법
*/

// String클래스의 인스턴스
// var foo = new String('bar'); // 클래스를 이용
// var foo = 'bar' // 리터럴 표기법 (값만 적는다)

// console.log(foo.toUpperCase());


// Number의 인스턴스

// var year = new Number(2023); // 클래스
// var year = 2023; // 리터럴 표기


// Object의 인스턴스
// var o = new Object({ prop1: 'foo', prop2: 'bar' }); // 클래스
// var o = { prop1: 'foo', prop2: 'bar' }; // 리터럴 표기


/*
	Q. 다음을 클래스로 정의해보세요

	클래스 이름: Beer

	인스턴스의 속성: name, origin(원산지)

	클래스 속성 멤버
	history: B.C 3000

	클래스 메서드 멤버
	recipe(제조법): 보리, 홉, 효모, 물 등

	static 속성
	caution(경고): 지나친 음주는 돈이 많이 듭니다
*/


// class Beer {
// 	// 인스턴스의 속성 생성
// 	constructor(name, origin) {
// 		this.name = name;
// 		this.origin = origin;
// 	}

// 	// 속성 멤버
// 	history = 'B.C 3000';

// 	// 메서드 멤버
// 	recipe() {
// 		return '밀, 홉, 효모, 물 등'
// 	}

// 	// static 멤버
// 	static caution = '지나친 음주는 돈이 많이 듭니다'
// }


// // Beer의 인스턴스
// var irishBeer = new Beer('기네스', '아일랜드');
// var dutchBeer = new Beer('하이네켄', '네덜란드');

// console.log(irishBeer)
// console.log(dutchBeer)

// // 메서드
// console.log(irishBeer.recipe());

// // static 속성
// console.log(Beer.caution);



/*
	에러와 에러처리

	1 에러개념
	2 에러처리
	3 에러 종류
	4 커스텀 에러
*/


/*
	1 에러개념
	에러는 프로그램의 실행을 중단시킨다
	에러는 처리가 되어야 한다
*/


// console.log(foo)
// // ReferenceError: foo is not defined.

// // ReferenceError: name
// // foo is not defined: message
// // at Object...: stack

// // > app crashed (실행 중단)


/*
	2 에러 처리

	try/catch
*/


// try {

// 	// 코드...

// 	console.log(foo);

// } catch (error) {
// 	// 에러 처리
// 	console.error(error);
// }



/*
	3 에러의 종류

	ReferenceError (참조 에러)
	SyntaxError (문법 에러)
	TypeError(타입 에러)
	RangeError(범위 에러)
	URIError(URI 에러)

*/


// 1 ReferenceError
// 존재하지 않는 변수를 참조할 때 발생한다

// console.log(x) // ReferenceError


// 2 SyntaxError
// 문법이 잘못되었을 때 발생한다
// 컴파일 에러를 발생시킨다
// 에러 처리를 할 수 없다

// console.log(2023)) // SyntaxError: Unexpected token ')'


// TypeError
// 변수 또는 매개변수가 유효한 타입이 아닐 때 발생한다


// setInterval(callback, ms)
// setInterval(null, 1000);
// TypeError
// The 'callback' argument must be of type function. Received null.



// RangeError
// 값이 지정된 범위를 벗어났을 때 발생한다


// var pi = Math.PI;

// console.log(pi); // Number 

// console.log(pi.toPrecision(200));
// // RangeError
// // toPrecision() argument must be between 1 and 100


// URIError
// encodeURI 또는 decodeURI 함수가 유효하지 않은 인자를 전달받았을 때 발생한다

// console.log(decodeURI('%'));
// URIError
// URI malformed


/*
	4 커스텀 에러

*/


// try {

// 	var age = 15;

// 	console.log('학생:', '아저씨 담배 하나 주세요')

// 	// 에러를 발생시켰다
// 	if (age < 18) {
// 		// throw 커스텀 에러 
// 		throw '미성년자는 담배를 살 수 없습니다'
// 	}

// 	// throw 아래 코드는 실행되지 않는다
// 	console.log('CU직원:', '여기있습니다');

// } catch (error) {
// 	console.error('실패:', error)
// } finally {
// 	// 에러 발생 여부와 상관없이 항상 실행된다
// 	console.log('끝')
// }


/*
	 비동기 작업 (Asynchronous operations)

	 블록킹을 방지하기 위해 사용된다
	 예) 서버에 데이터 요청 등

	 1 동기 작업
	 2 비동기 작업
*/

/*
	1 동기 작업 (Synchronous operation)
	호출된 순서대로 코드가 실행된다
*/

// function f() {
// 	console.log('작업 1')
// }

// f();
// console.log('작업 2')
// // 작업 1
// // 작업 2

/*
	2 비동기 작업 (Asynchronous operation)

	빠른 것부터 처리된다
*/


// 서버에 데이터를 요청하고 받는데 1초가 걸린다고 가정
// function fetchData(callback) { // 비동기 함수
// 	var data = { foo: 'bar '};

// 	// setTimeout(callback, ms): ms 뒤에 callback을 실행한다
// 	setTimeout(function () {
// 		callback(null, data);
// 	}, 1000)
// }

// fetchData(function (error, data) {
// 	if (error) {
// 		return console.error(error);
// 	}

// 	console.log('서버에서 받은 데이터:', data);
// })

// console.log('다음 작업');


/*
	프로미스

	비동기 작업의 성공 실패 여부와 그 결과를 나타내는 객체
	비동기 작업의 가독성을 향상시키기 위해 사용된다

	1 프로미스 객체의 구조
	2 실제 예시
	3 async/await
*/


/*
	1 프로미스 객체의 구조

	- 프로미스 인스턴스 생성
	생성자 함수에 두개의 매개변수를 가진 콜백을 전달한다

	첫번째 매개변수(resolve): 비동기 작업이 성공했을 경우 호출한다
	두번째 매개변수(rejected): 비동기 작업이 실패했을 경우 호출한다

	- 프로미스의 상태
	fullfilled: 작업의 성공
	rejected: 작업의 실패
	pending: 작업이 끝나기를 기다리는 상태

	- 프로미스 인스턴스의 메서드
	Promise.then(): 성공했을 경우 데이터를 다루는 메서드
	Promise.catch(): 실패했을 경우 에러를 다루는 메서드
	Promise.finally(): 실패/성공 여부와 상관없이 실행되는 코드를 다루는 메서드
*/


// const promise = new Promise(function (res, rej) {
// 	res({ foo: 'bar'});
// })

// console.log(promise); // fullfilled

// const promise = new Promise(function (res, rej) {
// 	rej({ error: '..'}) // rejected
// })

// const promise = new Promise(function (res, rej) {})

// console.log(promise); // pending


// const promise = new Promise(function (res, rej) {
// 	res({ foo: 'bar' })
// })

// promise	
// 	.then(function (value) { // 데이터를 다루는 부분
// 		console.log(value)
// 	})
// 	.catch(function (error) {
// 		console.error(error);
// 	})


/*
	실제 사용 예시:
	서버에 데이터 요청
*/


// 서버에 데이터를 요청하는 함수
// 결과를 프로미스 객체로 리턴한다
// function fetchData() {
// 	const promise = new Promise(function (res, rej) {
// 		res({ foo: 'bar' });
// 	})

// 	return promise;
// }

// fetchData()
// 	.then((data) => {
// 		console.log('서버에서 받은 데이터:', data);
// 	})
// 	.catch((error) => {
// 		console.error(error);
// 	})


// console.log('다음 작업')


/*
	3 async / await

	프로미스가 결과값을 반환할 때까지 기다린다
	프로미스의 가독성을 향상시키기 위한 문법
	try / catch 에서 에러를 처리한다
*/


// function fetchData() {
// 	const promise = new Promise((res, rej) => {
// 		res({ foo: 'bar' });
// 	})

// 	return promise;
// }


// f();
// console.log('다음 작업')

// async function f() {
// 	try {

// 		// ...

// 		const data = await fetchData();

// 		console.log('서버에서 받은 데이터:', data);


// 	} catch (error) {
// 		console.error(error)
// 	}
// }


/*
 ES6 문법 (2015)

 새로운 문법이 많이 나온 버전

	let, const
	화살표 함수
	구조분해할당 v
	스프레드 연산자 v
	클래스
	프로미스
	심볼
	Array.map()
*/


/*
	구조분해할당 - 배열

	간단한 문법을 사용하여 배열의 아이템을 변수에 할당할 수 있다
*/

// var beers = ['기네스', '하이네켄', '버드와이저'];

// var irishBeer = beers[0];
// var dutchBeer = beers[1];
// var americanBeer = beers[2];

// console.log(irishBeer); // 기네스 
// console.log(dutchBeer); // 하이네켄
// console.log(americanBeer) // 버드와이저


// var beers = ['기네스', '하이네켄', '버드와이저'];

// // 구조분해할당
// var [irishBeer, dutchBeer, americanBeeer] = beers;

// console.log(irishBeer); // 기네스
// console.log(dutchBeer) // 하이네켄
// console.log(americanBeeer) // 버드와이저


/*
	구조분해할당 - 객체

	간단한 문법으로 객체의 속성을 변수에 할당할 수 있다
*/

// var irishBeer = { name: '기네스', origin: '아일랜드', available: false };

// var name = irishBeer.name;
// var origin = irishBeer.origin;
// var available = irishBeer.available;

// // console.log(name, origin, available)

// console.log('맥주이름:', name);
// console.log('원산지:', origin);
// console.log('판매중:', available ? '예' : '아니오')

// var irishBeer = { name: '기네스', origin: '아일랜드', available: false };

// // 구조분해할당
// var { name, origin, available } = irishBeer;

// console.log(name, origin, available);


/*
	구조분해할당 - 매개변수
*/

// var irishBeer = { name: '기네스', origin: '아일랜드', available: false };

// function f(beer) {

// 	console.log(beer); // irishBeer

// 	var name = beer.name;
// 	var origin = beer.origin;
// 	var available = beer.available;

// 	console.log(name, origin, available);
// }

// f(irishBeer);


// var irishBeer = { name: '기네스', origin: '아일랜드', available: false };


// function f({ name, origin, available }) {

// 	console.log(name, origin, available);
// }

// f(irishBeer);


/*
	스프레드 연산자 - 배열

	배열의 아이템을 간단하게 복사할 수 있다
	...복사할 배열
*/

// var beers = ['기네스', '하이네켄'];
// var newBeer = '버드와이저'

// var updatedBeers = [...beers, newBeer];

// console.log(updatedBeers); // 기네스, 하이네켄, 버드와이저


// var europeanBeers = ['기네스', '하이네켄'];
// var asianBeers = ['아사히', '클라우드'];

// var worldBeers = [...europeanBeers, ...asianBeers];

// console.log(worldBeers); // 기네스, 하이네켄, 아사히, 클라우드


/*
	스프레드 연산자 - 객체

	객체의 속성을 간단하게 복사할 수 있다
	...복사할 객체
*/

// var irishBeer = {
// 	name: '기네스',
// 	origin: '아일랜드',
// 	available: false
// }

// // 기네스가 재입고 되었다
// // irishBeer.available = true;

// // console.log(irishBeer);


// var updatedIrishBeer = { ...irishBeer, available: true };

// console.log(updatedIrishBeer)


/*
	ES6 문제
*/

// 1.구조분해할당

// var asianBeers = ['클라우드', '아사히']
// 구조분해할당 문법을 사용해서 각각의 맥주를 변수에 할당해보세요

// koreanBeer(클라우드), japaneseBeer(아사히)

// var [koreanBeer, japaneseBeer] = asianBeers;

// 2. 스프레드 연산자

// var cat = {
// 	name: '치즈',
// 	age: 1,
// 	home: null,
// 	sound: function () {
// 		return '야옹'
// 	}
// }

// // 스프레드 연산자를 사용해 치즈의 home을 '삼산동' 으로 업데이트 해보세요
// // 결과는 updatedCat 변수에 할당


// var updatedCat = { ...cat, home: '삼산동' }

// // 입양됨
// console.log(updatedCat);


/*
	객체와 JSON

	JSON (JavaScript Object Notation)
	자바스크립트 객체를 저장 또는 이동하기 위하여 사용되는 텍스트 포멧

	1 객체와 JSON
	2 JSON.stringify()
	3 JSON.parse()

*/


// 1 객체와 JSON

// var o = { foo: 'bar' }

// var json = '{ "foo": "bar" }' // o 객체를 JSON포맷으로 표현

// console.log(typeof o); // object
// console.log(typeof json) // string


// 2 JSON.stringify()
// 객체를 JSON 포맷으로 변환한다


// var o = { foo: 'bar' };

// var json = JSON.stringify(o);

// console.log(json); // JSON 포맷
// console.log(typeof json) // string


// JSON.parse()
// JSON 포맷을 객체로 변환한다

// var json = '{ "foo": "bar" }';

// var o = JSON.parse(json);

// console.log(o) // 객체
// console.log(typeof o) // object


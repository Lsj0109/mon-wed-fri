import { createContext, useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } 
from 'react-router-dom';

function App() {
  return <Snippet />
}

export default App;


/*

  리액트 튜토리얼

  1 리액트 기초
  2 리액트와 ES6
  3 JSX
  4 컴포넌트
  5 이벤트
  6 화면 업데이트
  7 데이터 요청

  할일 목록 만들기

*/


/*
   1 리액트 기초

   1) 리액트란
   UI 개발용 자바스크립트 라이브러리
   페이스북이 개발
   가장 인기있는 프론트엔드 프레임워크

   2) 리액트 특징
   - 컴포넌트 기반
   컴포넌트는 복잡한 UI를 설계하기 위해 사용하는 독립적이고 재사용 가능한 부품이다

   - 선언적 문법
   사용하기 쉽다

   3) 구조
   SPA (Single Page Application)구조이다
   자바스크립트를 사용하여 화면을 업데이트한다
*/



/*
  2 리액트와 ES6

  구조분해할당
  스프레드 연산자
  let, const
  Array.map
  기타 등등
*/


// Array.map
// 배열의 각각의 아이템에 특정한 작업을 수행한다
// 업데이트된 배열을 리턴한다

// const numbers = [1, 2, 3];

// const result = numbers.map((item, index) => {
//   return item * 10; // 사용자 정의
// })

// console.log(numbers);
// console.log(result);


// const beers = ["Guinness", "Heineken", "Budwiser"];


// const result = beers.map((beer) => {
//   return beer.toUpperCase(); // 모든 문자를 대문자로 바꾸는 문자열 메서드
// });

// console.log(beers)
// console.log(result);


/*
  JSX (JavaScript Extension)
  자바스크립트의 확장 문법
  가상의 엘리먼트를 만들기 위해 사용한다
  선언적 문법
  일반 자바스크립트 객체로 변환된다

  1 JSX 기초
  2 JSX Fragment
  3 JSX에서 변수 출력하기
  4 조건부 렌더링
  5 JSX에서 리스트 출력하기
*/

// function Snippet() {
//   return (
//     <form>
//       <h1>Google</h1>
//       <input
//         type="search"
//         className="class1 class2"
//         style={{ padding: "0.5rem", width: "20rem" }}
//         placeholder="구글 검색"
//         autoComplete="off"
//       />
//     </form>
//   )
// }


// function Snippet() {

//   // JSX에서는 트리가 하나의 동일한 엘리먼트로 감싸져야 한다
//   // 또는 Fragment를 사용한다

//   return (
//     <>
//       <h1>JSX Fragment</h1>
//       <ul>
//         <li>list item</li>
//         <li>list item</li>
//         <li>list item</li>
//       </ul>
//     </>
//   )
// }


// JSX에서 변수 출력하기

// function Snippet() {

//   // 길냥이 치즈
//   let cat = {
//     name: "치즈",
//     age: 2,
//     home: null,
//     sound: function() {
//       return "야옹"
//     }
//   }

//   return (
//     <ul>
//       <li>이름: {cat.name}</li>
//       <li>나이: {cat.age}</li>
//       <li>집: {cat.home}</li>
//       <li>소리: {cat.sound()}</li>
//     </ul>
//   )
// }


// 조건부 렌더링
// function Snippet() {
//   return (
//     <>
//       <h1>조건부 렌더링</h1>

//       <h3>&& (논리연산자 AND)</h3>
//       <p>
//         expr1 && expr2 <br />
//         expr1이 참으로 간주되면 expr2를 렌더링한다
//       </p>
//       <p>{true && "나는 보입니다"}</p>
//       <p>{null && "나는 안보입니다"}</p>

//       <h3>|| (논리연산자 OR)</h3>
//       <p>
//         expr1 || expr2 <br />
//         표현식1이 참으로 간주되면 표현식1을 렌더링한다 <br />
//         표현식1이 거짓으로 간주되면 표현식2를 렌더링한다
//       </p>
//       <p>{"나는 보입니다" || "나는 안보입니다"}</p>
//       <p>{null || "나는 보입니다"}</p>

//       <h3>? (삼항연산자)</h3>
//       <p>
//         조건 ? 표현식1 : 표현식2 <br />
//         조건이 참이면 표현식1을 렌더링 한다 <br />
//         조건이 거짓이면 표현식2를 렌더링한다
//       </p>
//       <p>{true ? "조건이 참입니다" : "조건이 거짓입니다"}</p>
//       <p>{false ? "조건이 참입니다" : "조건이 거짓입니다"}</p>
//     </>
//   )
// }


// 리스트 출력하기

// function Snippet() {

//   const beers = [
//     { name: "기네스", origin: "아일랜드"},
//     { name: "하이네켄", origin: "네덜란드"},
//     { name: "버드와이저", origin: "미국"}
//   ]

//   const beerList = beers.map((beer, index) => (
//     // key는 고유한 값이어야 한다
//     <li key={index}>{beer.name}, {beer.origin}</li>
//   ));

//   return (
//     <>
//       <h3>세계맥주</h3>
//       <ul>
//         {beerList}
//       </ul>
//     </>
//   )
// }


// JSX 퀴즈

// function Snippet() {
//   const beers = [
//     { name: "기네스", origin: "아일랜드", available: false },
//     { name: "하이네켄", origin: "네덜란드", available: true },
//     { name: "버드와이저", origin: "미국", available: true }
//   ]


//   return (
//     <>
//       <h1>세계 맥주</h1>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>이름</th>
//             <th>원산지</th>
//             <th>판매중</th>
//           </tr>
//         </thead>
//         <tbody>
//           {beers.map((beer, index) => (
//             <tr key={index}>
//               <td>{beer.name}</td>
//               <td>{beer.origin}</td>
//               <td>{beer.available ? "예" : "아니오"}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   )
// }


/*
  컴포넌트 (Component)

  1 컴포넌트 합성
  2 props
  3 children props
  4 useContext Hook
*/

// function Content() {
//   return (
//     <>
//       <h2>고양이는 액체일까?</h2>
      
//       {/* video */}
//       <img
//         src="https://mblogthumb-phinf.pstatic.net/MjAxOTA3MDRfMTM2/MDAxNTYyMjE2Mzc1NjQ3.ywQ3_FfZUTmg8oMQSIc3HecxkqJ1vzwq4Pwcu6diyOQg.hkGxwu96hY8E5HZDZnJCL4yXXaITk4-AJhhg8W6u2Ywg.JPEG.with_msip/2-1.jpg?type=w800"
//         alt=""
//         width="100%"
//       />
//     </>
//   )
// }


// function Comments() {
//   return (
//     <ul>
//       <li>유치하게 등수는... 3빠</li>
//       <li>2빠</li>
//       <li>1빠</li>
//     </ul>  
//   )
// }


// function Suggested() {
//   return (
//     <ul>
//       <li>고양이는 정말 폭력적일까?</li>
//       <li>고양이는 정말 자기가 신이라고 생각할까?</li>
//       <li>냥냥펀치는 얼마나 아플까?</li>
//     </ul>  
//   )
// }

// function Snippet() {
//   return (
//     <>
//       <header>
//         <h1>Youtube</h1>
//       </header>
      
//       <main>
//         <Content />

//         <h2>댓글</h2>
//         <Comments />
//       </main>

//       <aside>
//         <h2>추천 영상</h2>
//         <Suggested />
//       </aside>
//     </>
//   )
// }


/*
  2 props
  컴포넌트에 전달되는 데이터
  
*/

// function Snippet() {

//   // 지역 변수
//   const irishBeer = {
//     name: "기네스",
//     origin: "아일랜드",
//     available: false
//   }

//   return (
//     <>
//       <h1>맥주</h1>
//       <Beer beer={irishBeer} />
//     </>
//   )
// }

// function Beer({ beer }) {
//   return (
//     <ul>
//       <li>이름: {beer.name}</li>
//       <li>원산지: {beer.origin}</li>
//       <li>판매중: {beer.available ? "예" : "아니오"}</li>
//     </ul>
//   )
// }


// Q. 다음의 데이터를 사용해서 유튜브 페이지를 완성해보세요
// 영상, 댓글, 추천비디오 컴포넌트를 만들고 Snippet 컴포넌트에서 합성
// function Snippet() {
//   const DATA = {
//     video: {
//       id: 'v0', 
//       title: '고양이는 액체일까?',
//       source: "https://mblogthumb-phinf.pstatic.net/MjAxOTA3MDRfMTM2/MDAxNTYyMjE2Mzc1NjQ3.ywQ3_FfZUTmg8oMQSIc3HecxkqJ1vzwq4Pwcu6diyOQg.hkGxwu96hY8E5HZDZnJCL4yXXaITk4-AJhhg8W6u2Ywg.JPEG.with_msip/2-1.jpg?type=w800"
//     },
//     comments: [
//       { id: 'c0', content: '1빠' },
//       { id: 'c1', content: '2빠' },
//       { id: 'c2', content: '유치하게 등수는... 3빠' },
//     ],
//     suggestedVideos: [
//       { id: 's0', title: '고양이는 정말 폭력적일까?' },
//       { id: 's1', title: '고양이는 정말 자기가 신이라고 생각할까?' },
//       { id: 's2', title: '냥냥펀치는 얼마나 아플까?' },
//     ]
//   }

//   return (
//     <>
//       <header>
//         <h1>YouTube</h1>
//       </header>

//       <main>
//         <Content video={DATA.video} />

//         <h2>댓글</h2>
//         <Comments comments={DATA.comments} />
//       </main>

//       <aside>
//         <h2>추천 영상</h2>
//         <Suggested suggestedVideos={DATA.suggestedVideos} />
//       </aside>
//     </>
//   )
// }

// function Content({ video }) {
//   console.log(video);

//   return (
//     <>
//       <h2>{video.title}</h2>

//       <img src={video.source} alt="" width="100%" />
//     </>
//   )
// }

// function Comments({ comments }) {
//   console.log(comments);

//   const commentList = comments.map(comment => (
//     <li key={comment.id}>{comment.content}</li>
//   ))

//   return (
//     <ul>
//       {commentList}
//     </ul>
//   )
// }

// function Suggested({ suggestedVideos }) {
//   console.log(suggestedVideos);

//   const suggestedVideoList = suggestedVideos.map(video => (
//     <li key={video.id}>{video.title}</li>
//   ))

//   return (
//     <ul>
//       {suggestedVideoList}
//     </ul>
//   )
// }


/*
  children props
  컴포넌트를 트리구조로 작성할 수 있다
*/

// function Layout({ children }) {

//   return (
//     <>
//       <h1>Instagram</h1>
//       <nav>
//         <ul>
//           <li>Home</li>
//           <li>Posts</li>
//           <li>Profile</li>
//         </ul>
//       </nav>

//       <main style={{ padding: "1rem 0" }}>
//         {children}
//       </main>

//       <footer>
//         <small>2023 &copy; Instagram</small>
//       </footer>
//     </>  
//   )
// }

// function Article() {

//   return (
//     <>
//       <img
//         src="https://external-preview.redd.it/Lpgb3alLNJ0BOp_YH6hj2UaY-N60pmkUHf-gS6hbifE.jpg?auto=webp&s=44a73214eb47bf11c5d5c2dca4d971113c06baf3"
//         alt=""
//         width="100%"
//       />
//       <p>
//         <b>Snoop Dogg </b> 
//         주인 새&#128021; 나가서 한컷.
//       </p>

//       <small>1일 전</small>
//     </>  
//   )
// }

// function Snippet() {
//   return (
//     <Layout>
//       <Article />
//     </Layout>
//   )
// }

/*
  4 useContext Hook
  children 컴포넌트에 데이터를 전달할 수 있다
*/

// const AuthContext = createContext();

// // 유저데이터 관리하는 컴포넌트
// function AuthProvider({ children }) {

//   // 유저데이터
//   const value = { username: 'bunny' }

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// function Layout({ children }) {

//   const auth = useContext(AuthContext);

//   console.log(auth);

//   return (
//     <>
//       <h1>Instagram</h1>
//       <nav>
//         <ul>
//           <li>Home</li>
//           <li>Posts</li>
//           <li>Profile</li>
//         </ul>
//       </nav>

//       <p>안녕하세요 {auth.username}님</p>

//       <main style={{ padding: "1rem 0" }}>
//         {children}
//       </main>

//       <footer>
//         <small>2023 &copy; Instagram</small>
//       </footer>
//     </>  
//   )
// }

// function Article() {

//   const auth = useContext(AuthContext);

//   console.log(auth);

//   return (
//     <>
//       <img
//         src="https://external-preview.redd.it/Lpgb3alLNJ0BOp_YH6hj2UaY-N60pmkUHf-gS6hbifE.jpg?auto=webp&s=44a73214eb47bf11c5d5c2dca4d971113c06baf3"
//         alt=""
//         width="100%"
//       />
//       <p>
//         <b>Snoop Dogg </b> 
//         주인 새&#128021; 나가서 한컷.
//       </p>

//       <small>1일 전</small>
//     </>  
//   )
// }

// function Snippet() {
//   return (
//     <AuthProvider>
//       <Layout>
//         <Article />
//       </Layout>
//     </AuthProvider>
//   )
// }


// 이벤트 

// function Snippet() {

//   function handleClick() {
//     alert('lol');
//   }

//   // onEventName={eventHandler}

//   return (
//     <>
//       <h2>이벤트 처리</h2>
//       <button onClick={handleClick}>
//         Button
//       </button>
//     </>
//   )
// }

/*
  화면 업데이트

  1 useState Hook

  2 리액트 라우터
*/

/*
  useState Hook

  const [state, setState] = useState(initialValue)

  state: 컴포넌트 내의 변수
  setState(newState): state를 업데이트하는 메서드
  initialValue: state의 초기값
*/


// function Snippet() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <p>count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>
//         Add
//       </button>
//     </>
//   )
// }


// function Snippet() {
//   const [subscribed, setSubscribed] = useState(false);

//   return (
//     <>
//       <h1>Subscribe button</h1>
//       <button onClick={() => setSubscribed(!subscribed)}>
//         {subscribed ? "구독중" : "구독하기"}
//       </button>
//     </>  
//   )
// }


// 리액트 라우터 (기본)


// 메인 컴포넌트
// function Snippet() {
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/posts">Posts</Link>
//           </li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="posts" element={<Posts />} />
//         <Route path="post/:postId" element={<Post />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   )
// }

// function Home() {
//   return <h1>Home</h1>
// }

// function Posts() {
//   return (
//     <>
//       <h1>Posts</h1>
//       <ul>
//         <li>
//           <Link to="/post/p0">Post 1</Link>
//         </li>
//         <li>
//           <Link to="/post/p1">Post 2</Link>
//         </li>
//       </ul>
//     </>
//   )
// }

// function Post() {
//   // useParams: url의 매개변수에 접근할 수 있다
//   const { postId } = useParams();

//   return (
//     <>
//       <h1>Title</h1>
//       <p>{postId}</p>
//     </>
//   )
// }

// function About() {
//   return <h1>About</h1>
// }

// function NotFound() {
//   return <h1>404 NotFound</h1>
// }



// 메인 컴포넌트
// function Snippet() {
//   return (
//     <Router>
//       <AuthProvider>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/posts">Posts</Link>
//             </li>
//           </ul>
//         </nav>

//         <AuthStatus />

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="posts" element={<Posts />} />
//           <Route path="post/:postId" element={
//             <AuthRequired>
//               <Post />
//             </AuthRequired>
//           } />
//           <Route path="*" element={<NotFound />} />
//         </Routes>

//       </AuthProvider>
//     </Router>
//   )
// }

// // AuthContext
// const AuthContext = createContext();

// // 유저데이터 관리
// // 상위컴포넌트의 state가 업데이트되면
// // 하위컴포넌트들은 차례로 다시 렌더링된다
// function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);

//   const value = { user, setUser };

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// // 로그인 상태 확인
// function AuthStatus() {
//   const { user, setUser } = useContext(AuthContext);

//   return user ? (
//     <p>
//       안녕하세요 {user}님! {" "}
//       <button onClick={() => setUser(null)}>
//         로그아웃
//       </button> 
//     </p>
//   ):(
//     <p>로그인하세요</p>
//   );
// }

// // 인증 관리
// function AuthRequired({ children }) {
//   const { user, setUser } = useContext(AuthContext);

//   // 로그인 처리
//   function handleSubmit(e) {
//     e.preventDefault();

//     const formData = new FormData(e.target);

//     // AJAX (서버 요청)

//     // user 업데이트
//     setUser(formData.get("username"));
//   }

//   if (!user) {
//     return (
//       <form onSubmit={handleSubmit}>
//         <h1>로그인</h1>
//         <input type="text" name="username" required />
//         <button type="submit">로그인</button>
//       </form>
//     )
//   }

//   return children;
// }

// function Home() {
//   return <h1>Home</h1>
// }

// function Posts() {
//   return (
//     <>
//       <h1>Posts</h1>
//       <ul>
//         <li>
//           <Link to="/post/p0">Post 1</Link>
//         </li>
//         <li>
//           <Link to="/post/p1">Post 2</Link>
//         </li>
//       </ul>
//     </>
//   )
// }

// function Post() {
//   const { postId } = useParams();

//   return (
//     <>
//       <h1>Post</h1>
//       <p>{postId}</p>
//     </>
//   )
// }

// function NotFound() {
//   return <h1>404 NotFound</h1>
// }



/*
  데이터 가져오기(fetch data)

  1 useEffect Hook
  2 데이터 가져오기 예시
*/

/*
  useEffect
  리액트 앱에서 여러가지 효과를 적용할 때 사용한다

  useEffect(effect): 컴포넌트가 렌더링 될 때마다 effect를 실행한다
  useEffect(effect, []): 최초 렌더링 시에만 effect가 실행된다
  useEffect(effect, [dep1, dep2, ...]): 최초 렌더링 시에 effect가 실행된다,
  dependency가 바뀔 때 effect가 실행된다
*/

// function Snippet() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log('rendered at', new Date().toLocaleTimeString());
//   }, []);

//   return (
//     <>
//       <h1>useEffect</h1>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>
//         Add
//       </button>
//     </>
//   )
// }


// 데이터를 서버에 요청하는 함수
function fetchData() {
  const DATA = {
    username: "snoop_dogg",
    image: "https://hips.hearstapps.com/hmg-prod/images/most-interesting-dog-meme-1546529364.png",
    bio: "반갑네 인간"
  }

  // 데이터를 가져오는데 2초가 걸린다고 가정
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res(DATA)
    }, 2000)
  })

  return promise;
}


function Snippet() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [profile, setProfile] = useState(null);

  // 비동기적으로 작동한다
  useEffect(() => {
    // 여기서 서버에 요청
    fetchData()
      .then(data => {
        setProfile(data)
      }) // 요청 성공
      .catch(error => {
        setError(error)
      }) // 요청 실패
      .finally(() => {
        setIsLoaded(true)
      })
  }, [])

  if (error) {
    return <p>failed to fetch</p>
  }

  if (!isLoaded) {
    return <p>fetching profile...</p>
  }

  return (
    <>
      <h1>Profile</h1>
      <img
        src={profile.image}
        alt={profile.username}
        style={{
          width: '150px',
          height: '150px',
          objectFit: 'cover',
          borderRadius: '50%',
        }}
      />
      <h3>{profile.username}</h3>
      <p>{profile.bio}</p>
    </>
  )
}

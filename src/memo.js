
//------------------------------------------------------------------------------------


//1. props
// 리액트는 컴포넌트를 재사용해서 반복 사용가능
// 함수명 첫 글자는 무조건 대문자로
// function Food({fav}){ // props.fav  = {fav}
  
//     return <h1>I like {fav}</h1>
    
//   }
  
//   function App() { // component
//     return (
//     <div>
//       <h1>hello!!</h1>
//       <Food fav="kimchi"/> 
//       <Food fav="tomato"/> 
//       <Food fav="ramen"/> 
//       <Food fav="rise"/>
      
       
//     </div>);    
//   }
  
//   export default App;

//------------------------------------------------------------------------------------

// 2. map (foreach는 저장하거나 할때 사용 map는 데이터를 변경할 때 사용)
// const friends = ["kim", "qw", "e", 't', "y"];
// map는 요소와 함께 번호도 함께 넘겨줌 item, index
// friends.map(current =>{console.log(current);
// return 0})
// -> [0, 0, 0, 0, 0];

// friends.map(function(friend){
//     return friend + "👍";
// } )

// function Food({name}){
//     return (
//         <h1>{name}</h1>
//     )
// }

//{변수.map( item => <Food name = {item.name} />)}

// const a = (  // reactcomponent가 내부적으로key값을 필요로함 id추가
//     {   
//         id : 1,
//         name:"aa",
//         img : "dd"
//     },
//     {
//         id : 2,
//         name:"aa",
//         img : "dd"
//     }
// )
//{변수.map( item => <Food key = item.id name = {item.name} />)}

//------------------------------------------------------------------------------------

// 3. 부모로부터 전달받은 props가 우리가 예상한 props 인지 체크 (props types 설치) npm i prop-types
                                                               // 전달받은 props가 내가 원하는 props인지 확인해줌

// Food.propTypes = { // 무조건 propTㅛpes로 지어야함
//     name: PropTypes.string.isRequired,     // 자료형, 필수인지 아닌지
//     picture: PropTypes.string.isRequired,
//     rating : PropTypes.number.isRequired
// };

//------------------------------------------------------------------------------------

// 4. 예제 끝

// import PropTypes from "prop-types";


// const catDog = [
//   {
//     id :1,
//     name :"cat",
//     image:
//     "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MDRfMTky%2FMDAxNjI1Mzc1NTUzODg3.fb0gEW7pzF4FDw__qVnZKo79xdhoPhwMywX-uvdvBuog.JikFU1uYRBrvzV2JD2qY7h6WaAwmStvYsTWoyNx-ge4g.JPEG.jellymolang%2FScreenshot%25A3%25DF20210704%25A3%25AD141041%25A3%25DFKakaoTalk.jpg&type=sc960_832",
//     rating: 5
//   },
//   {
//     id : 2,
//     name : "dog",
//     image:
//     "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MjBfMjE3%2FMDAxNjIxNDkzNTYyNTQx.PkvfI4lH_qXVl1MyT0FnBwFduauRp_P8A1aIau1_J3gg.sdT1IDNzUxwQSxYOa9KMuvDLWoMAtibKslZGX-RNyJgg.JPEG.govl1245%2FIMG_4475.JPG&type=sc960_832",
    
//   }
//   ]

//   function Food({name, picture, rating}){ // props.fav  = {fav}
  
//     return <div>
//         <h2>I like {name}</h2>
//         <h4>{rating}/5</h4>
//         <img src = {picture} alt={name} />
//       </div>
    
//   }

//   Food.propTypes = {
//     name: PropTypes.string.isRequired,
//     picture: PropTypes.string.isRequired,
//     rating : PropTypes.number
//   };
  

// function App() { // component
//   return (  //catDog 를 그냥 쓰면 text {catDog}를 쓰면 자바스크립트
//   <div>
//     {catDog.map(item =><Food key={item.id} name={item.name} picture={item.image } rating = {item.rating} />)}
//   </div>
//   );    
// }

// export default App;

//------------------------------------------------------------------------------------

// 5. class component

// React.Component 를 상속받음
// class App extends React.Component{ // react는 자동적으로 class component의 render method를 실행한다. 
//     state = {                      //class component가 가진 state를 사용하려고 함(component의 data를 바꾸기 원해서 이작업을 함)
//         count : 0
//     } ;

//     add = () =>{
//         console.log('add');
//     };
//     minus = () =>{
//         console.log("minus");
//     };
                                     
//     render(){                        
//       return <div>The number is : {this.state.count} </div>
//     }
  
//   }

//------------------------------------------------------------------------------------

//6. setState()

// class component가 가진 state를 사용하려고 함(component의 data를 바꾸기 원해서 이작업을 함)
// 클릭을 해서 변수를 바꾸면 바꾼 변수를 화면에 다시 출력해주는 setState({count : 0})
// this.setState(current => ({ count : current.count + 1}));
// setState()를 하면 동시에 새로운 state를 render한다.
// class App extends React.Component{ // react는 자동적으로 class component의 render method를 실행한다. 
//   state = {                        
//       count : 0                   
//   } ;                                 
//     add= () =>{
//       this.setState(current => ({ count : current.count + 2}));
//     };
//     minus = () =>{  
//       this.setState(current => ({ count : current.count - 1}));
//   };
//   render(){                         // onClick  -> 자바에서 eventListener             
//     return (
//     <div> 
//       <h1>The number is : {this.state.count}</h1>
//       <button onClick={this.add}>Add</button>             
//       <button onClick={this.minus}>Minus</button>
//     </div>
//     )
//   }
    
// }


//-------------------------------------
// component life cycle
//-------------------------------------

// 7. Mountimg(태어나는것과같같다)
// constructor()        아래방향순서로 실행됨   
// render()
// componentDidMount()

// 8. updating(state를 변경하는 그런거)
// render()            
// componentDidUpdate()

// 9. Unmounting
// componentWillUnmount() 컴포넌트가 떠날 때 호출 됨

// class App extends React.Component{ 
  
//     state = {
//       isLoading: true
//     };
  
//     componentDidMount(){
//       setTimeout(() => {
//         this.setState({isLoading: false});
//       }, 6000);
//     }
  
//     render(){    
//       /*const{ isLoading } = this.state; 
//       return <div>{isLoading ? "Loding": "we are ready"}</div>*/                    
//       return <div>{this.state.isLoading ? "Loding": "we are ready"}</div>  
      
      
//     }
      
//   }

//---------------------------------------


  
// 10. fetch() , axios(npm i axios)
// axios.get(Url);
// YTS 에서 만든 API를 사용 예정

// 11. async 시간이 필요한 함수를 기다려라

// getMovies = async() =>{  // 비동기 함수 이걸 기다려라
//     const movies = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating") // 내부에서 기다릴거 await 지정 평점정렬 주소뒤에?sort_by=rating
//     console.log(movies);
// };



//--------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------

// 12. cloud 올리기 (npm i gh-pages) 설치)/
// git remote -v
// https://lodos14.github.io/movie_app_2021
// package.json 에 "homepage": "https://lodos14.github.io/movie_app_2021" 추가
// package.json 의 scripts에 "deploy" : "ph-pages -d build" 추가
// npm run build
// package.json 의 scripts에 "predeploy":"npm run build"
// 기본적으로 depoly를 호출 할 때마다 predeploy를 먼저 호출해줌
// -> npm run build가 실행되고 build는 build script를 호출
// -> 그리고 그 스크립트는 폴더를 줌
// -> depoly가 실행 되고 업로드됨

// 그럼 build 폴더가 생기는데 이걸 업로드

// 13. react-router-dom(네비게이터 패키지) npm install react-router-dom






















                                            
                                                            




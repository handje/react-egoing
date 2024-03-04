# reactDOM

- 라우팅: 사용자가 어떤 주소로 들어왔을 때 그 주소에 해당하는 적당한 페이지를 사용자에게 보내주는 것
- 리액트는 SPA (Single Page Application) 방식 : 새로운 페이지를 로드하지 않고 하나의 페이지 안에서 필요한 데이터만 가져오는 형태
- 기존 웹 페이지 처럼(MPA 방식) 여러개의 페이지를 사용하고 새로운 페이지를 로드하는 방식이 아님
- React-Router는 신규 페이지를 불러오지 않는 상황에서 각각의 url에 따라 선택된 데이터를 하나의 페이지에서 렌더링 해주는 라이브러리
  => npm install react-router-dom

```js
import { BrowserRouter, Route, Routes } from "react-router-dom";
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/topics" element={<Topics />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>;
//http://localhost:3000/contact/
```

주소 변경을 위한 컴포넌트 'Link'

```js
import { Link } from "react-router-dom";
<Link to="/">Home</Link>; //상위에 Route태그로 감싸져있어야 에러 x
```

1. BrowserRotuer

- HTML5의 history API를 활용한 라우터 (SSR에 적합)
- 새로고침하거나 url로 직접 접근할 경우 경로를 찾지 못해 에러가 발생

2. HashRouter

- URL의 hash를 활용한 라우터(CSR에 적합)
- URL에 #이 포함됨
- 웹서버는 # 뒷부분 주소를 무시하지만 자바스크립트를 이용해 뒷부분의 내용을 알 수 있기 때문에 react-router-dom이 읽어서 적절히 라우팅
- #때문에 검색 엔진이 읽지 못하여 SEO가 좋지 않음

```js
<HashRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/topics" element={<Topics />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/*" element={"Not Found"} />
  </Routes>
</HashRouter>
//http://localhost:3000/contact#/
```

NavLink vs Link
겉으로는 똑같아 보이지만 NavLink는 active속성이 생김 => css .active를 이용하여 선택된 메뉴 표시 가능

```js
<NavLink to="/">Home</NavLink>

.active {
  background-color: tomato;
}
```

id값을 넘겨서 주소로 넣는 법 'useParams'

```js
//라우터
<Route path="/topics/:id" element={<Topic />} />;
//상세페이지
const params = useParams();
```

리스트를 이용하여 태그 return

```js
{
  contents.map(({ id, title }) => {
    return (
      <li>
        <NavLink key={id} to={`/topics/${id}`}>
          {title}
        </NavLink>
      </li>
    );
  });
}
```

import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const BodyProps = {
  name: "리트리버",
  location: "UK",
  breed: ["골든", "래브라도", "톨러"],
};

function ChildComp() {
  return <div>자식 컴포넌트입니다.</div>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Body {...BodyProps}>
        <ChildComp />
      </Body>
      <Footer />
    </div>
  );
}

export default App;

import BodyContent from "./Components/BodyContent/BodyContent";
// import FooterContent from "./Components/FooterContent/FooterContent";
import NavContent from "./Components/NavContent/NavContent";
import Counter from "./Components/Counter/Counter";
import Rest from "./Components/Rest/Rest";
import Spread from "./Components/Spread/Spread";
import Input from "./Components/Input/Input";

function App() {
//   const firstname = "Nilanga";
//   const lastname = "Chandimal";
//   const age = 27;
//   const Country = "Sri Lanka";
//   const getFullName = (f, l) => {
//     return `${f} ${l}`;
//   };
//   const arr = ["Apple", "Microsoft"];

//   const lang = <ul>
//     <li>HTML</li>
//     <li>CSS</li>
//     <li>JS</li>
//     <li>React</li>
//   </ul>;

// const pobj = {
//   fname : "Smith",
//   age : 30,
// };
  return (
    <>
      {/* <div className="heading">
        <h1>Employee Details</h1>
        <p>
          Full Name : {firstname} {lastname}
        </p>
        <p>Full Name Function : {getFullName("Nick", "Steve")}</p>
        <p>
          Age : {age} {age > 30 ? "Old" : "Young"}
        </p>
        <p>Country :{Country}</p>
        <p>I like to {arr[0]}</p>
        <p>Frontend Language</p>
        {lang}
        <p>{pobj.fname} is {pobj.age} Years old</p>
      </div> */}
      <div id="wrapper">
        <NavContent/>
        <BodyContent>
          <button>Click</button>
        </BodyContent>  
        <BodyContent>
        <h2>Hello World</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sequi velit, illum ab adipisci doloribus eveniet quos rem iure officia, dolorem ad. Dignissimos iste enim ad, maiores dolorem laboriosam laudantium.</p>
        </BodyContent>  
        {/* <FooterContent/> */}
        <Counter/>
        <Rest/>
        <Spread/>
        <Input/>
      </div>


    </>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";

//old way to create React element
// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, "Namaste React")
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//react Element
const JSXheading = <h1 id="heading">Namaste React</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(JSXheading);

//react Functional Components -> javascripts functions with jsx code
//Functional Components start with capital latter

//FunctionalComponents1 and FunctionalComponents2 both are same

const FunctionalComponents2 = () => (
  <h1 className="heading"> Namaste React From Functional Components2</h1>
);


const title =
    (<div>
      <h1 className="heading"> Namaste React From Functional Components1</h1>
    </div>)
 

//inside JSX we can use any syntax of javascript using {}
 const FunctionalComponents1 = () => {
  return (
    <div>
      {/* //inside JSX we can use any syntax of javascript using {} */}
      {title}
      <FunctionalComponents2 />
      <h1 className="heading"> Namaste React From Functional Components1</h1>
    </div>
  );
};


root.render(<FunctionalComponents1 />);

//this is a template folder for you to move into your src folder after you created a boilerplate
import React, { useState } from "react";

// Starting code for if your group Chose CLASS COMPONENTS
// export class Dog extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state =  {animal: "dog"}; 
//     this.isDog = this.isDog.bind(this); 
//   }

//   render() {
//     return (
//       <div>
        
//        <img alt="dog" src={this.state.animal === "dog" ? "https://www.dogfoodadvisor.com/wp-content/uploads/2019/08/golden-retriever-puppy-343x335.jpg" : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Cat_Janna.jpg/150px-Cat_Janna.jpg"}></img>
      
//       <button onClick={this.isDog} >I'm more of a {this.state.animal === "dog" ? "cat" : "dog"} person!</button>
//       </div>
//     );
//   }
//   isDog () { 
//     const modifiedAnimal = this.state.animal === "dog" ? "cat" : "dog"; 
//     this.setState({animal: modifiedAnimal});
//   }
// }

// Starting code for if your group Chose FUNCTION COMPONENTS
export const Dog = props => {
  const [animal, setAnimal] = useState('dog')
  const isDog = () => { 
        const modifiedAnimal = animal === "dog" ? "cat" : "dog"; 
        setAnimal(modifiedAnimal);
      }
  return (
    <div>
      <img
        alt="dog"
        src={animal === "dog" ? "https://www.dogfoodadvisor.com/wp-content/uploads/2019/08/golden-retriever-puppy-343x335.jpg" : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Cat_Janna.jpg/150px-Cat_Janna.jpg"}
      ></img>
      <button onClick={isDog} >I'm more of a {animal === "dog" ? "cat" : "dog"} person!</button>
    </div>
  );
  
};

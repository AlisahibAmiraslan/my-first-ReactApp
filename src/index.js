import React from "react";
import ReactDOM from "react-dom";
import SingleComment from "./SingleComment";
import profile1 from "./image/img1.jpg";
import profile2 from "./image/img2.jpeg";
import profile3 from "./image/img3.jpg";
import UserCard  from "./UserCard";



const App = () =>{
  return(
    <div className="ui comments">
      <UserCard>
     <SingleComment name="John" date="Today at 5:00PM" text="You are incredible" picture={profile1}/>
     </UserCard>
     <UserCard><SingleComment name="Ali" date="Today at 6:00PM" text="Great Effort Friends" picture={profile2}/></UserCard>
     
     <UserCard><SingleComment name="Werner" date="Today at 7:00PM" text="Hello that is amaizing" picture={profile3}/></UserCard>
    </div>
  )
}


ReactDOM.render(
  <App/>,
  document.getElementById("root")
)
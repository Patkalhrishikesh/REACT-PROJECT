export default function App() {
  return (
    <>
      <MyComponent />

    </>
  );
}

function MyComponent() {

  let username = "hrishikesh";
  let email = "hrishikeshpatkal@gmail.com";

  return <div>
    <h1> learing inter polution {"ahmednagar".toUpperCase()} </h1>
    <h1>
      {username} {email}
    </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In veritatis illum placeat 
          dolore quae esse unde illo aperiam fuga
          voluptas possimus iste suscipit saepe 
          mollitia odio quaerat eos, corporis nu
          mquam!
        </p>
  
  </div>;
}
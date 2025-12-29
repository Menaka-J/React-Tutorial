import Header, { Display } from './Header';
import Footer from './Footer';
import Card from './Card/Card';
import UserGreeting from './UserGreeting';
import List from './List';
import Button from './Button';
import Form from './Form';
import ColorPicker from './ColorPicker';
import RealTimeChange from './RealTimeChange';
import RealTimeList from './RealTimeList';
import RealTimeArrayList from './RealTimeArrayList';
import ToDoList from './ToDoList';
import Csstypes from './css/Csstypes';


function App() {

  const batters = [{ name: "Dhoni", age: 42 },
  { name: "Virat", age: 42 },
  { name: "Rohit", age: 42 },
  { name: "Raina", age: 42 },
  { name: "Sachin", age: 42 }]

  const bowlers = [{ name: "Bumrah", age: 42 },
  { name: "Chahal", age: 42 },
  { name: "Kuldeep", age: 42 },
  { name: "Shami", age: 42 },
  { name: "Bhuvi", age: 42 }]


  return (
    <>
      {/* <Header></Header>
      <UserGreeting isLogin={true} username="Menaka"></UserGreeting>
      <UserGreeting isLogin={false} username="No one"></UserGreeting>

      <Card></Card>
      <Display title="The Vampire Diaries" year={2009} ></Display>
      <Display title="Supernatural" year={2005} ></Display>
      <Display title="Stranger Things" ye
      ar={2016} ></Display>
      <Footer></Footer> */}
      {/* <UserGreeting isLogin={true} username="Menaka"></UserGreeting>
      <Button></Button>
      <ColorPicker></ColorPicker>
      <Form></Form>
      <RealTimeChange></RealTimeChange>
      <RealTimeArrayList></RealTimeArrayList>
      <RealTimeList></RealTimeList>
      <List items={batters} category="Batters"></List>
      <List items={bowlers} category="Bowlers"></List> */}
      {/* <ToDoList></ToDoList> */}
      <Csstypes></Csstypes>
    </>
  );
}

export default App

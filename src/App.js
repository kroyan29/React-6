
import './App.css';

// const user = {
//   id : 5,
//   age : 17,
//   firstName : 'Manvel',
//   lastName : 'Kroyan',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   }
// };
// const userClassName = "info_user";
// const styleObj = {
//   color: 'red',
//   fontFamily: 'Oswald'
// };

// function App() {
//   return (
//     <div className={userClassName} style={styleObj}>
//       <p>Полное имя: {user.getFullName()}</p>
//       <p>Возраст: {user.age()}</p>
//       <p>Время генерации данных: {new Date().toLocaleTimeString()}</p>
//     </div>
//   );
// }

const sasha = {
  name: 'Саша',
  age: 19,
  getFullName: function () {
    return `${this.name} ${this.age}`;
  }
  
};
const katya = {
  name: 'Катя',
  age: 21,
  getFullName: function () {
    return `${this.name} ${this.age}`;
  }
};
const mish = {
  name: 'Миша',
  age: 17,
  getFullName: function () {
    return `${this.name} ${this.age}`;
  }
};
const fedya = {
  name: 'Федя',
  age: 23,
  getFullName: function () {
    return `${this.name} ${this.age}`;
  }
};
const klava = {
  name: 'Клава',
  age: 22,
  getFullName: function () {
    return `${this.name} ${this.age}`;
  }
};
 
function App() {
  return (
    <div className='miyagi'>
      <div className='miyagi_1'>
        <img src="https://code.s3.yandex.net/web-code/entrance-test/ticket-image.jpg" alt="" width="320px" style=" border-radius: 20px 20px 0px 0px;"></img>
        <h3>Miyagi</h3><br></br>
          <p className="name">Имя: <br></br>{this.name}</p>
        <p className="age">Возраст: <br></br>{this.age}</p>
        <img src="https://code.s3.yandex.net/web-code/entrance-test/seam-part-top.svg" alt=""></img>

          <img src="https://code.s3.yandex.net/web-code/entrance-test/qr.svg " alt=""></img>
      </div>
 </div>
   );
 }

export default App;

import './App.css';
import React,{useState} from "react";
import Header from './components/Header';

const [message,setMessage] = useState('');
const handleSubmit = (event) => {
    event.preventDefault(); // Предотвращает перезагрузку страницы при отправке формы
    alert(`Чо ты написал: ${message}`);
};

function App() {
    return (
        <>
            <Header/>
            <div className={'App-main text-center '}>
                <span>Can I help you?</span>
            </div>
            <form onSubmit={handleSubmit}>

            </form>
        </>


    );
}

export default App;

import './App.scss';
import Header from "./components/Header/Header.jsx";
import Greeting from "./components/Greeting/Greeting.jsx";
import Laboratory from "./components/Laboratory/Laboratory.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import Application from "./components/Application/Application.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MyModal from "./ui/MyModal/MyModal.jsx";
import {useState} from "react";

function App() {

    const [modal, setModal] = useState(false);

    return (
        <div className='wrapper'>
            <Header/>
            <Greeting/>
            <Laboratory/>
            <Gallery/>
            <Application setModal={setModal}/>
            <Footer/>
            <MyModal modal={modal} setModal={setModal}/>
        </div>
    )
}

export default App

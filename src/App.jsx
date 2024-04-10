import './App.scss';
import Header from "./components/Header/Header.jsx";
import Greeting from "./components/Greeting/Greeting.jsx";
import Laboratory from "./components/Laboratory/Laboratory.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import Application from "./components/Application/Application.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MyModal from "./ui/MyModal/MyModal.jsx";
import {useRef, useState} from "react";

function App() {

    const [modal, setModal] = useState(false);
    const laboratoryRef = useRef(null);
    const galleryRef = useRef(null);
    const formRef = useRef(null);

    return (
        <div className='wrapper'>
            <Header laboratoryRef={laboratoryRef}
                    galleryRef={galleryRef}
                    formRef={formRef}
            />
            <Greeting/>
            <Laboratory ref={laboratoryRef} formRef={formRef}/>
            <Gallery ref={galleryRef}/>
            <Application setModal={setModal} ref={formRef}/>
            <Footer/>
            <MyModal modal={modal} setModal={setModal}/>
        </div>
    )
}

export default App

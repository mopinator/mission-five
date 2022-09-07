import styles from './newPinStyles.module.css';
import Navbar from '../components/navbar/navbar'
import Footer from "../components/footer/footer";
import MainBody from "../components/mainBody/mainBody";

export default function NewPin() {
    return (
        <div className={styles.pageBody}>
            <Navbar/>
            <MainBody/>
            <Footer/>

        </div>
    )
}
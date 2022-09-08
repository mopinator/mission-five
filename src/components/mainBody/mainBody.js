import styles from './mainBodyStyles.module.css';
import profilePic from './user-avatar.png';

export default function MainBody() {
    
    return (
        <div className={styles.mainBody}>
            <h4>Select Member</h4>
            <div className={styles.headerText}>
             <h1>Hello Lillian</h1>
             <h5>Enter your personal PIN</h5>   

                <div className={styles.nameCard}>

                    <div className={styles.profile}>
                        <img src={profilePic} alt="profilepic"  width="75" height="60"/>
                        <text>Lillian Mackintosh</text>

                    </div>

                               
           
                </div>

                <div class={styles.pinNumber}>
                    <input type="password" maxlength="1" id="1" onkeyup="moveOnMax(this,'a')" />
                    <input type="password" maxlength="1" id="a" onkeyup="moveOnMax(this,'b')" />
                    <input type="password" maxlength="1" id="b" onkeyup="moveOnMax(this,'c')" />
                    <input type="password" maxlength="1" id="c" />

                </div>
                <br/>
                <div className={styles.accountButton}>
                <button type="button">View my account</button>
                </div>
                <br/>
                <div className={styles.accountButton1}>
                <button type="button">Select different member</button>
                </div>  
                <br/>
                <text className={styles.forgotPIN}>Forgot PIN?</text>



        </div>
            
                  
            

        </div>
    )
}
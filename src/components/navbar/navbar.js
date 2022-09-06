import TurnersLogo from "../images/turnerscars_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationPin, faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./navbar.module.css";

export default function Navbar() {
	return (
		<>
			<nav className={styles["upper-nav"]}>
				<div className={styles["upper-nav-container"]}>
					<a href="">Cars</a>
					<span>|</span>
					<a href="">Turners Subscription</a>
					<span>|</span>
					<a href="">Trucks & Machinery</a>
					<span>|</span>
					<a href=""> Damaged & End of Life</a>
					<span>|</span>
					<a href="">Motorcycles</a>
					<span>|</span>
					<a href="">General Goods</a>
					<span>|</span>
					<a href="">Buses, Caravans & Motorhomes</a>
				</div>
			</nav>

			<nav className={styles["middle-nav"]}>
				<div className={styles["middle-nav-container"]}>
					<div className={styles["turners-logo"]}>
						<img src={TurnersLogo} alt="" />
					</div>
					<div className={styles["middle-nav-inner-container"]}>
						<div className={styles["inner-container"]}>
							<div className={styles["phone-number"]}>
								<FontAwesomeIcon className={styles.faPhone} icon={faPhone} />
								<span className={styles["mid-nav-text"]}>0800 887 637</span>
							</div>
							<div className={styles.location}>
								<FontAwesomeIcon className={styles.faLocationPin} icon={faLocationPin} />
								<span className={styles["mid-nav-text"]}>Find Us</span>
							</div>
							<p className={styles.chinese}>中文</p>
							<div className={styles.login}>
								<FontAwesomeIcon className={styles.faUser} icon={faUser} />
								<a href="">
									<p className={styles["login-text"]}>Login</p>
								</a>
								<p className={styles["or-text"]}>OR</p>
								<a href="">
									<p className={styles["register-text"]}>Register</p>
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>

			<nav className={styles["lower-nav"]}>
				<div className={styles["lower-nav-inner-container"]}>
					<div className={styles["lower-left-nav"]}>
						<a href="">
							<FontAwesomeIcon className={styles["magnifying-glass"]} icon={faMagnifyingGlass} />
							Find a Car
						</a>
						<a href="">How to Buy</a>
						<a href="">Sell your Car</a>
						<a href="">Finance</a>
						<a href="">Insurance</a>
						<a href="">Turners Subscription</a>
					</div>
					<div className={styles["lower-right-nav"]}>
						<a href="">Actions</a>
						<a href="">Services & Info</a>
					</div>
				</div>
			</nav>
		</>
	);
}

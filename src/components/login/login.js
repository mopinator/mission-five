import styles from "../login/login.module.css";

export default function Login({ loginBox, setLoginBox }) {
	return (
		<>
			<div className={loginBox === false ? styles["login-container"] : styles["login-container-hidden"]}>
				<div className={styles.login}>
					<div className={styles["login-inner-container"]}>
						<h1>My Insurance</h1>
						<p>Access and manage your Insurance online</p>

						<button
							className={styles["login-button"]}
							onClick={() => {
								setLoginBox(true);
							}}
						>
							Login
						</button>
						<button className={styles["quote-button"]}>Get Quote</button>
					</div>
				</div>
			</div>
		</>
	);
}

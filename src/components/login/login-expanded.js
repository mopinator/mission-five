import styles from "../login/login-expanded.module.css";

export default function LoginExpanded({ loginBox }) {
	return (
		<>
			<div className={loginBox === true ? styles["login-container"] : styles["login-container-hidden"]}>
				<div className={styles.login}>
					<div className={styles["login-inner-container"]}>
						<h1 className={styles["login-text"]}>My Insurance</h1>
						<p>Access and manage your Insurance online</p>

						<form className={styles["form-container"]}>
							<p className={styles["form-headers"]}>Email</p>
							<input className={styles["input-boxes"]} type="text" placeholder="Enter email" />
							<p className={styles["form-headers"]}>Password</p>
							<input className={styles["input-boxes"]} type="password" placeholder="Enter password" />
						</form>
						<div className={styles["forgot-password"]}>
							<div>
								<input className={styles.checkbox} type="checkbox" />
								Remember me
							</div>
							<a href="">Forgot Password?</a>
						</div>

						<button className={styles["login-button"]}>Login</button>
						<p className={styles["insurance-text"]}>Don't have insurance with us?</p>
						<button className={styles["quote-button"]}>Get Quote</button>
					</div>
				</div>
			</div>
		</>
	);
}

import styles from "../footer/footer.module.css";

export default function Footer() {
	return (
		<div className={styles.footerStyle}>
			<div className={styles["footer-inner-container"]}>
				<div className={styles.textColumnStyle}>
					<h5>CARS</h5>
					<br />
					<text className={styles.testText}>How to Buy</text>
					<br />
					<text>Sell Your Car</text>
					<br />
					<text>Finance & Insurance</text>
					<br />
					<text>Auctions & Events</text>
					<br />
					<text>Buyer & Seller Fees</text>
					<br />
					<text>Vehicle Sale Price History Tool</text>
					<br />
					<text>Shipping Costs</text>
				</div>

				<div className={styles.textColumnStyle}>
					<h5>FINANCE & INSURANCE</h5>
					<br />
					<text>Finance Homepage</text>
					<br />
					<text>Car & Personal Finance</text>
					<br />
					<text>Loan Calculator</text>
					<br />
					<text>Car Insurance</text>
					<br />
					<text>Mechanical Breakdown Insurance</text>
					<br />
					<text>General Insurances</text>
					<br />
					<text>Trucks Finance</text>
					<br />
					<text>Financial Information</text>
				</div>

				<div className={styles.textColumnStyle}>
					<h5>SEARCH FOR</h5>
					<br />
					<text>Cars</text>
					<br />
					<text>Damaged & End of Life Cars</text>
					<br />
					<text>Boats & Marine</text>
					<br />
					<text>Motorcycles & Scooters</text>
					<br />
					<text>General Goods</text>
					<br />
					<text>Buses, Caravans & Motorhomes</text>
					<br />
					<text>Turners Auction Schedule</text>
				</div>

				<div className={styles.textColumnStyle}>
					<h5>ABOUT US</h5>
					<br />
					<text>Overview</text>
					<br />
					<text>Turners Careers</text>
					<br />
					<text>Terms and Conditions</text>
					<br />
					<text>Privacy Policy</text>
					<br />
					<text>Turners Live</text>
					<br />
					<text>The Good Oil Blog</text>
					<br />
					<text>Email Alerts</text>
					<br />
					<text>Contact Us</text>
				</div>
			</div>

			<div className={styles.lowerFooterStyle}>
				<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
				/>

				<h6>&#xa9; 2021 Turners</h6>
				<div className={styles.buttonGroupStyle}>
					<button className={styles.button}>
						<i class="fa fa-home">
							<text>Branch Details</text>
						</i>
					</button>
					<button className={styles.button}>
						<i class="fa fa-facebook">
							<text>Facebook</text>
						</i>
					</button>
					<button className={styles.button}>
						<i class="fa fa-envelope">
							<text>Newsletter</text>
						</i>
					</button>
					<button className={styles.button}>
						<i class="fa fa-envelope">
							<text>Email Alerts</text>
						</i>
					</button>
					<button className={styles.button}>
						<i class="fa fa-instagram">
							<text>Instagram</text>
						</i>
					</button>
				</div>
			</div>
		</div>
	);
}

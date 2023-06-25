import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
	FaLinkedin,
} from "react-icons/fa";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";

const Footer = () => {
	return (
		<footer className="footer">
			<ContentWrapper>
				<ul className="menuItems">
					<li className="menuItem">Terms Of Use</li>
					<li className="menuItem">Privacy-Policy</li>
					<li className="menuItem">About</li>
					<li className="menuItem">Blog</li>
					<li className="menuItem">FAQ</li>
				</ul>
				<div className="infoText">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum minima
					officia architecto quod. Repudiandae ab voluptatem mollitia aut
					quaerat quae porro rem nobis deleniti aliquid! Illo, quam repellat
					quia magnam quas libero minus quae eveniet ullam ad ipsum at in.
				</div>
				<div className="socialIcons">
					<span className="icon">
						<FaFacebookF />
					</span>
					<span className="icon">
						<FaInstagram />
					</span>
					<span className="icon">
						<FaLinkedin />
					</span>
					<span className="icon">
						<FaTwitter />
					</span>
				</div>
			</ContentWrapper>
		</footer>
	);
};

export default Footer;

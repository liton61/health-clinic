const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content mt-10">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Surgery</a>
                    <a className="link link-hover">Nutrition & Health</a>
                    <a className="link link-hover">Orthopedics</a>
                    <a className="link link-hover">Dermatologist</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Service</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
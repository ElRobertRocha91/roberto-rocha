import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.flex}>
            <div>
                <h1>Footer</h1>
            </div>
            <p>@Derechos reservados Lic. Roberto Rocha</p>
        </footer>
    )
}

export default Footer;
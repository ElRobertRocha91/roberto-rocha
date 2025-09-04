import styles from "./Contact.module.css";

function Contact(params) {
    return(
        <section id="contacto">
            <div className={styles.sectionContact}>
                <h1 className={styles.titleContact}>Contacto</h1>
                <div className={styles.containerContact}>
                    <form className={styles.form}>
                        <div className={styles.fila}>
                            <label>Nombre:</label>
                            <input placeholder="Ingrese su nombre"/>
                        </div>
                        <div className={styles.fila}>
                            <label>Correo:</label>
                            <input placeholder="Ingrese su correo electrónico"/>
                        </div>
                        <div className={styles.fila}>
                            <label>Mensaje:</label>
                            <textarea placeholder="Ingrese su mensaje..."></textarea>
                        </div>
                        <button>Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;
import Image from "next/image";
import styles from "./Projects.module.css";

function Projects(params) {
    return (
        <section id="proyectos">
            <div className={styles.pageSection}>
                <h1 className={styles.titleSection}>Proyectos</h1>
                <div className={styles.containerProject}>
                    <div className={styles.card}>
                        <Image src="/images/img/BuenosAiresCiudad.jpg" alt="Buenos Aires Ciudad" width={300} height={200} priority />
                        <h2>Titulo del proyecto 1</h2>
                        <p>Descripción del proyecto con las funcionalidades agregadas</p>
                    </div>
                    <div className={styles.card}>
                        <Image src="/images/img/BuenosAiresCiudad.jpg" alt="Buenos Aires Ciudad" width={300} height={200} priority />
                        <h2>Titulo del proyecto 2</h2>
                        <p>Descripción del proyecto con las funcionalidades agregadas</p>
                    </div>
                    <div className={styles.card}>
                        <Image src="/images/img/BuenosAiresCiudad.jpg" alt="Buenos Aires Ciudad" width={300} height={200} priority />
                        <h2>Titulo del proyecto 3</h2>
                        <p>Descripción del proyecto con las funcionalidades agregadas</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;
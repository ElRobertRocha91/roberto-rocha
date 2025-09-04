import Image from "next/image";
import styles from "./Experiences.module.css";

function Experiences() {
    return (
        <section id="experiencias">
            <div className={styles.pageExperiences}>
                <h1 className={styles.titleExperiences}>Experiencia Laboral</h1>
                <div className={styles.containerExperiences}>
                    <div className={styles.card}>
                        <div>
                            <figure className={styles.image}>
                                <Image src="/images/img/BuenosAiresCiudad.jpg" alt="Buenos Aires Ciudad"
                                    width={300} height={200} priority />
                            </figure>
                            <h2>Desarrollador Backend Java Trainee</h2>
                            <h3>Gobierno de la Ciudad de Buenos Aires (04/2025 - 07/2025)</h3>
                            <p>
                                Formación intensiva como desarrollo backend, orientada a desarrollar habilidades tecnicas para analizar y resolver problemas, y aprender a trabajar en entornos colaborativos.
                                <br />
                                Durante las practicas logre:
                            </p>
                            <ul>
                                <li>Desarrollar programas en Java aplicando principios de la programación orientada a objetos.</li>
                                <li>Crear y gestionar bases de datos MySQL para el almacenamiento de datos.</li>
                                <li>Construir APIs RESTful utilizando Spring Boot.</li>
                                <li>Implementar operaciones CRUD con persistencia de datos.</li>
                                <li>Gestioner versiones de código utilizando Git.</li>
                                <li>Integrar el backend con entornos de desarrollo frontend.</li>
                                <li>Aplicar buenas prácticas de desarrollo backend(MVC) y seguridad en aplicaciones web.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div>
                            <figure className={styles.image}>
                                <Image src="/images/img/BuenosAiresCiudad.jpg" alt="Buenos Aires Ciudad"
                                    width={300} height={200} priority />
                            </figure>
                            <h2>Desarrollador Frontend React Trainee</h2>
                            <h3>Gobierno de la Ciudad de Buenos Aires (08/2025 - Actualidad)</h3>
                            <p>
                                Formación intensiva como desarrollo frontend, orientada a desarrollar conocimientos y habilidades tecnicas necesarias para desarrollar aplicaciones web interactivas con ReactJS.
                                <br />
                                Actualmente en las practicas logre:
                            </p>
                            <ul>
                                <li>Crear una aplicación ReactJS con Vite.</li>
                                <li>Implementar gestión de estados</li>
                                <li>Desarrollar rutas dinámicas</li>
                                <li>Construir formularios con validación básicas.</li>
                                <li>Desarrollador un CRUD básico para gestionar pedidos.</li>
                                <li>Aplicar estilos y diseño responsivo con librerias como Bootstrap y styled-components.</li>
                                <li>Desplegar la aplicación en una plataforma de hosting.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experiences;
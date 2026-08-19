import Header from './components/Header/Header'
import heroImage from './assets/images/salmon-rolls.jpeg'
import styles from './App.module.css'

function App() {
  return (
    <main className={styles.page}>
      <Header />

      <section id="inicio" className={styles.preview}>
        <div className={styles.content}>
          <p className="eyebrow">Cocina creativa</p>

          <h1 className={styles.title}>
            Sabores sin
            <span className={styles.titleAccent}> fronteras.</span>
          </h1>

          <p className={styles.description}>
            Una experiencia donde la creatividad, la técnica y diferentes
            culturas se encuentran en cada plato.
          </p>

          <p className={styles.status}>Propuesta visual en desarrollo</p>
        </div>

        <figure className={styles.imageWrapper}>
          <img
            className={styles.heroImage}
            src={heroImage}
            alt="Rolls de salmón de Fusión Restaurante"
          />
        </figure>
      </section>
    </main>
  )
}

export default App
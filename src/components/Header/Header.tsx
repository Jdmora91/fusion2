import { useState } from 'react'
import logo from '../../assets/images/logo.jpeg'
import styles from './Header.module.css'

const navigation = [
  { label: 'Concepto', href: '#concepto' },
  { label: 'Sabores', href: '#sabores' },
  { label: 'El chef', href: '#chef' },
  { label: 'Visítanos', href: '#contacto' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a
          className={styles.brand}
          href="#inicio"
          aria-label="Ir al inicio"
          onClick={closeMenu}
        >
          <img
            className={styles.logo}
            src={logo}
            alt="Fusión Restaurante y Bar"
          />
        </a>

        <button
          className={`${styles.menuButton} ${
            isMenuOpen ? styles.menuButtonOpen : ''
          }`}
          type="button"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          className={`${styles.navigation} ${
            isMenuOpen ? styles.navigationOpen : ''
          }`}
          aria-label="Navegación principal"
        >
          <ul className={styles.navigationList}>
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  className={styles.navigationLink}
                  href={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}

            <li>
              <a
                className={styles.reservationLink}
                href="#contacto"
                onClick={closeMenu}
              >
                Reservar
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
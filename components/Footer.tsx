import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.brandSection}>
            <h3 className={styles.brandName}>G.DUCK</h3>
            <p className={styles.tagline}>بطبوط يقود المرح ✨</p>
            <p className={styles.subtagline}>Toys. Style. Childhood magic.</p>
          </div>

          <div className={styles.linksSection}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Quick Links</h4>
              <ul className={styles.links}>
                <li><a href="#products">Products</a></li>
                <li><a href="#locations">Locations</a></li>
                <li><a href="#about">About</a></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Connect</h4>
              <ul className={styles.links}>
                <li>
                  <a
                    href="https://www.instagram.com/g.duckjordan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://web.facebook.com/profile.php?id=61580446164533"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="mailto:info@gduckjordan.com">Email</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} G.Duck Jordan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}


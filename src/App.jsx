import { useState } from "react";
import styles from "./App.module.css";

export const App = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <img src="/logo.svg" alt="Home" className={styles.logo} />
        <div className={styles.text}>
          <h1 className={styles.title}>
            <span>We&apos;re </span> coming soon
          </h1>
          <p className={styles.description}>
            Hello fellow shoppers! We&apos;re currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <form className={styles.register} onSubmit={handleSubmit}>
            <input
              type="email"
              className={styles.email}
              placeholder="Email Address"
              value={email}
              onChange={handleChange}
            />
            <button className={styles.send}>
              <img
                src="/icon-arrow.svg"
                alt="Click to register the given email"
                className={styles["send-image"]}
              />
            </button>
          </form>
        </div>
      </div>
      <img
        src="/hero-desktop.jpg"
        alt="Hero illustration"
        className={styles.image}
      />
    </main>
  );
};

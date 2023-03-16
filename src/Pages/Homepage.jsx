import FirstCard from "./components/First/FirstCard"
import SecondCard from "./components/Second/secondCard"
import styles from './style.module.css'
export default function HomePage(){
  return(
    <section className={styles.container}>
      <FirstCard/>
      <SecondCard />
    </section>
  )
}
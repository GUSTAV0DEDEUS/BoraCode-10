import FirstCard from "./components/First/FirstCard"
import SecondCard from "./components/Second/secondCard"
import ThirdCard from "./components/Third/ThirdCard"
import styles from './style.module.css'
export default function HomePage(){
  return(
    <section className={styles.container}>
      <FirstCard/>
      <SecondCard />
      <ThirdCard />
    </section>
  )
}
import CategoriesList from "@/modules/categories/components/CategoriesList";
import styles from "./page.module.css";
import RestaurantList from "@/modules/resturants/components/RestaurantList";

export default function Home() {
  return (
    <main className={styles.main}>
      <CategoriesList />
      <RestaurantList />
    </main>
  );
}

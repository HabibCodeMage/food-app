import CategoriesList from "@/modules/categories/components/CategoriesList";
import styles from "./page.module.css";
import RestaurantList from "@/modules/resturants/components/RestaurantList";
import RestaurantSearchBar from "@/modules/resturants/components/RestaurantSearchBar";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.searchBar}>
        <RestaurantSearchBar />
      </div>
      <div className={styles.categoriesBox}>
        <CategoriesList />
      </div>
      <RestaurantList />
    </main>
  );
}

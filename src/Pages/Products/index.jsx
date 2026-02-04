import { useMemo, useState } from "react";
import Filters from "../../components/products/Filters";
import HeroProjects from "../../components/products/Hero";
import ProductsGrid from "../../components/products/ProductsGrid";
import products from "../../data/productsList";
import styles from "./Products.module.css";
import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

export default function Products() {
  const [filters, setFilters] = useState({
    search: "",
    order: "",
    category: [],
    minPrice: 0,
    maxPrice: 1_000_000,
    minRating: 0,
  });

  const filtered = useMemo(() => {
    const term = filters.search.toLowerCase().trim();
    return products.filter((p) => {
      const matchesTerm =
        !term ||
        p.name.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term);

      const matchesCategory =
        filters.category.length === 0 ||
        (Array.isArray(p.category) &&
          p.category.some((cat) => filters.category.includes(cat)));

      const matchesPrice =
        p.price >= filters.minPrice && p.price <= filters.maxPrice;

      const matchesRating = p.rating >= filters.minRating;

      return matchesTerm && matchesCategory && matchesPrice && matchesRating;
    });
  }, [filters]);

  const sortedList = useMemo(() => {
    const list = [...filtered];

    switch (filters.order) {
      case "price-asc":
        return list.sort((a, b) => a.price - b.price);
      case "price-desc":
        return list.sort((a, b) => b.price - a.price);
      case "name-asc":
        return list.sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return list.sort((a, b) => b.name.localeCompare(a.name));
      case "rating-desc":
        return list.sort((a, b) => b.rating - a.rating);
      default:
        return list;
    }
  }, [filtered, filters.order]);

  const clearFilters = () => {
    setFilters({
      search: "",
      order: "",
      category: [],
      minPrice: 0,
      maxPrice: 1_000,
      minRating: 0,
    });
  };

  const set = (field) => (ev) =>
    setFilters((prev) => ({ ...prev, [field]: ev.target.value }));

  return (
    <main>
      <HeroProjects></HeroProjects>
      <div className={styles.searchHeader}>
        <h3>Tudo em um lugar</h3>
        <span className={styles.searchContainer}>
          <FaSearch />
          <input
            placeholder="Encontre o que procura"
            value={filters.search}
            onChange={set("search")}
          />
          <button>Buscar</button>
        </span>
      </div>
      <hr />
      <section className={styles.ProductsSection}>
        <details className={styles.filtersMobile}>
          <summary className={styles.filtersToggle}>
            Filtros
            <FaChevronDown className={styles.arrow} />
          </summary>
          <Filters
            filters={filters}
            onChange={setFilters}
            clearFilters={clearFilters}
            set={set}
          />
        </details>
        <aside className={styles.filtersDesktop}>
          <h3>Filtros</h3>
          <Filters
            filters={filters}
            onChange={setFilters}
            clearFilters={clearFilters}
            set={set}
          />
        </aside>
        <ProductsGrid list={sortedList} />
      </section>
    </main>
  );
}

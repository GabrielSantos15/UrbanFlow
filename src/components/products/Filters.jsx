import styles from "./Filters.module.css";
import { FaFilterCircleXmark } from "react-icons/fa6";

export default function Filters({ filters, onChange, clearFilters, set }) {
  const setNumber = (field) => (ev) => {
    const value = Number(ev.target.value);
    onChange((prev) => ({ ...prev, [field]: Number.isNaN(value) ? 0 : value }));
  };

  const setCategory = (ev) => {
    const { value, checked } = ev.target;
    onChange((prev) => {
      const next = checked
        ? prev.category.includes(value)
          ? prev.category
          : [...prev.category, value]
        : prev.category.filter((c) => c !== value);
      return { ...prev, category: next };
    });
  };

  return (
    <div className={styles.filtersContainer}>
      <form>
        <select value={filters.order} onChange={set("order")}>
          <option value="">Ordenar por</option>
          <option value="price-asc">Preço: Menor → Maior</option>
          <option value="price-desc">Preço: Maior → Menor</option>
          <option value="name-asc">Nome: A → Z</option>
          <option value="name-desc">Nome: Z → A</option>
          <option value="rating-desc">Melhor Avaliação</option>
        </select>

        <fieldset className={styles.filterCategory}>
          <legend>Categoria</legend>
          <label>
            <input
              type="checkbox"
              value="roupas"
              checked={filters.category.includes("roupas")}
              onChange={setCategory}
            />
            Roupas
          </label>

          <label>
            <input
              type="checkbox"
              value="spray"
              checked={filters.category.includes("spray")}
              onChange={setCategory}
            />
            Spray
          </label>

          <label>
            <input
              type="checkbox"
              value="skate"
              checked={filters.category.includes("skate")}
              onChange={setCategory}
            />
            Skate
          </label>

          <label>
            <input
              type="checkbox"
              value="acessorios"
              checked={filters.category.includes("acessorios")}
              onChange={setCategory}
            />
            Acessórios
          </label>
        </fieldset>
        <fieldset className={styles.filterPrice}>
          <legend>Preço</legend>
          <div>
            <label htmlFor="">Min</label>
            <span className={styles.inputPrice}>
              <i>R$</i>
              <input
                type="number"
                min={0}
                max={1000}
                value={filters.minPrice}
                onChange={setNumber("minPrice")}
              />
            </span>
          </div>
          <div>
            <label htmlFor="">Max</label>
            <span className={styles.inputPrice}>
              <i>R$</i>
              <input
                type="number"
                min={0}
                max={1000}
                value={filters.maxPrice}
                onChange={setNumber("maxPrice")}
              />
            </span>
          </div>
        </fieldset>
        <input
          type="range"
          min={0}
          max={5}
          step={0.1}
          value={filters.minRating}
          onChange={setNumber("minRating")}
        />
        <output>{filters.minRating}</output>

        <button
          className={styles.clearBtn}
          type="button"
          onClick={clearFilters}
        >
          <FaFilterCircleXmark />
          Limpar Filtros
        </button>
      </form>
    </div>
  );
}

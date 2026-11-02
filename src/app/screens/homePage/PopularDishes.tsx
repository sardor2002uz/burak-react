import React, { useState } from "react";

const list = [
    { productName: "Korean Spicy Soup", imagePath: "/img/cutlet.webp", category: "Soup", price: 15 },
    { productName: "Vegetarian Soup", imagePath: "/img/fresh.webp", category: "Soup", price: 15 },
    { productName: "Salmon Pasta", imagePath: "/img/food-city.webp", category: "Pasta", price: 18 },
    { productName: "Kebab Rice", imagePath: "/img/kebab-fresh.webp", category: "Grill", price: 18 },
];

export default function PopularDishes() {
    const [activeCategory, setActiveCategory] = useState("All");
    const categories = ["All", "Soup", "Pasta", "Grill"];
    const visibleDishes = activeCategory === "All"
        ? list
        : list.filter((dish) => dish.category === activeCategory);

    return (
        <section className="dish-section popular-dishes-frame">
            <div className="dish-section-inner">
                <div className="dish-section-heading">
                    <h2>Popular Dishes</h2>
                    <nav className="dish-categories" aria-label="Popular dish categories">
                        {categories.map((category) => (
                            <button
                                aria-pressed={activeCategory === category}
                                className={activeCategory === category ? "is-active" : ""}
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                type="button"
                            >
                                {category}
                            </button>
                        ))}
                    </nav>
                </div>
                <div className="dish-grid">
                    {visibleDishes.map((dish, index) => (
                        <a className="dish-card" href="/products" key={dish.productName}>
                            <div className="dish-card-image">
                                <img alt={dish.productName} src={dish.imagePath} />
                                <span className="dish-badge">Popular</span>
                                <span className="dish-add" aria-hidden="true">+</span>
                            </div>
                            <div className="dish-card-caption">
                                <span>{dish.productName}</span>
                                <strong>${dish.price}</strong>
                            </div>
                        </a>
                    ))}
                </div>
                <div className="dish-pagination" aria-label="Menu pages"><span className="is-active">1</span><span>2</span><span>3</span><span>→</span></div>
            </div>
        </section>
    );
}

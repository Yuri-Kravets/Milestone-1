import Card from "./Card.tsx";
import {useEffect, useState} from "react";

function Main() {

    const [items, setItems] = useState([]);
    const [count, setCount] = useState(4);

    useEffect(() => {
        async function fetchProducts() {
            let response = await fetch('https://fakestoreapi.com/products');

            const json = await response.json();
            setItems(json);
        }

        fetchProducts();
    }, []);

    return (
        <main className="p-6 bg-gray-100 min-h-screen">
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.slice(0, count).map((item) => (
                    <Card key={item.id} item={item}/>
                ))}
                <button className="text-black p-2 mt-4"
                        onClick={() =>
                            setCount(count + 4)}>
                    Show more
                </button>
            </div>
        </main>
    );
}

export default Main;
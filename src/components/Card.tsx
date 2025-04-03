
function Card({item}){
    return (
        <div className="m-auto overflow-hidden w-16 h-80 bg-white text-black p-4 rounded-lg shadow-lg flex flex-col items-center w-full max-w-6xl">
            <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 object-contain mb-2"
            />
            <h2 className="overflow-hidden text-lg font-semibold text-center">{item.title}</h2>
            <p className="text-gray-700 font-bold">${item.price}</p>
            <button className="mt-2 bg-blue-500  py-1 px-4 rounded">
                Buy
            </button>
        </div>
    );
}

export default Card;
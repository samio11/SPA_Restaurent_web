import { Link, useLoaderData } from "react-router-dom";

const Products = () => {
    const loadData = useLoaderData();
    let loadMainData = loadData.meals;
    console.log(loadMainData);
    return (
        <div>
            <div>
                <div className="text-center mt-10 text-xl md:text-5xl">Your Recommanded Dishes:-</div>
            </div>
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    loadMainData.map(Element => (
                        <div key={Element.idMeal} className="card card-compact w-96 bg-base-100 shadow-xl mt-10">
                            <figure><img src={Element.strMealThumb} alt="Shoes" className="h-[300px] w-full" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl">{Element.strMeal}</h2>
                                <div className="card-actions justify-center">
                                   <Link to={`/${Element.idMeal}`}>
                                   <button className="btn btn-outline btn-warning btn-wide">View More</button>
                                   </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
    );
};

export default Products;
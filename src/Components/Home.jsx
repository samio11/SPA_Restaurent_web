import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
    const loadChatagory = useLoaderData();
    let loadMainDataOfButton = loadChatagory.categories;
    console.log(loadMainDataOfButton);
    return (
        <div>
            {/* header section */}
            <div className="flex flex-col md:flex-row justify-between items-center shadow-xl h-auto md:h-[20vh]">
                <div>
                    <img src="https://logowik.com/content/uploads/images/restaurant9491.logowik.com.webp" className="h-[150px] w-[150px] ml-10" alt="" />
                </div>
                <div>
                    <h3 className="text-xl md:text-2xl font-semibold pr-10">Welcome To Samio Restaurent</h3>
                </div>
            </div>
            <div className="text-center mt-10">
                <h3 className="text-2xl">Which Type of Food Do You Prefer sir?</h3>
            </div>
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    loadMainDataOfButton.map(Element => (
                        <div key={Element.idCategory} className="card card-compact bg-base-100 shadow-xl space-y-5">
                            <figure><img src={Element.strCategoryThumb} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="text-center text-xl">{Element.strCategory}</h2>
                                <div className="card-actions justify-center">
                                    <Link to={`/MultipleProduct/${Element.strCategory}`}>
                                    <button className="btn btn-outline btn-wide">View More Related Dishes</button></Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Home;
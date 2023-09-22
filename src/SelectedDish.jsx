
import { useLoaderData } from 'react-router-dom';

const SelectedDish = () => {
    const detail = useLoaderData();
    let loadDetail = detail.meals;
    console.log(loadDetail);
    return (
        <div>
            <h3 className='text-center text-3xl font-semibold'>Your Selected Dish info:-</h3>
            <div>
                {
                    loadDetail.map(Element=>(
                        <div key={Element.idMeal} className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={Element.strMealThumb} className='h-auto md:h-[500px]'/>
                        <div>
                            <h1 className="text-5xl font-bold">{Element.strMeal}</h1>
                            <p className="py-3 text-xl text-gray-400">Dish Made in:- {Element.strArea}</p>
                            <p className="py-3 text-xl text-gray-400">type of Dish:- {Element.strCategory}</p>
                             
                            <div className='flex justify-center items-center gap-5'>
                            <button className="btn btn-outline"><a href={Element.strYoutube}>YouTube</a></button>
                            <button className="btn btn-outline"><a href='/'>Back</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                    ))
                }
            </div>
        </div>
    );
};

export default SelectedDish;
{/* CODECARD with horizontal scroll */}
<div className='overflow-x-auto px-5 py-5'>
    <div className='container flex flex-nowrap space-x-5'>
        {data && data.map((item, index) => (
            <div key={index} className="max-w-sm h-[350px] bg-white border border-gray-200 rounded-lg shadow flex-shrink-0">
                <a href="#">
                    <img className="p-8 rounded-t-lg w-full h-full object-cover" src={item.gambar} alt="product" />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.merk} - {item.model}</h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            {/* BINTANG */}
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">{item.harga}</span>
                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>

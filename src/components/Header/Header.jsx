import cart from "../../img/cart-shopping-fast-svgrepo-com.svg";
import menu from "../../img/menu-svgrepo-com.svg";
import search from "../../img/search-alt-2-svgrepo-com.svg";

const Header = () => {
    return (
        <header className=" fixed top-0 left-0 z-[100] drop-shadow-2xl w-full p-5 bg-gray-500 flex justify-between items-center">
            {/* Header Left */}
            <div className="flex items-center">
                <img src={menu} alt="menu" className="w-6 h-6 object-contain cursor-pointer" />
                <h1 className=" text-sm font-semibold text-red-900 ">Yoow</h1>
            </div>
            {/* Header Right */}
            <div className="flex items-center">
                <input type="text" placeholder="Search" className=" outline-none p-2 font-mono text-sm mr-2 "/>
                <img src={search} alt="search" className="w-6 h-6 object-contain cursor-pointer mr-7 " />
                <img src={cart} alt="cart" className="w-6 h-6 object-contain cursor-pointer" />
            </div>
        </header>
    );
};

export default Header;

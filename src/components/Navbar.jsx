function Navbar({ products }) {
  return (
    <div className="h-12 bg-slate-700 flex items-center justify-center gap-x-2 md:gap-x-4 mb-6">
        <img src="./product-management.png" className="w-8 h-8" alt="" />
      <h1 className="text-base md:text-xl font-bold text-slate-300">
        Product Management App
      </h1>
      <span className="w-7 h-7 rounded-full flex items-center justify-center bg-slate-500 border-2 border-slate-300 text-slate-300 font-bold ">
        {products.length}
      </span>
    </div>
  );
}

export default Navbar;

const Header = ({ totalbuds }) => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-4 text-blue-900">
        Grocery Bud
      </h1>
      <p className=" text-blue-600 text-center mb-4 font-bold">
        Total buds: {totalbuds}
      </p>
    </>
  );
};

export default Header;

const Header = () => {
  return (
    <div className="Header flex justify-between items-center p-4 font-sans ">
      <div className="title">
        <h2 className="text-3xl font-bold text-red-600">NewsApp</h2>
      </div>
      <div className="Header-components flex justify-between w-1/2 text-xl font-medium">
        <h2 className="mx-4">Stories</h2>
        <h2 className="mx-4">Creator</h2>
        <h2 className="mx-4">Community</h2>
        <h2 className="mx-4">Subscribe</h2>
      </div>
    </div>
  );
};

export default Header;

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <button className="bg-purple-600 text-white px-4 py-2 rounded">
        Add Assessment
      </button>
      <div className="text-gray-500">254 / 254 patients seen</div>
      <div className="flex items-center">
        <div className="text-right mr-4">
          <div className="font-semibold">Sandra Mwai</div>
          <div className="text-gray-500">sandra@accessafya.com</div>
        </div>
        <img
          src="https://placehold.co/40x40"
          alt="Profile picture of Sandra Mwai"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;

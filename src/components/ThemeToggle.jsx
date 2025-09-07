const ThemeToggle = () => {
  const handleToggle = () => {};

  return (
    <button
      onClick={handleToggle}
      className="border px-3 py-1 rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      🌙 / ☀️
    </button>
  );
};

export default ThemeToggle;

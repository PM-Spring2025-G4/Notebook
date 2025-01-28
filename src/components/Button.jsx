export const Button = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 text-white bg-blue-500 rounded-sm hover:bg-blue-700"
  >
    {label}
  </button>
)

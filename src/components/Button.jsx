// EXAMPLE COMPONENT

// USE export const

// The interface declaration is not needed in a JavaScript file.
// You can remove the following code:

// interface ButtonProps {
//   label: string
//   onClick: () => void
// }

export const Button = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 font-bold text-black bg-orange-400 rounded-md hover:bg-red-400"
  >
    {label}
  </button>
)

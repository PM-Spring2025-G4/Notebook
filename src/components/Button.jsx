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
    className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
  >
    {label}
  </button>
)

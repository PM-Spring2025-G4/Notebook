// EXAMPLE COMPONENT

// USE export const

interface ButtonProps {
  label: string
  onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
  >
    {label}
  </button>
)

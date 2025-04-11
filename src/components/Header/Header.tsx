import { memo, type FC } from 'react';

interface HeaderProps {
  mode?: 'default' | 'edit';
  onChangeMode: () => void;
  onCancel: () => void;
  onSave: () => void
}

export const Header: FC<HeaderProps> = memo(({ 
  mode = 'default', 
  onCancel, 
  onSave, 
  onChangeMode 
}) => {
  return (
    <header 
      className="flex justify-between items-center p-6 border-b shadow-sm sticky top-0"
    >
      <h1 className="text-xl font-bold">My Dashboard</h1>
      
      <div>
        {mode === 'edit' ? (
          <div className="flex gap-2">
            <button
              onClick={onCancel}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
            >
              Cancel
            </button>

            <button
              onClick={onSave}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Save dashboard
            </button>

          </div>
        ) : (
          <button
            onClick={onChangeMode}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Edit dashboard
          </button>
        )}
      </div>
    </header>
  )
})
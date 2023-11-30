import  { useState } from 'react';

const Table = () => {
  const [selectedCell, setSelectedCell] = useState(null);

  const handleCellClick = (row, col) => {
    const cellNumber = row * 4 + col + 1;
    setSelectedCell(cellNumber);
  };

  return (
    <table border="1">
      <tbody>
        {[...Array(4)].map((_, rowIndex) => (
          <tr key={rowIndex}>
            {[...Array(4)].map((_, colIndex) => (
              <td key={colIndex} onClick={() => handleCellClick(rowIndex, colIndex)}>
                {rowIndex * 4 + colIndex + 1}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      {selectedCell !== null && (
        <caption>Ви обрали ячейку: {selectedCell}</caption>
      )}
    </table>
  );
};

export default Table;





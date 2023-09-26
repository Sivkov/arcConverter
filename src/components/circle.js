import React, { useRef, useState } from 'react';

const Circle = () => {
  const circleRef = useRef(null);
  const [matrix, setMatrix] = useState({ a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 }); // Изначальная матрица

  const handleMoveCircle = () => {
    // Обновление матрицы преобразования для перемещения круга
    const newMatrix = {
      a: matrix.a,
      b: matrix.b,
      c: matrix.c,
      d: matrix.d,
      e: matrix.e + 10, // Смещение по X
      f: matrix.f,
    };
    setMatrix(newMatrix);
  };

  return (
    <svg width="200" height="200">
      <g transform={`matrix(${matrix.a} ${matrix.b} ${matrix.c} ${matrix.d} ${matrix.e} ${matrix.f})`}>
        <circle ref={circleRef} cx="100" cy="100" r="100" fill="blue" onClick={handleMoveCircle}/>
      </g>
     </svg>
  );
};

export default Circle;

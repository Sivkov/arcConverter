import React, { useRef } from 'react';

const SvgComponent = ({ matrix, gmatrix }) => {
    const wrapperRef = useRef(null);
    const matrixM = `${matrix.a} ${matrix.b} ${matrix.c} ${matrix.d} ${matrix.e} ${matrix.f}`;
    const matrixG = `${gmatrix.a} ${gmatrix.b} ${gmatrix.c} ${gmatrix.d} ${gmatrix.e} ${gmatrix.f}`;
	const widthSVG = 100
	const heightSVG = 90

    // Функция для умножения двух 3x3 матриц
    const multiplyMatrices = (m1, m2) => {
        return {
            a: m1.a * m2.a + m1.c * m2.b,
            b: m1.b * m2.a + m1.d * m2.b,
            c: m1.a * m2.c + m1.c * m2.d,
            d: m1.b * m2.c + m1.d * m2.d,
            e: m1.a * m2.e + m1.c * m2.f + m1.e,
            f: m1.b * m2.e + m1.d * m2.f + m1.f,
        };
    };

    // Вычисление комбинированной матрицы
    const combinedMatrix = multiplyMatrices(gmatrix, matrix);

    // Функции для вычисления значений для rect
    const calculateRectAttributes = () => {
        // Ширина и высота исходя из scale
        const scaleX = combinedMatrix.a;
        const scaleY = combinedMatrix.d;

        const width = widthSVG/ scaleX;
        const height = heightSVG / scaleY;

        // Координаты x и y исходя из translate
        const x = -combinedMatrix.e / scaleX;
        const y = -combinedMatrix.f / scaleY;

        return { x, y, width, height };
    };

    const { x, y, width, height } = calculateRectAttributes();

    return (
        <svg
            id="svg"
            baseProfile="full"
            viewBox={`0.00 0.00 ${widthSVG} ${heightSVG}`}
            style={{ overflow: 'hidden', border: '1px solid white' }}
            version="1.1"
            stroke="white"
            strokeWidth="0.2"
        >
            <defs>
                <pattern id="xsGrid" width="1" height="1" fill="white" patternUnits="userSpaceOnUse">
                    <path d="M 0 0 1 0 1 1 0 1 0 0" fill="none" stroke="white" strokeWidth="0.05"></path>
                </pattern>
                <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <rect width="100" height="100" fill="url(#xsGrid)"></rect>
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.2"></path>
                </pattern>
                <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                    <rect width="100" height="100" fill="url(#smallGrid)"></rect>
                    <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.7"></path>
                </pattern>
            </defs>
            <g id="group2" fill="url(#grid)">
                <g id="group1" transform={`matrix(${matrixG})`}>
                    <g id="group" transform={`matrix(${matrixM})`} className="grab">
                        <g id="contours">
                            <rect
                                id="dimensionalGrid"
                                height={height}
                                width={width}
                                x={x}
                                y={y}
                                fill="url(#grid)"
                                transform-origin="50% 50%"
                                stroke="white"
                                strokeWidth="0"
                            ></rect>
                            <path id="ellepsis" d="M 20 50 A 30 20 0 0 0 80 50 A 30 20 0 0 0 20 50"></path>
                            <path id="arcs" d="M 20 50 A 30 20 0 0 0 80 50 A 30 20 0 0 0 20 50"></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default SvgComponent;
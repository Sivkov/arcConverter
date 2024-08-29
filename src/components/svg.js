import React, { useRef, useState } from 'react';
import Arc from './../utils/arc.js';


const SvgComponent = ({ matrix, gmatrix, radiusX, radiusY, segments }) => {
    const wrapperRef = useRef(null);
    const matrixM = `${matrix.a} ${matrix.b} ${matrix.c} ${matrix.d} ${matrix.e} ${matrix.f}`;
    const matrixG = `${gmatrix.a} ${gmatrix.b} ${gmatrix.c} ${gmatrix.d} ${gmatrix.e} ${gmatrix.f}`;
	const widthSVG = 100
	const heightSVG = 60
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

    const combinedMatrix = multiplyMatrices(gmatrix, matrix);


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
    const ellepsisPath = function (r1, r2) {
        if (r1  && r2){
            return `M${widthSVG*0.5-r1} ${heightSVG*0.5} A${r1} ${r2} 0 0 0 ${widthSVG*0.5+r1} ${heightSVG*0.5} A ${r1} ${r2} 0 0 0 ${widthSVG*0.5-r1} ${heightSVG*0.5}`
        } else {
            return document.querySelector('#ellepsis').getAttribute('d')
        }

    }

    const ell = ellepsisPath(radiusX, radiusY)
    const circleArcs = Arc.converting (ell, segments)
    //const deviationPoint = Arc.findMaxDeviationPoint(ell, circleArcs, 1000 )


    //const [deviationPoint, setDeviation] = useState({ x: 0, y:0});
    /*
    const ss = (p1, p2) => { 
        let res = Arc.findMaxDeviationPoint(ell, circleArcs, 1000 )
        setDeviation( {x:res.maxDeviationPoint.x,y: res.maxDeviationPoint.y})
    } */   


    return (
        <svg
            id="svg"
            baseProfile="full"
            viewBox={`0.00 0.00 ${widthSVG} ${heightSVG}`}
            style={{ overflow: 'hidden', border: '1px solid var(--color)' }}
            version="1.1"
            stroke='var(--color)'
            strokeWidth="0.2"
        >
            <defs>
                <pattern id="xsGrid" width="1" height="1" fill="white" patternUnits="userSpaceOnUse">
                    <path d="M 0 0 1 0 1 1 0 1 0 0" fill="none" stroke='var(--color)' strokeWidth="0.05"></path>
                </pattern>
                <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <rect width="100" height="100" fill="url(#xsGrid)"></rect>
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke='var(--color)' strokeWidth="0.2"></path>
                </pattern>
                <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                    <rect width="100" height="100" fill="url(#smallGrid)"></rect>
                    <path d="M 100 0 L 0 0 0 100" fill="none" stroke='var(--color)' strokeWidth="0.7"></path>
                </pattern>
                <marker id="dotRed" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5">
                    <circle cx="5" cy="5" r="5" fill="red"></circle>
                </marker>
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
                                stroke='var(--color)'
                                strokeWidth="0"
                            ></rect>
                            <path 
                                id="ellepsis" 
                                d={ell}
                            ></path>
                            <path 
                                markerEnd="url(#dotRed)" 
                                markerMid="url(#dotRed)" 
                                markerStart="url(#dotRed)"
                                id="arcs" 
                                d={circleArcs}
                            ></path>
                              {/* <circle 
                                cx={ deviationPoint.maxDeviationPoint.x} 
                                cy={ deviationPoint.maxDeviationPoint.y} 
                                r="1"
                                fill='green'/> */}
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default SvgComponent;
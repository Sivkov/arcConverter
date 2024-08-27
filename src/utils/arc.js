import SVGPathCommander from 'svg-path-commander';
import Util from "./util";

class Arc {

    static findMaxDeviationPoint(pathData1, pathData2, numSamples = 1000) {
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.getElementById("svg");
        const path1 = document.createElementNS(svgNS, "path");
        const path2 = document.createElementNS(svgNS, "path");

        path1.setAttribute("d", pathData1);
        path2.setAttribute("d", pathData2);

        svg.appendChild(path1);
        svg.appendChild(path2);

        const totalLength1 = path1.getTotalLength();
        const totalLength2 = path2.getTotalLength();

        let maxDeviation = 0;
        let maxDeviationPoint = null;
        let correspondingPoint = null;

        for (let i = 0; i <= numSamples; i++) {
            const ratio = i / numSamples;
            const length1 = totalLength1 * ratio;
            const length2 = totalLength2 * ratio;

            const point1 = path1.getPointAtLength(length1);
            const point2 = path2.getPointAtLength(length2);

            const currentDeviation = Util.distance(point1, point2);

            if (currentDeviation > maxDeviation) {
                maxDeviation = currentDeviation;
                maxDeviationPoint = point1;
                correspondingPoint = point2;
            }
        }

        // Clean up the temporary SVG elements
        path2.remove();
        path1.remove();
        console.log(maxDeviation)

        return {
            maxDeviation,
            maxDeviationPoint,
            correspondingPoint
        };
    }

    static  ellipeinc(phi, m) {
        const n = 100000;
        const dphi = phi / n;
        let sum = 0;

        for (let i = 0; i < n; i++) {
            let theta = i * dphi;
            let integrand = Math.sqrt(1 - m * Math.pow(Math.sin(theta), 2));
            sum += integrand;
        }

        return sum * dphi;
    }

    static  svgArcToCenterParam(x1, y1, rx, ry, degree, fA, fS, x2, y2) {
        var cx, cy, startAngle, deltaAngle, endAngle;
        var PIx2 = Math.PI * 2.0;
        var phi = degree * Math.PI / 180;

        if (rx < 0) {
            rx = -rx;
        }
        if (ry < 0) {
            ry = -ry;
        }
        if (rx == 0.0 || ry == 0.0) { // invalid arguments
            throw Error('rx and ry can not be 0');
        }

        var s_phi = Math.sin(phi);
        var c_phi = Math.cos(phi);
        var hd_x = (x1 - x2) / 2.0; // half diff of x
        var hd_y = (y1 - y2) / 2.0; // half diff of y
        var hs_x = (x1 + x2) / 2.0; // half sum of x
        var hs_y = (y1 + y2) / 2.0; // half sum of y

        // F6.5.1
        var x1_ = c_phi * hd_x + s_phi * hd_y;
        var y1_ = c_phi * hd_y - s_phi * hd_x;

        // F.6.6 Correction of out-of-range radii
        //   Step 3: Ensure radii are large enough
        var lambda = (x1_ * x1_) / (rx * rx) + (y1_ * y1_) / (ry * ry);
        if (lambda > 1) {
            rx = rx * Math.sqrt(lambda);
            ry = ry * Math.sqrt(lambda);
        }

        var rxry = rx * ry;
        var rxy1_ = rx * y1_;
        var ryx1_ = ry * x1_;
        var sum_of_sq = rxy1_ * rxy1_ + ryx1_ * ryx1_; // sum of square
        if (!sum_of_sq) {
            throw Error('start point can not be same as end point');
        }
        var coe = Math.sqrt(Math.abs((rxry * rxry - sum_of_sq) / sum_of_sq));
        if (fA == fS) { coe = -coe; }

        // F6.5.2
        var cx_ = coe * rxy1_ / ry;
        var cy_ = -coe * ryx1_ / rx;

        // F6.5.3
        cx = c_phi * cx_ - s_phi * cy_ + hs_x;
        cy = s_phi * cx_ + c_phi * cy_ + hs_y;

        var xcr1 = (x1_ - cx_) / rx;
        var xcr2 = (x1_ + cx_) / rx;
        var ycr1 = (y1_ - cy_) / ry;
        var ycr2 = (y1_ + cy_) / ry;

        // F6.5.5
        startAngle = Util.radian(1.0, 0.0, xcr1, ycr1);

        // F6.5.6
        deltaAngle = Util.radian(xcr1, ycr1, -xcr2, -ycr2);
        while (deltaAngle > PIx2) { deltaAngle -= PIx2; }
        while (deltaAngle < 0.0) { deltaAngle += PIx2; }
        if (fS == false || fS == 0) { deltaAngle -= PIx2; }
        endAngle = startAngle + deltaAngle;
        while (endAngle > PIx2) { endAngle -= PIx2; }
        while (endAngle < 0.0) { endAngle += PIx2; }

        var outputObj = {
            cx: cx,
            cy: cy,
            rx: rx,
            ry: ry,
            phi: phi,
            startAngle: startAngle,
            deltaAngle: deltaAngle,
            endAngle: endAngle,
            clockwise: (fS == true || fS == 1)
        }

        return outputObj;
    }

    static  ellipseArcLength(T0, T1, a, b) {
        const m = 1 - (b / a) ** 2;
        const t1 = this.ellipeinc(T1 - 0.5 * Math.PI, m);
        const t0 = this.ellipeinc(T0 - 0.5 * Math.PI, m);
        return Math.abs(a * (t1 - t0));
    }

    static  closestPointOnCircle(cx, cy, r, x, y) {
        // Вектор от центра окружности к заданной точке
        const dx = x - cx;
        const dy = y - cy;

        // Расстояние от центра окружности до заданной точки
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Нормализовать вектор и умножить на радиус
        const scale = r / distance;
        const closestX = cx + dx * scale;
        const closestY = cy + dy * scale;

        return { x: closestX, y: closestY };
    }

    static  convertEllipticalToCircularArc(x1, y1, rx, ry, flag1, flag2, flag3, x2, y2) {

        let res = this.svgArcToCenterParam(x1, y1, rx, ry, flag1, flag2, flag3, x2, y2)

        if (flag3 === 0 && res.startAngle < res.endAngle) {
            res = this.svgArcToCenterParam(x1, y1, rx, ry, flag1, flag2, 1, x2, y2)
        }

        if (flag3 === 1 && res.startAngle > res.endAngle) {
            res = this.svgArcToCenterParam(x1, y1, rx, ry, flag1, flag2, 0, x2, y2)
        }

        let iniArcLenght = this.ellipseArcLength(res.endAngle - res.deltaAngle, res.endAngle, rx, ry)
        let startRadius = Util.distance({ x: x1, y: y1 }, { x: x2, y: y2 }) * 0.5
        let bestR = this.findRadius(iniArcLenght, startRadius * 2, x1, y1, rx, ry, flag1, flag2, flag3, x2, y2)
        let res1 = this.svgArcToCenterParam(x1, y1, bestR, bestR, flag1, flag2, flag3, x2, y2)
        const closestPoint = this.closestPointOnCircle(res1.cx, res1.cy, bestR, x2, y2,);
        let newP = `A ${bestR} ${bestR} ${flag1} ${flag2} ${flag3} ${closestPoint.x} ${closestPoint.y}`
        //console.log (newP)
        return newP
    }

    static  normalizeAngle(angle) {
        const twoPi = 2 * Math.PI;
        return (angle % twoPi + twoPi) % twoPi;
    }

    static  check(ppath2, ppath3, seg = 1) {
        let errors = 0
        let diff = 0
        let maxPane = { a: { x: 0, y: 0 }, b: { x: 0, y: 0 } }


        var fakePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        fakePath.setAttribute("d", ppath2);
        fakePath.setAttribute("id", 'path2');
        var svg = document.getElementById('svg')
        svg.appendChild(fakePath);


        var fakePath1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        fakePath1.setAttribute("d", ppath3);
        fakePath1.setAttribute("id", `path3`);
        svg.appendChild(fakePath1);

        let path2 = document.querySelector('#path2')
        let path3 = document.querySelector('#path3')

        const tl = (path2.getTotalLength() / seg);
        const tl1 = (path3.getTotalLength() / seg);
        let ratio = tl1 / tl

        for (let i = 0; i < tl; i++) {

            const point = path2.getPointAtLength(i * seg);
            let { x, y } = point;
            const point1 = path3.getPointAtLength(i * seg * ratio);
            const x1 = point1.x
            const y1 = point1.y

            let distance = Math.round(Util.distance({ x: x, y: y }, { x: x1, y: y1 }) * 10000) / 10000
            if (distance > 0.005) {
                errors += 1
                if (distance > diff) {
                    diff = distance
                    maxPane.a = point
                    maxPane.b = point1
                }
            }
        }
        //console.log('errors ' + errors)
        //console.log(maxPane.a)
        if (diff > 0.05) {
            console.error('diff  ' + diff)
        } else {
           // console.log('diff  ' + diff)
        }

/*         try {
            $('.errorPoint').remove()
        } catch (e) { } */

        this.createAndRemoveCircle(maxPane.a.x, maxPane.a.y)
        this.createAndRemoveCircle(maxPane.b.x, maxPane.b.y)

        document.querySelector('#path2').remove()
        document.querySelector('#path3').remove()
    }

    static  createAndRemoveCircle(cx, cy) {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("r", 1);
        circle.setAttribute("stroke", "limegreen");
        circle.setAttribute("stroke-width", 0.5);
        circle.setAttribute("cx", cx);
        circle.setAttribute("cy", cy);
        circle.setAttribute("fill", "none");
        circle.setAttribute("class", "errorPoint");
        document.querySelector("#contours").appendChild(circle);
    }

    static  generateNewArc(path/*, rx, ry*/) {
        let pathArc = SVGPathCommander.normalizePath(path)
        let rx, ry, x1, y1, x2, y2, flag1, flag2, flag3;
        if (pathArc.length) {
            pathArc.forEach((seg, i) => {
                if (seg.includes('A')) {
                    flag1 = seg[3]
                    flag2 = seg[4]
                    flag3 = seg[5]
                    rx = seg[1]
                    ry = seg[2]
                    x2 = seg[6]
                    y2 = seg[7]
                    if (rx !== ry) {
                        let nArc = this.convertEllipticalToCircularArc(x1, y1, rx, ry, flag1, flag2, flag3, x2, y2)
                        pathArc[i] = nArc
                    }
                    x1 = x2
                    y1 = y2
                }
                if (seg.includes('M')) {
                    x1 = seg[1]
                    y1 = seg[2]
                    pathArc[i] = `M${x1} ${y1}`
                }
                if (seg.includes('L')) {
                    x1 = seg[1]
                    y1 = seg[2]
                }
            })
        }
        let res = pathArc.toString().replaceAll(',', ' ')
        //console.log (res)
        return res
    }

    static  circularArcLength(x1, y1, rr, flag1, flag2, flag3, x2, y2) {
        const chordLength = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const theta = 2 * Math.asin((chordLength / (2 * rr)));
        //inlet.theta = theta
        let arcLength = rr * theta;
        if (flag2 === 1) arcLength = 2 * rr * Math.PI - arcLength
        return +arcLength;
    }

    static  approximateEllipse(a, b, cx, cy, segments, clockwise = true, startAngle = 0, endAngle = 2 * Math.PI, deltaAngle) {
        let path = '';
        const direction = clockwise ? 1 : 1;
        const totalTheta = deltaAngle
        const averageSegmentAngle = totalTheta / segments;
        
    
        let angles = [];
        for (let i = 0; i < segments; i++) {
            // Вычисление угла в центре сегмента
            const theta = startAngle + (i + 0.5) * averageSegmentAngle * direction;
            const curvatureRadius = this.radiusOfCurvature(a, b, theta);
            angles.push({ theta, curvatureRadius });
        }
    
        // Найти максимальный и минимальный радиус кривизны
        const maxCurvatureRadius = Math.max(...angles.map(a => a.curvatureRadius));
    
        // Изменить углы сегментов на основе радиуса кривизны
        let adjustedAngles = angles.map(({ theta, curvatureRadius }) => {
            const curvatureFactor = (maxCurvatureRadius / curvatureRadius) ** 1.5; // Усилить эффект кривизны
            return averageSegmentAngle * curvatureFactor;
        });
    
        // Нормализовать измененные углы, чтобы сумма была равна totalTheta
        const adjustedAnglesSum = adjustedAngles.reduce((sum, angle) => sum + angle, 0);
        adjustedAngles = adjustedAngles.map(angle => angle * (totalTheta / adjustedAnglesSum));
    
        let prevTheta = startAngle;
        let prevX = cx + a * Math.cos(prevTheta);
        let prevY = cy + b * Math.sin(prevTheta);
        path += `M ${prevX} ${prevY}`;
    
        for (let i = 0; i < segments; i++) {
            const theta = prevTheta + adjustedAngles[i] * direction;
            const x = cx + a * Math.cos(theta);
            const y = cy + b * Math.sin(theta);
    
            path += ` A ${a} ${b} 0 0 ${clockwise ? 1 : 0} ${x} ${y}`;
    
            prevTheta = theta;
            prevX = x;
            prevY = y;
        }
    
        return path;
    }

    static  radiusOfCurvature(a, b, theta) {
        const sinTheta = Math.sin(theta);
        const cosTheta = Math.cos(theta);
        const numerator = Math.pow(a * b, 2);
        const denominator = Math.pow(b * cosTheta, 2) + Math.pow(a * sinTheta, 2);
        return numerator / Math.sqrt(denominator);
    }

    static  findRadius(arcLength, chordLength, x1, y1, rx, ry, flag1, flag2, flag3, x2, y2) {
        function f(R) {
            return 2 * R * Math.sin(arcLength / (2 * R)) - chordLength;
        }

        function fPrime(R) {
            const halfTheta = arcLength / (2 * R);
            return 2 * Math.sin(halfTheta) - (arcLength / R) * Math.cos(halfTheta);
        }

        let R = chordLength / 2;
        const tolerance = 1e-7;
        const maxIterations = 100;
        let iterations = 0;

        while (Math.abs(f(R)) > tolerance && iterations < maxIterations) {
            R = R - f(R) / fPrime(R);
            iterations++;
        }
        if (R === Infinity) {
            let startRadius = chordLength * 0.5
            let minDif = Infinity
            for (let i = startRadius; i < 2500; i += 0.001) {
                let rr = Math.round((startRadius + i) * 100) / 100
                //let svgArc = `M${x1} ${y1} A ${rr} ${rr} ${flag1} ${flag2} ${flag3} ${x2} ${y2}`;
                let newArc = this.circularArcLength(x1, y1, rr, flag1, flag2, flag3, x2, y2)
                let diff = newArc - arcLength
                if (Math.abs(diff) < minDif) {
                    minDif = diff
                    R = rr
                    if (Math.abs(minDif) < 0.000001) {
                        break
                    }
                }
            }
        }
        return R;
    }

    static  arcConvert(a, b, cx, cy, clockwise = false, startAngle=0, endAngle=2*Math.PI, deltaAngle=2*Math.PI) {
        let segments = 24//48
        if (a < 100 && b < 100 ) segments = 12//24;
        let ellepsis = this.approximateEllipse(a, b, cx, cy, segments, clockwise, startAngle, endAngle, deltaAngle)
        const pathData = this.generateNewArc( ellepsis )
        return pathData;
    }

    static  convertAndCheck(a, b) {
        let ini = `M${a * 2} ${b} A${a} ${b} 0 0 0 0 ${b} A ${a} ${b} 0 0 0 ${a * 2} ${b}z`
        let popopo = document.querySelector(`.inlet[data-cid="0"] path`)
        popopo.setAttribute('d', ini)
        popopo.setAttribute('id', 'ini')
        popopo.setAttribute('stroke', 'aliceblue')
        popopo.setAttribute('stroke-width', 0.01)
        let newArc = this.arcConvert(a, b, a, b, false)
        let popopop = document.querySelector(`.contour[data-cid="0"] path`)
        popopop.setAttribute('d', newArc)
        popopop.setAttribute('id', 'arc')
        this.check(ini, newArc)
        //this.findMaxDeviationPoint(ini, newArc, 1000)
    }

    static  cutStringAtFirstA(str) {
        const index = str.indexOf('A');
        if (index !== -1) {
            return str.substring(index);
        } else {
            // Если "A" не найдено, можно вернуть пустую строку или исходную строку
            return ''; // или return str;
        }
    }

    static  converting (path) {
        let pathArc = SVGPathCommander.normalizePath(path)
        let rx, ry, x1, y1, x2, y2, flag1, flag2, flag3 ;
        let arc =''
        if (pathArc.length) {
            pathArc.forEach((seg, i) => {
                if (seg.includes('A')) {
                    flag1 = seg[3]
                    flag2 = seg[4]
                    flag3 = seg[5]
                    rx = seg[1]
                    ry = seg[2]
                    x2 = seg[6]
                    y2 = seg[7]
                    if (flag1===90 ) {
                        rx = seg[2]
                        ry = seg[1]
                        flag1 = 0
                    }
                    let res = this.svgArcToCenterParam(x1, y1, rx, ry, flag1, flag2, flag3, x2, y2)
                    arc += this.arcConvert(rx, ry, res.cx, res.cy, res.clockwise, res.startAngle, res.endAngle, res.deltaAngle) 
                    x1 = x2
                    y1 = y2

                }
                if (seg.includes('M')) {
                    x1 = seg[1]
                    y1 = seg[2]
                    arc += `M${x1} ${y1}`
                }
            })
        }
        return arc
        // return  without M this.cutStringAtFirstA(arc)
    }
}

export default Arc;

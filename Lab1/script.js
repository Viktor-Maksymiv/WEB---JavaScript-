console.log(`
========================================================
ІНСТРУКЦІЯ ВИКОРИСТАННЯ ФУНКЦІЇ triangle()

Використання: 
triangle(value1, type1, value2, type2);

Доступні типи аргументів (type1, type2):
* "leg"             — катет
* "hypotenuse"      — гіпотенуза
* "adjacent angle"  — прилеглий до катета кут
* "opposite angle"  — протилежний до катета кут

Правила використання:
1. Значення (value1, value2) мають бути числами більше 0.
2. Кути мають бути вказані в градусах і бути меншими за 90°.
3. У прямокутному трикутнику гіпотенуза завжди більша за катет.
4. Порядок введення значень та типів не має значення.

Приклад виклику:
triangle(7, "leg", 18, "hypotenuse");
======================================================== 
`)


function triangle(value1, type1, value2, type2){
    if (value1 <= 0 || value2 <= 0){
        console.log("Invalid input values!")
        return "Zero or negative input"
    }

    function toRadians(degrees){
        return degrees * Math.PI / 180
    }
    
    function toDegrees(radians){
        return radians * 180 / Math.PI
    }

    function printResults(a, b, c, alpha, beta){
        console.log(`a = ${a}`);
        console.log(`b = ${b}`);
        console.log(`c = ${c}`);
        console.log(`alpha = ${alpha}`);
        console.log(`beta = ${beta}`);
    }

    const values = [value1, value2]
    const types = [type1, type2]

    if (types[0] === "leg" && types[1] === "leg"){
        const a = values[0]
        const b = values[1]

        const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

        const alpha = toDegrees(Math.atan(a / b))

        const beta = toDegrees(Math.atan(b / a))

        printResults(a, b, c, alpha, beta)
        return "success"
    }

    if (types.includes("leg") && types.includes("hypotenuse")) {
        const a = values[types.indexOf("leg")]
        const c = values[types.indexOf("hypotenuse")]

        if (a >= c){
            return "A leg is bigger than or equal to hypotenuse!"
        }

        const b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2))

        const alpha = toDegrees(Math.atan(a / b))

        const beta = toDegrees(Math.atan(b / a))

        printResults(a, b, c, alpha, beta)
        return "success"
    }

    if (types.includes("leg") && types.includes("adjacent angle")) {
        const a = values[types.indexOf("leg")]
        const beta = values[types.indexOf("adjacent angle")]

        if (beta >= 90){
            return "An angle is bigger than or equal to 90 degrees!"
        }

        const c = a / Math.cos(toRadians(beta))

        const b = a * Math.tan(toRadians(beta))

        const alpha = 90 - beta

        printResults(a, b, c, alpha, beta)
        return "success"
    }

    if (types.includes("leg") && types.includes("opposite angle")) {
        const a = values[types.indexOf("leg")]
        const alpha = values[types.indexOf("opposite angle")]

        if (alpha >= 90){
            return "An angle is bigger than or equal to 90 degrees!"
        }

        const c = a / Math.sin(toRadians(alpha))

        const beta = 90 - alpha

        const b = a * Math.tan(toRadians(beta))

        printResults(a, b, c, alpha, beta)
        return "success"
    }

    if (types.includes("hypotenuse") && (types.includes("adjacent angle") || types.includes("opposite angle"))) {
        const c = values[types.indexOf("hypotenuse")]
        const angleIdx = types.findIndex(type => type.includes("angle"));
        const alpha = values[angleIdx];

        if (alpha >= 90){
            return "An angle is bigger than or equal to 90 degrees!"
        }

        const beta = 90 - alpha

        const a = c * Math.sin(toRadians(alpha))

        const b = c * Math.sin(toRadians(beta))
        printResults(a, b, c, alpha, beta)
        return "success"
    }
    console.log("Invalid input types!")
    console.log("Read the instruction and try again")
    return "failed"
}
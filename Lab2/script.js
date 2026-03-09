let car1 = new Object();
car1.color = "green";
car1.maxSpeed = 79;
car1.driver = new Object();
car1.driver.name = "Viktor Maksymiv";
car1.driver.category = "C";
car1.driver["personal limitations"] = "No driving at night";
car1.tuning = true;
car1["number of accidents"] = 0;

let car2 = {
    color: "yellow",
    maxSpeed: 64,
    driver: {
        name: "Viktor Maksymiv",
        category: "B",
        "personal limitations": null,
    },
    tuning: false,
    "number of accidents": 2,
};

car1.drive = function() {
    console.log("I am not driving at night");
};
car1.drive();

car2.drive = function() {
    console.log("I can drive anytime");
};
car2.drive();

function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
    this.trip = function() {
        if (!this.driver) {
            console.log("No driver assigned");
        } else {
            let message = "Driver " + this.driver.name + " ";
            if (this.driver.nightDriving) {
                message += "drives at night ";
            } else {
                message += "does not drive at night ";
            };
            message += "and has " + this.driver.experience + " years of experience";
            console.log(message);
        };
    };
};

Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience,
    };
};

let truck1 = new Truck("White", 5000, 80, "Volvo", "S100");
let truck2 = new Truck("Black", 4500, 85, "MAN", "R500");

truck1.AssignDriver("Viktor Maksymiv", true, 9);
truck2.AssignDriver("Viktor Maksymiv", false, 4);
truck1.trip();
truck2.trip();

class Square {
    constructor(a) {
        this.a = a;
    };
    static help() {
        console.log("Квадрат: Всі її сторони рівні та всі кути дорівнюють 90 градусам.");
    };
    length() {
        console.log(this.a * 4);
    };
    square() {
        console.log(this.a * this.a)
    };
    info() {
        console.log("Довжини сторін = ", this.a);
        console.log("Величини кутів = 90°");
        console.log("Суми довжин сторін = ", this.a * 4);
        console.log("Площа = ", this.a * this.a);
    };
};

class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    };
    static help() {
        console.log("Прямокутник: протилежні сторони рівні, кути 90 градусів.");
    };
    length() {
        console.log("Периметр: " + (2 * (this.a + this.b)));
    };
    square() {
        console.log("Площа: " + (this.a * this.b));
    };
    info() {
        console.log(`Довжини сторін = ${this.a}, ${this.b}`);
        console.log("Величини кутів = 90°");
        console.log(`Суми довжин сторін = ${this.a * 2 + this.b * 2}`);
        console.log("Площа = ", this.a * this.b);
    };
};

class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    };

    get sideA() { return this.a; };
    set sideA(val) { this.a = val; };
    get angleAlpha() { return this.alpha; };
    set angleAlpha(val) { this.alpha = val; };
    get angleBeta() { return this.beta; };
    set angleBeta(val) { this.beta = val; };

    static help() {
        console.log("Ромб: всі сторони рівні, протилежні кути рівні.");
    };
    length() {
        console.log("Периметр: " + (4 * this.a));
    };
    square() {
        const s = this.a ** 2 * Math.sin(this.alpha * Math.PI / 180);
        console.log("Площа: " + s.toFixed(2));
    };
    info() {
        const s = this.a ** 2 * Math.sin(this.alpha * Math.PI / 180);
        console.log(`Ромб: сторона ${this.a}, кути ${this.alpha}°, ${this.beta}°, периметр ${4 * this.a}, площа ${s.toFixed(2)}`);
    };
};

class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    };
    static help() {
        console.log("Паралелограм: протилежні сторони та кути рівні.");
    };

    length() {
        console.log("Периметр: " + (2 * (this.a + this.b)));
    };
    square() {
        const s = this.a * this.b * Math.sin(this.alpha * Math.PI / 180);
        console.log("Площа: " + s.toFixed(2));
    };
    info() {
        const s = this.a * this.b * Math.sin(this.alpha * Math.PI / 180);
        console.log(`Паралелограм: сторони ${this.a}, ${this.b}, кути ${this.alpha}°, ${this.beta}°, периметр ${2 * (this.a + this.b)}, площа ${s}`);
    };
};

Square.help();
Rectangle.help(); 
Rhombus.help();
Parallelogram.help();

const sq = new Square(10);
const rect = new Rectangle(10, 20);
const rhomb = new Rhombus(10, 60, 120);
const par = new Parallelogram(10, 25, 45, 135);

sq.info();
rect.info();
rhomb.info();
par.info();

function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c };
}

const t1 = Triangular();
const { a: a1, b: b1, c: c1 } = Triangular(6, 8, 10);
const t3 = Triangular(7, 24, 25);

console.log(t1, { a1, b1, c1 }, t3);

function PiMultiplier(factor) {
    return function() {
        return Math.PI * factor;
    };
}

const mul2 = PiMultiplier(2);
const mul2_3 = PiMultiplier(2 / 3);
const div2 = PiMultiplier(1 / 2);

console.log(mul2());
console.log(mul2_3());
console.log(div2());

function Painter(color) {
    return function(obj) {
        if (obj.type) {
            console.log(`Color: ${color}, Type: ${obj.type}`);
        } else {
            console.log("No 'type' property occurred!");
        }
    };
}

const PaintBlue = Painter("Blue");
const PaintRed = Painter("Red");
const PaintYellow = Painter("Yellow");

const objects = [
    { maxSpeed: 280, type: "Sportcar", color: "magenta" },
    { type: "Truck", "avg speed": 90, "load capacity": 2400 },
    { maxSpeed: 180, color: "purple", isCar: true }
];

objects.forEach(obj => {
    PaintBlue(obj);
    PaintRed(obj);
    PaintYellow(obj);
});
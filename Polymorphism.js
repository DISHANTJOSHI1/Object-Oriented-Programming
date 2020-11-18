var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Hero = /** @class */ (function () {
    function Hero() {
    }
    Hero.prototype.attach = function () {
        console.log('I am attacking.');
    };
    Hero.prototype.move = function () {
        console.log('I am Moving.');
    };
    Hero.prototype.eat = function () {
        console.log('I am eating.');
    };
    return Hero;
}());
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Knight.prototype.attach = function () {
        _super.prototype.attach.call(this);
        console.log('Protecting the king');
        this.shield -= 1;
    };
    return Knight;
}(Hero));
var Archer = /** @class */ (function (_super) {
    __extends(Archer, _super);
    function Archer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Archer.prototype.attach = function () {
        _super.prototype.attach.call(this);
        console.log('Firing an arroow');
        this.arrow -= 1;
    };
    return Archer;
}(Hero));
var Runner = /** @class */ (function (_super) {
    __extends(Runner, _super);
    function Runner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Runner.prototype.attach = function () {
        _super.prototype.attach.call(this);
        console.log('Kicking Enemies');
        this.steps -= 1;
    };
    return Runner;
}(Hero));
var knight = new Knight();
var archer = new Archer();
var runner = new Runner();
knight.attach();
archer.attach();
runner.attach();

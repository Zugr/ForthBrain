/**
 * Created by sussh on 24.01.17.
 */

console.log('main.js start');

const Matreshka = require('matreshka');

// сохраняем html байндер в переменную с коротким именем
const htmlBinder = Matreshka.binders.html;

console.log('Matreshka', Matreshka);

// создаём класс, который наследуется от Matreshka
class Application extends Matreshka {
	constructor() {
		super();
		this.bindSandbox('body');

		// связываем свойство x и текстовое поле
		this.bindNode('x', '.my-input');

		this.$('.my-output')[0].appendChild(this.parseBindings('<h3>Hello, {{x}}</h3>')[0]);

		// связываем свойство x и блок с классом my-output
		this.bindNode('$node', '.my-output', {
			initialize(self) {
				console.log(arguments);
				self.$nodes[0].childNodes.push(self.parseBindings('<h3>Hello, {{x}}</h3>'));
			}
		});

		// слушаем изменения свойства x
		this.on('change:x', () =>
			console.log(`x изменен на "${this.x}"`));

	}
}

const app = new Application();

console.log('main.js End')
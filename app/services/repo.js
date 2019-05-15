import Service from '@ember/service';

export default Service.extend({
	lastId: 0,
	data: null,
	findAll() {
		return this.data ||
			this.set('data', JSON.parse(window.localStorage.getItem('invoices') || '[]'));
	},

	add(attrs) {
		let invoice = Object.assign({ id: this.incrementProperty('lastId') }, attrs);
		this.data.pushObject(invoice);
		this.persist();
		return invoice;
	},

	delete(invoice) {
		this.data.removeObject(invoice);
		this.persist();
	},

	persist() {
		window.localStorage.setItem('invoices', JSON.stringify(this.data));
	}

});

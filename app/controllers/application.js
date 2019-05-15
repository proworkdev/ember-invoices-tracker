import { isBlank } from '@ember/utils';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';


export default Controller.extend({
	repo: service(),
	showPopupName: 'Add Invoice',
	actions: {
		createInvoice() {
			const date = this.get('dateInput');
			const amount = this.get('amountInput');
			const ID = this.get('IDInput');
			if(!isBlank(date) && !isBlank(amount)) {
				if(isBlank(ID)) {
					this.repo.add({
						invoiceID: "INV" + Math.floor(Math.random()*90000) + 10000,
						completed: false,
						date: date,
						amount: amount
					});	
				} else {					
				}
				$("#add-edit-invoice").modal('toggle');
			}
		},

		showPopup(name, {date = '', amount = '', id = ''}) {
			this.set('dateInput', date);
			this.set('amountInput', amount);
			this.set('IDInput', id);
			this.set('showPopupName', name);
			// eslint-disable-next-line ember/no-global-jquery
			$("#add-edit-invoice").modal('toggle');
		}
	}
});

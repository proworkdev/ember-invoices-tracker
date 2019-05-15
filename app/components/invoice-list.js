import { computed, set } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
	repo: service(),
	showPopupName: 'Add Invoice',

	actions: {
		showPopup(name, item) {
			this.showPopup(name, item);
		},

		removeInvoice(item) {
			this.repo.delete(item);
		}
	}
});

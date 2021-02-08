function ContactCard() {
	return {
		scope: {},
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ info.name }}',
				'<label>Email:</label>',
				'{{ info.email }}',
				'<label>Phone:</label>',
				'{{ info.phone }}',
				'<label>Username:</label>',
				'<span class="username">{{ info.username }}</span>',
			'</div>'
		].join(''),
		restrict: 'E',
		controller: function (){
			this.username = this.username.toLowerCase()
		},
		controllerAs: 'info',
		bindToController: {
			name: '=',
			email: '=',
			phone: '=',
			username: '='
		}
	};
}

angular
	.module('app')
	.directive('contactCard', ContactCard);
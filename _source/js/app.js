(function ( $ ) {

	"use strict";

	/**
	** Global Caching
	*/
	var	app;

	/**
	** App
	*/
	app = {

		init: function() {

			app.tagmanager();
			app.example();

		},

		tagmanager: function() {
			// tagmanager-click
			if( $('.tagmanager-click').length > 0 ){
				$('.tagmanager-click').each(function() {
					var tagmanagerTarget = $(this).data('tagmanager-target');
					var tagmanagerCategory = $(this).data('tagmanager-category');
					var tagmanagerAction = $(this).data('tagmanager-action');
					var tagmanagerLabel = $(this).data('tagmanager-label');

					if( tagmanagerTarget != '' && tagmanagerCategory != '' && tagmanagerAction != '' && tagmanagerLabel != '' ){
						if( $(this).find(tagmanagerTarget).length > 0 ){
							$(this).find(tagmanagerTarget).click(function(e){
								dataLayer.push({
									'event': 'gaEvent',
									'eventCategory' : tagmanagerCategory,
									'eventAction': tagmanagerAction,
									'eventLabel': tagmanagerLabel
								});
							});
						}
					}
				});
			}

			// tagmanager-ninjaform
			if( $('.nf-form-cont').length > 0 ){
				var activis_submitControllerEvent = Marionette.Object.extend( {
					initialize: function() {
						this.listenTo( Backbone.Radio.channel( 'forms' ), 'submit:response', this.actionSubmit );
					},

					actionSubmit: function( response ) {
						// Set the form ID here and fill data
						if( response[ 'data' ][ 'form_id' ] == '1' ){
							dataLayer.push({
								'event': 'gaEvent',
								'eventCategory' : 'Form',
								'eventAction': 'Submit',
								'eventLabel': 'Contact Me'
							});
						}
					},
				});
				new activis_submitControllerEvent();
			}
		},

		example: function() {
			//code
		}

	};

	/**
	** Document Ready
	*/
	$(document).ready(function() {
		app.init();
	});

})( jQuery );

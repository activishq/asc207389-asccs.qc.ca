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
			window.dataLayer = window.dataLayer || [];

			if( $('.nf-form-cont').length > 0 ){
				var activis_submitControllerEvent = Marionette.Object.extend( {
					initialize: function() {
						this.listenTo( Backbone.Radio.channel( 'forms' ), 'submit:response', this.actionSubmit );
					},

					actionSubmit: function( response ) {
						console.log(response);
						// Set the form ID here and fill data
						if( response[ 'data' ][ 'form_id' ] == '1' || response[ 'data' ][ 'form_id' ] == '1_1' ){
							dataLayer.push({
								'event': 'gaEvent',
								'eventCategory' : 'Form',
								'eventAction': 'Submit',
								'eventLabel': 'Formulaire de contact'
							});
						} else if( response[ 'data' ][ 'form_id' ] == '2' || response[ 'data' ][ 'form_id' ] == '2_1' ){
							dataLayer.push({
								'event': 'gaEvent',
								'eventCategory' : 'Form',
								'eventAction': 'Submit',
								'eventLabel': 'Location de salle'
							});
						} else if( response[ 'data' ][ 'form_id' ] == '3' || response[ 'data' ][ 'form_id' ] == '3_1' ){
							dataLayer.push({
								'event': 'gaEvent',
								'eventCategory' : 'Form',
								'eventAction': 'Submit',
								'eventLabel': 'Fêtes denfants'
							});
						} else if( response[ 'data' ][ 'form_id' ] == '4' || response[ 'data' ][ 'form_id' ] == '4_1' ){
							dataLayer.push({
								'event': 'gaEvent',
								'eventCategory' : 'Form',
								'eventAction': 'Submit',
								'eventLabel': 'Cours privés de natation'
							});
						} else if( response[ 'data' ][ 'form_id' ] == '5' || response[ 'data' ][ 'form_id' ] == '5_1' ){
							dataLayer.push({
								'event': 'gaEvent',
								'eventCategory' : 'Form',
								'eventAction': 'Submit',
								'eventLabel': 'Cours privés de musique'
							});
						} else if( response[ 'data' ][ 'form_id' ] == '6' || response[ 'data' ][ 'form_id' ] == '6_1' ){
							dataLayer.push({
								'event': 'gaEvent',
								'eventCategory' : 'Form',
								'eventAction': 'Submit',
								'eventLabel': 'Devenez Bénévole'
							});
						}
					},
				});
				new activis_submitControllerEvent();
			}

			// ElementorProForm

			if( $('.elementor-widget-form').length > 0 ){
				$( document ).on( 'submit_success', function( event, response ){
					if ( event.target.name == 'Infolettre' ) {
						dataLayer.push({
							'event': 'gaEvent',
							'eventCategory' : 'Form',
							'eventAction': 'Submit',
							'eventLabel': 'Infolettre'
						});
						console.log('Sending unicorns along your way, Google.');
					}
				});
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

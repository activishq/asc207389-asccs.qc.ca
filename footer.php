<?php
/**
 * The template for displaying the footer.
 *
 * Contains the body & html closing tags.
 *
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'footer' ) ) {
	get_template_part( 'template-parts/footer' );
}
?>

<?php wp_footer(); ?>

</body>
<?php 
	// Bloc pour les données structurées
	$author = get_the_author(); 
	$featured_img_url = get_the_post_thumbnail_url($post->ID, 'full'); 
	$date_modified = date("Y-m-d", get_post_modified_time());
	$extrait = get_field("extrait");
	$lien_page = get_permalink();
	$main_logo = get_home_url()."/wp-content/uploads/2019/06/structured_data_reduce_logo.png";
?> 
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "mainEntityOfPage": {
         "@type": "WebPage",
         "@id": "<?php echo $lien_page; ?>"
  },
  "headline": "<?php echo get_the_title(); ?>",
  "image": [
    "<?php echo $featured_img_url; ?>"
   ],
  "datePublished": "<?php echo get_the_date(); ?>",
  "dateModified": "<?php echo $date_modified; ?>",
  "author": {
    "@type": "Person",
    "name": "<?php echo $author ?>"
  },
   "publisher": {
    "@type": "Organization",
    "name": "Association sportive et communautaire du Centre Sud",
    "logo": {
      "@type": "ImageObject",
      "url": "<?php echo $main_logo; ?>"
    }
  },
  "description": "<?php echo $extrait; ?>"
}
</script>
<script type="text/javascript">
  jQuery( document ).ready( function() {
    new(Marionette.Object.extend( {

        initialize: function() {
            this.listenTo( Backbone.Radio.channel( 'pikaday' ), 'init', this.modifyDatepicker );
        },

        modifyDatepicker: function( dateObject, fieldModel ) {

            /*
         * This is how we modify the labels on our date picker calendar.
         */
             dateObject.pikaday._o.i18n = {
                previousMonth : 'Le mois avant',
                nextMonth     : 'Le mois après',
                months        : ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Décembre'],
                weekdays      : ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
                weekdaysShort : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
            };
            
           dateObject.set("minDate", new Date());
        }
    }));
});
</script>
</html>

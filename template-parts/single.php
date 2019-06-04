<?php
/**
 * The template for displaying singular post-types: posts, pages and user-defined custom post types.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

?>
<?php while ( have_posts() ) : the_post(); ?>

<main id="main" <?php post_class( 'site-main' ); ?> role="main">

	<div class="page-content">
		<?php the_content(); ?>
	</div>

</main>
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



<?php endwhile; ?>



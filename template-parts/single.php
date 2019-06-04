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

<?php 
	$author = get_the_author(); 
	$featured_img_url = get_the_post_thumbnail_url($post->ID, 'full'); 
	$extrait = get_field("extrait");
?> 

	<div class="page-content">
		<?php the_content(); ?>
	</div>

</main>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "<?php echo get_the_title(); ?>",
  "image": [
    "<?php echo $featured_img_url; ?>"
   ],
  "datePublished": "<?php echo get_the_date(); ?>",
  "dateModified": "<?php echo get_post_modified_time() ?>",
  "author": {
    "@type": "Person",
    "name": "<?php echo $author ?>"
  },
  "description": "<?php echo $extrait ?>"
}
</script>



<?php endwhile; ?>



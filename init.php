<?php 
/*
Plugin Name: Code Highlighter Block
*/

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
add_action( 'enqueue_block_editor_assets', 'gch_editor_assets' );
add_action( 'enqueue_block_assets', 'gch_editor_assets' );


function gch_editor_assets() {
	
	wp_enqueue_script(
		'gch-htm', 
		plugins_url( '/js/htm.js', __FILE__ )
	);

	wp_enqueue_script(
		'gch-highlight-js', // Handle.
		"https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.14.1/build/highlight.min.js"
	);
	
	wp_enqueue_script(
		'gch-highlighjs-styles', // Handle.
		plugins_url( '/js/highlightjs_styles.js', __FILE__ ), 
		array( 'gch-highlight-js' )
	);	

	wp_enqueue_script(
		'gch-js', // Handle.
		plugins_url( '/js/block.js', __FILE__ ), // Block.js: We register the block here.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'gch-htm' , 'gch-highlight-js' , 'gch-highlighjs-styles' ), // Dependencies, defined above.
		filemtime( plugin_dir_path( __FILE__ ) . '/js/block.js' ) // filemtime — Gets file modification time.
	);
	wp_enqueue_script(
		'gch-block-js', // Handle.
		plugins_url( '/js/script.js', __FILE__ ), 
		array( 'jquery') 
	);
	

	wp_enqueue_style(
		'gch-css', // Handle.
		plugins_url( '/css/style.css', __FILE__ ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		filemtime( plugin_dir_path( __FILE__ ) . '/css/style.css' ) // filemtime — Gets file modification time.
	);	

	wp_enqueue_style(
		'gch-highlight-css', // Handle.
		"https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.14.1/build/styles/default.min.css"
	);
} 


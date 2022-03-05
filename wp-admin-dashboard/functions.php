<?php

// Register Stylesheet
function hps_admin_styles() {
    wp_enqueue_style( 'hps-admin-styles', get_template_directory_uri() . '/assets/css/admin-styles.css' );
}
add_action( 'admin_enqueue_scripts', 'hps_admin_styles' );


// Remove default WP menu items
function hps_remove_admin_menu_items() {
    remove_menu_page('index.php');
    remove_menu_page('upload.php');                 // Media
    remove_menu_page('edit.php');                   // Posts
	remove_menu_page('edit.php?post_type=page');    // Pages
    remove_menu_page('edit-comments.php');          // Comments
    remove_menu_page('themes.php');                 // Themes
    remove_menu_page('plugins.php');                // Plugins
//  remove_menu_page('users.php');                  // Users
    remove_menu_page('tools.php');                  // Tools
//  remove_menu_page('options-general.php');        // Settings
	remove_menu_page('wp-mail-smtp');               // WP Mail
}
add_action( 'admin_menu', 'hps_remove_admin_menu_items', 999 );


// Remove default WP submenu items
function hps_remove_submenus() {
  global $submenu;
 
  // Settings Menu
  unset($submenu['options-general.php'][10]);       // General Options
  unset($submenu['options-general.php'][15]);       // Writing
  unset($submenu['options-general.php'][20]);       // Reading
  unset($submenu['options-general.php'][25]);       // Discussion
  unset($submenu['options-general.php'][30]);       // Media
  unset($submenu['options-general.php'][35]);       // Privacy
  unset($submenu['options-general.php'][40]);       // Permalinks
  unset($submenu['options-general.php'][45]);       // Misc
}
add_action('admin_menu', 'hps_remove_submenus');


// Remove submenu items of 'New' button in Admin Bar 
function hps_remove_admin_bar_links() {
    global $wp_admin_bar;
    $wp_admin_bar->remove_menu('wp-logo');          // Wordpress logo
    $wp_admin_bar->remove_menu('about');            // about Wordpress link
    $wp_admin_bar->remove_menu('wporg');            // Wordpress.org link
    $wp_admin_bar->remove_menu('documentation');    // Wordpress documentation link
    $wp_admin_bar->remove_menu('support-forums');   // Support forums link
    $wp_admin_bar->remove_menu('feedback');         // Feedback link
    $wp_admin_bar->remove_menu('site-name');        // Site name menu
    $wp_admin_bar->remove_menu('view-site');        // View site link
    $wp_admin_bar->remove_menu('updates');          // Updates link
    $wp_admin_bar->remove_menu('comments');         // Comments link
    $wp_admin_bar->remove_menu('new-content');      // Content link
    $wp_admin_bar->remove_menu('archive');          // Archive
//  $wp_admin_bar->remove_menu('my-account');       // User details tab
}
add_action( 'wp_before_admin_bar_render', 'hps_remove_admin_bar_links' );


// Add custom link to Admin Bar
function hps_add_link_to_admin_bar($admin_bar) {
    $url = esc_attr(get_option('redirect-url', ''));

    $args = array(
        'id' => '',
        'title' => $url, 
        'href' => $url
    );
    $admin_bar->add_node($args);
}
add_action('admin_bar_menu', 'hps_add_link_to_admin_bar', 999);


// Replace default footer text
function hps_replace_footer_text() {
    _e('<span>Developed by <a href="https://peter-stuhlmann-webentwicklung.de" target="_blank">Peter R. Stuhlmann</a></span>', 'wp-redirect');
}
add_filter('admin_footer_text', 'hps_replace_footer_text');


// Theme settings page
function hps_theme_settings() {
	add_submenu_page(
		'options-general.php',                      // parent slug
		__('WP Redirect (Headless CMS) Settings', 'wp-redirect'), // page title
		__('Theme settings', 'wp-redirect'),        // menu title
		'manage_options',                           // capability
		'wp-redirect-theme-settings',               // menu slug
		'hps_theme_settings_html'                   // callback function to be called when rendering the page
	);
	add_action('admin_init', 'hps_settings_init');
}
add_action('admin_menu', 'hps_theme_settings');


function hps_settings_init() {
	add_settings_section(
		'hps-settings-section',                     // id
		'',                                         // title
		'',                                         // callback function
		'wp-redirect-theme-settings'                // page
    );
    
    // option checkbox
    register_setting(
		'wp-redirect-theme-settings',               // option group
        'hps-option-checkbox',                      // option name
        ''                                          // args
    );
    add_settings_field(
		'hps-option-checkbox',                      // id
		__('Your homepage displays', 'wp-redirect'),// title
		'hps_form_option_checkbox',                 // callback function
		'wp-redirect-theme-settings',               // page
        'hps-settings-section',                     // section
        ''                                          // args
    );

    // redirect url section heading
	add_settings_field(
		'redirect-url-section-heading',             // id
		__('<hr /><h2>Redirect URL</h2>', 'wp-redirect'), // title
		'redirect_url_section_heading',             // callback function
		'wp-redirect-theme-settings',               // page
        'hps-settings-section',                     // section
        ''                                          // args
    );

    // redirect url
    register_setting(
		'wp-redirect-theme-settings',               // option group
        'redirect-url',                             // option name
        ''                                          // args
    );
	add_settings_field(
		'redirect-url',                             // id
		__('Redirect URL', 'wp-redirect'),          // title
		'hps_form_redirect_url',                    // callback function
		'wp-redirect-theme-settings',               // page
        'hps-settings-section',                     // section
        ''                                          // args
    );

    // index page section heading
	add_settings_field(
		'indexpage-section-heading',                // id
		__('<hr /><h2>Index page settings</h2>', 'wp-redirect'), // title
		'indexpage_section_heading',                // callback function
		'wp-redirect-theme-settings',               // page
        'hps-settings-section',                     // section
        ''                                          // args
    );

    // index page heading
    register_setting(
		'wp-redirect-theme-settings',               // option group
        'indexpage-heading',                        // option name
        ''                                          // args
    );
    add_settings_field(
		'indexpage-heading',                        // id
		__('Index page heading', 'wp-redirect'),    // title
		'hps_form_indexpage_heading',               // callback function
		'wp-redirect-theme-settings',               // page
        'hps-settings-section',                     // section
        ''                                          // args
    );
    
    // index page content
    register_setting(
		'wp-redirect-theme-settings',               // option group
        'indexpage-content',                        // option name
        ''                                          // args
    );
    add_settings_field(
		'indexpage-content',                        // id
		__('Index page content', 'wp-redirect'),    // title
		'hps_form_indexpage_content',               // callback function
		'wp-redirect-theme-settings',               // page
        'hps-settings-section',                     // section
        ''                                          // args
    );
    
    // index page footer
    register_setting(
		'wp-redirect-theme-settings',               // option group
        'indexpage-footer',                         // option name
        ''                                          // args
    );
    add_settings_field(
		'indexpage-footer',                         // id
		__('Index page footer', 'wp-redirect'),     // title
		'hps_form_indexpage_footer',                // callback function
		'wp-redirect-theme-settings',               // page
        'hps-settings-section',                     // section
        ''                                          // args
	);
}

function hps_form_option_checkbox() {
    ?>
    <input type="radio" name="hps-option-checkbox" value="redirect" <?php checked( "redirect", get_option( 'hps-option-checkbox' ) ); ?> /> Redirect to <?php echo esc_attr(get_option('redirect-url', '')); ?><br />
    <input type="radio" name="hps-option-checkbox" value="indexpage" <?php checked( "indexpage", get_option( 'hps-option-checkbox' ) ); ?> /> Index page
    <?php 
}

function hps_form_redirect_url() {
    $url = esc_attr(get_option('redirect-url', '')); ?>
    <input class="hps-input" type="url" name="redirect-url" value="<?php echo $url; ?>" />
    <?php
}

function hps_form_indexpage_heading() {
    $textpageHeading = esc_attr(get_option('indexpage-heading', '')); ?>
    <input class="hps-input" type="text" name="indexpage-heading" value="<?php echo $textpageHeading; ?>" />
    <?php
}

function hps_form_indexpage_content() {
    $textpageContent = esc_attr(get_option('indexpage-content', '')); ?>
    <textarea class="hps-textarea" name="indexpage-content"><?php echo $textpageContent; ?></textarea>
    <?php
}

function hps_form_indexpage_footer() {
    $textpageFooter = esc_attr(get_option('indexpage-footer', '')); ?>
    <input class="hps-input" type="text" name="indexpage-footer" value="<?php echo $textpageFooter; ?>" />
    <?php
}


// Donation section
function hps_theme_settings_html() {
    ?>
    <div class="wrap">
        <h1><?php _e('WP Redirect (Headless CMS) Settings', 'wp-redirect'); ?></h1>
        <form method="POST" action="options.php">
            <?php settings_fields('wp-redirect-theme-settings');?>
            <?php do_settings_sections('wp-redirect-theme-settings')?>
            <?php submit_button(
                null,                               // text
                'primary',                          // type
                'submit',                           // name
                true,                               // wrap
                null                                // other attributes
            )?>
        </form>
        <p><em><?php _e('Support the development of this and other web projects with <a target="_blank" href="https://paypal.me/PRStuhlmann/2">your donation</a>.', 'wp-redirect'); ?></em></p>
    </div>
    <?php
}
 

// Custom Post Type: Events (Aktuelles)
function hps_create_posttype_events() {
    register_post_type( 'events',
        array(
            'labels' => array(
                'name' => __( 'Events' ),
                'singular_name' => __( 'Event' )
            ),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'events'),
            'show_in_rest' => true,
        )
    );
}
add_action( 'init', 'hps_create_posttype_events' );


// Custom Post Type: InfoText in form 'Betreuungsanfrage'
function hps_create_posttype_infotext() {
    register_post_type( 'info-text',
        array(
            'labels' => array(
                'name' => __( 'Info Text' ),
                'singular_name' => __( 'Info Text' )
            ),
            'show_in_rest' => true,
			'public' => false,
			'publicly_queryable' => false,
			'show_ui' => true,
			'exclude_from_search' => true,
			'show_in_nav_menus' => false,
			'has_archive' => false,       
			'rewrite' => false,
        )
    );
}
add_action( 'init', 'hps_create_posttype_infotext' );


// Remove editor (only title can be entered)
function hps_remove_editor_from_post_type() {
  remove_post_type_support( 'info-text', 'editor' );
}
add_action('init', 'hps_remove_editor_from_post_type');


// Change Input field placeholder for info-text
function hps_custom_enter_title( $input ) {
    if ( 'info-text' === get_post_type() ) {
        return __( 'Add the info text here', 'wp-redirect' );
    }
    return $input;
}
add_filter( 'enter_title_here', 'hps_custom_enter_title' );


// Translation
function hps_theme_setup(){
    load_theme_textdomain('wp-redirect', get_template_directory() . '/assets/languages');
}
add_action('after_setup_theme', 'hps_theme_setup');
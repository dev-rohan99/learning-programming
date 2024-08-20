<?php

    /**
     * Plugin Name: Aiqro Scroll Top
     * Plugin URI: https://wordpress.org/plugins/aiqro-scroll-top
     * Description: AIQRO Scroll Top is a lightweight and user-friendly WordPress plugin designed to enhance your website’s user experience by adding a smooth and customizable scroll-to-top button. With AIQRO Scroll Top, visitors can easily navigate back to the top of the page with a single click. The plugin is highly flexible, allowing you to adjust button styles, positions, and animations to match your site’s design seamlessly.
     * Version: 1.0.0
     * Requires at least: 4.4.1
     * Requires PHP: 7.2
     * Author: Rohan Mostofa Abir
     * Author URI: https://rohanmostofa.vercel.app
     * License: GPLv2 or later
     * License URI: https://www.gnu.org/licenses/gpl-2.0.html
     * Update URI: https://github.com/dev-rohan99
     * Text Domain: aiqroscrolltotop
     */

    //  including css

    function aiqroscrolltotop_enqueue_style(){
        wp_enqueue_style("aiqroscrolltotop_style", plugins_url("assets/css/aiqroscrolltotop-style.css", __FILE__));
    }

    add_action("wp_enqueue_scripts", "aiqroscrolltotop_enqueue_style");

    // including javascript
    function aiqroscrolltotop_enqueue_scripts(){
        wp_enqueue_script("jquery");
        wp_enqueue_script("aiqroscrolltotop-plugin", plugins_url("assets/js/aiqroscrolltotop-plugin.js", __FILE__), array(), "1.0.0", "true");
    }
    add_action("wp_enqueue_scripts", "aiqroscrolltotop_enqueue_scripts");

    // jquery plugin setting activation
    function aiqroscrolltotop_scroll_scripts(){
        /* ?>
            <script>
                jQuery(document).ready(function(){
                    $.scrollUp();
                });
            </script>
        <?php */

        echo '
            <button id="scrollUp" class="scroll-to-top">

                <svg class="icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve">
                    <g id="XMLID_109_">
                        <path id="XMLID_110_" d="M25.607,190.607L164.997,51.214l139.396,139.393C307.323,193.536,311.161,195,315,195
                            c3.839,0,7.678-1.464,10.606-4.394c5.858-5.858,5.858-15.355,0-21.213l-150.003-150C172.79,16.58,168.976,15,164.997,15
                            s-7.794,1.581-10.607,4.394l-149.997,150c-5.858,5.858-5.858,15.355,0,21.213C10.251,196.465,19.749,196.465,25.607,190.607z"/>
                        <path id="XMLID_138_" d="M175.603,139.393c-2.813-2.813-6.628-4.393-10.606-4.393c-3.979,0-7.794,1.581-10.607,4.394l-149.996,150
                            c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213-0.001l139.39-139.393l139.397,139.394
                            C307.323,313.536,311.161,315,315,315c3.839,0,7.678-1.464,10.606-4.394c5.858-5.858,5.858-15.355,0-21.213L175.603,139.393z"/>
                    </g>
                </svg>
            </button>
        ';
    };

    add_action("wp_footer", "aiqroscrolltotop_scroll_scripts");

    // plugin customization
    add_action("customize_register", "aiqroscrolltotop_scroll_customize");
    function aiqroscrolltotop_scroll_customize($wp_customize){
        // plugin color customization
        $wp_customize->add_section("aiqroscrolltotop_scroll_top_section", array(
            "title" => __("Scroll to top", "aiqroscrolltotop"),
            "description" => "Simple scroll to top plugin will help you to enable back to top button to your wordpress website!",
        ));

        $wp_customize->add_setting("aiqroscrolltotop_default_color", array(
            "default" => "#2d60c3",
        ));

        $wp_customize->add_control(new WP_Customize_Color_Control(
            $wp_customize,
            "aiqroscrolltotop_default_color", 
            array(
                "label" => __("Background Color", "aiqroscrolltotop"),
                "section" => "aiqroscrolltotop_scroll_top_section",
                "type" => "color",
            )
        ));
    };


?>
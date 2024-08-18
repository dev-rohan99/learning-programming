<?php

    /**
     * My theme functions
    */

    // Theme title
    add_theme_support("title-tag");

    // declare theme jquery and css files
    function aiqro_css_js_file_declare(){
        wp_enqueue_style("aiqro-style", get_stylesheet_uri());
        wp_register_style("aiqro-bootstrap", get_template_directory_uri()."/assets/css/bootstrap.min.css", array(), "4.4.1", "all");
        wp_register_style("aiqro-custom", get_template_directory_uri()."/assets/css/custom.css", array(), "1.1.0", "all");
        wp_enqueue_style("aiqro-bootstrap");
        wp_enqueue_style("aiqro-custom");

        wp_enqueue_script("jquery");
        wp_enqueue_script("aiqro-bootstrap", get_template_directory_uri()."/assets/js/bootstrap.min.css", array(), "4.4.0", "true");
        wp_enqueue_script("aiqro-main", get_template_directory_uri()."/assets/js/main.js", array(), "1.0.0", "true");
    }

    add_action("wp_enqueue_scripts", "aiqro_css_js_file_declare");

    // theme function

    function aiqro_customization_register($wp_customize){
        $wp_customize->add_section("aiqro_header_area", array(
            "title" => __("Header Area", "rohanmostofa"),
            "description" => "If you update your header area you can do it any time! Let's go!"
        ));

        $wp_customize->add_setting("aiqro_logo", array(
            "default" => get_bloginfo("template_directory") . "/assets/img/logo.png",
        ));

        $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, "aiqro_logo", array(
            "label" => "Logo Upload",
            "setting" => "aiqro_logo",
            "section" => "aiqro_header_area",
        )));
    }

    add_action("customize_register", "aiqro_customization_register");


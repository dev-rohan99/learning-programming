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

        // header area function
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

        // menu position option
        $wp_customize->add_section("aiqro_menu_option", array(
            "title" => __("Menu Position Option", "rohanmostofa"),
            "description" => "If you update your header position you can do it any time! Let's go!"
        ));

        $wp_customize->add_setting("aiqro_menu_default", array(
            "default" => "right_menu"
        ));

        $wp_customize->add_control("aiqro_menu_default", array(
            "label" => "Menu Position",
            "description" => "Select you menu position",
            "setting" => "aiqro_menu_default",
            "section" => "aiqro_menu_option",
            "type" => "radio",
            "choices" => array(
                "center_menu" => "Center Menu",
                "right_menu" => "Right Menu",
                "left_menu" => "Left Menu",
            ),
        ));

    };

    add_action("customize_register", "aiqro_customization_register");

    // google font enqueue
    function aiqro_google_font_enqueue(){
        wp_enqueue_style("aiqro_google_font", "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Playwrite+HR:wght@100..400&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap", false);

        wp_enqueue_style("aiqro_google_font", "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Playwrite+HR:wght@100..400&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap", false);
    };

    add_action("wp_enqueue_scripts", "aiqro_google_font_enqueue");

    // register nav menu
    register_nav_menu("primary", __("Primary Menu", "rohanmostofa"));




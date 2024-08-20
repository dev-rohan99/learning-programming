<?php 
/* 
* This template for display header
*/
?>


<!DOCTYPE html>
<html lang="<?php language_attributes();?>" class="no-js">
<head>
    <meta charset="<?php bloginfo("charset")?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head();?>
</head>
<body <?php body_class();?>>
    


    <div id="header_area" class="shadow-sm <?php echo get_theme_mod('aiqro_menu_default'); ?>">
        <div class="container py-1 d-flex justify-content-between align-items-center mt-1">
            <span>Build Beautiful, Feature-Rich Websites with BeBuilder</span>
            <div>
                <span class="mr-3"><i class="fas fa-phone-alt"></i> +61 (0) 3 8376 6284</span>
                <span><i class="fas fa-map-marker-alt"></i> 2 Elizabeth St, Melbourne</span>
            </div>
        </div>

        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-md-2 col-6 p-1">
                    <a href="<?php echo home_url();?>" class="p-0">
                        <img src="<?php echo get_theme_mod("aiqro_logo");?>" alt="Logo">
                    </a>
                </div>

                <div class="col-md-10 p-0 align-items-center d-flex">
                    <?php wp_nav_menu(array("theme_location" => "primary", "menu_id" => "menuId"));?>
                    
                    <a href="#" class="btn btn-outline-danger py-2 ml-3">Download</a>
                </div>
            </div>
        </div>
    </div>


    <section id="content_area">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <?php the_content();?>
                </div>
            </div>
        </div>
    </section>



    <?php wp_footer();?>
</body>
</html>

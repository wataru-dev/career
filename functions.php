<?php

function asset($type){
    $path = get_template_directory_uri()."/assets/".$type;
    return $path;
}

?>
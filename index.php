<?php include_once("./html/index.html");
 use Rack::Static,
 :urls => ["/images", "/js", "/css","/html"],
 :root => "public"

static_page_mappings = {
 '/'             => 'public',
 '/about.html' => 'public/html/about.html'
}

static_page_mappings.each do |req, file|
 map req do 
   run Proc.new { |env|
     [
       200, 
       {
         'Content-Type'  => 'text/html', 
         'Cache-Control' => 'public, max-age=6400',
       },
       File.open(file, File::RDONLY)
     ]
   }
 end
end
 
 ?>
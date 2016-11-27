
$( document ).ready(function() {
    
    $.ajax({    
        
        // JSONP request
        url: "http://www.quiksilver.fr/s/QS-FR/dw/shop/v15_6/categories/root?levels=2&client_id=a76723ac-440f-4814-bd34-d492a140d78e",
        jsonp: "callback",
        dataType: "jsonp",
        data: {
            format: "json"
        },

        // Work with the response
        success: function( response ) {

            // Create and fill one array per category
            var numberOfCategories = Object.keys(response.categories).length;
            for(var i = 0; i< numberOfCategories;  i++) { 

                if(response.categories[i].c_showInMenu==1) {

                    // Create an empty table to be filled
                    var $table = $("<table></table>");

                    // Add category name as header
                    var $header = $("<th></th>").html(response.categories[i].name);
                    $table.append($header);

                    // Add subcategories names as rows
                    var $subCategories=response.categories[i].categories
                    if($subCategories != null) {
                        var numberOfSubCategories=Object.keys($subCategories).length;
                        for(var j=0; j<numberOfSubCategories; j++) {
                            var $line = $("<tr></tr>").html($subCategories[j].name);
                            $table.append($line);
                        }
                    }   
                    $table.appendTo(document.body);            
                }
            }

            // Wrap all rows in one div for each table
            var $allTables = $('table');
            for(var i=0; i<$allTables.length; i++) {
                var $currentTable = $allTables[i];
                $($currentTable.rows).wrapAll( "<div class=wrappedRows></div>" );
            }

            // Hide subcategories according to the screen size
            $(window).resize(function(){
                if($(window).width()>=640) 
                {
                    $('.wrappedRows').css('display','block');
                }
                else
                {
                    $('.wrappedRows').css('display','none');
                }
            });

            // Slide down on click
            $('table').click(function() {
                if(this.children[1]!=null && $(window).width() < 640){
                    $(this.children[1]).slideToggle();
                }
            });
        }
    });
});
    

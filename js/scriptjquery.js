
    $(function(){
        var $textEntered;
        var $container = $('#container');
        var $clock = $('.clock');
        var $list = $('#list');
        var $button = $('#create');
        var date = new Date();
        var $btnDelete = $('#delete');
        var $removable = $('#list');
        var $numberItens = $('.novoElTarefa');
        var quantity = 0;
        var $alertDiv = $('#error');
        
        $clock.prepend(date.toLocaleDateString());
        $clock.hide().slideDown(1000);
        
        $btnDelete.on('click', function(){
            // var $divToDelete = $removable.find('div');
            if(confirm('Are you sure you want to delete ALL?')){
            var $divToDelete = $('#list .newDiv');
            $divToDelete.slideUp();   
            $divToDelete.remove();
             quantity=0;
             $alertDiv.remove();
            }
            
      });
        $button.on('mouseover', function(){
            $(this).animate(
            {
                // height: '+=5',
                width: '+=10'
            }, 200);
        });
        $button.on('mouseout', function(){
            $(this).animate(
            {
                // height: '-=5',
                width: '-=10'
            },200);
            });
        

        $(':input:first').on('keyup', function(){
            $textEntered= $(':input:first').val();
        });
        
        $($button).on('click', function(){
            quantity++;            
            console.log(quantity);            
            if(quantity<6){                
                var $newDiv = $('<div class="newDiv">');
                var $newEl = $('<li class="novoElTarefa">');
                var $newBtn = $('<button class="btnFinalizar">');
                $newBtn.prepend('DONE');
                $newEl.append($textEntered);
                $newDiv.append($newEl);
                $newDiv.append($newBtn);
                $list.append($newDiv);
                $newDiv.hide().fadeIn();
                $('<div></div>').attr('class', 'newDiv').insertBefore("$button");
            }
            else{
                 $alertDiv.html('Please, remove one to-do<br>before inserting more!')
                $list.after($alertDiv);
            }
             });
        
        $($list).on('click', '.btnFinalizar', function(){
            console.log($(this).prev());
            //This line gives functionality to the button when the user finishes its to do:
            $(this).prev().addClass('finished');
            var $itemText = $textEntered;
            $(this).prev().prepend('<em>');

        });
        });

    $(function(){
        var $textEntered;
        const $container = $('#container');
        var $clock = $('.clock');
        var $list = $('#list');
        const $button = $('#create');
        var date = new Date();
        var $btnDelete = $('#delete');
        const $removable = $('#list');
        var $numberItens = $('.novoElTarefa');
        var quantity = 0;
        const $alertDiv = $('#error');
        const $quantityTasks = $('#quantity');
        var quantity = 0;
        $quantityTasks.text('0');
        $clock.prepend(date.toLocaleDateString());
        $clock.hide().slideDown(1000);
        
        // Animations on CREATE button
        $button.on('mouseover', function(){
            $(this).animate(
            {
                width: '+=10'
            }, 200);
        });

        $button.on('mouseout', function(){
            $(this).animate(
            {
                width: '-=10'
            },200);
            });   
        // End of animations section     

        $(':input:first').on('keyup', function(){
            $textEntered= $(':input:first').val();
        });
        
        // This section creates new elements when the user clicks the create button
        $($button).on('click', function(){
            if(quantity<5){            
                quantity++;
                $quantityTasks.html('<em>' + quantity + '</em>');      
                var $newDiv = $('<div class="newDiv">');
                var $newEl = $('<li class="novoElTarefa">');
                var $newDivBtns = $('<div class="taskBtns">');
                var $newBtn = $('<button class="btnFinalizar">');
                var $newBtnDelete = $('<button class="btnDeleteTask">');
                $newBtn.text('DONE');
                $newBtnDelete.text('DELETE');                
                $newDivBtns.append($newBtn);
                $newDivBtns.append($newBtnDelete);
                $newEl.append($textEntered);                
                $newDiv.append($newEl);
                $newDiv.append($newDivBtns);
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
            //This line gives functionality to the button when the user finishes its to do:
            $(this).parent().parent().addClass('finished');
        });

        $($list).on('click', '.btnDeleteTask', function(){
             $(this).parent().parent().remove();
             quantity--;
             $quantityTasks.html('<em>' + quantity + '</em>');
             if($alertDiv){
             $alertDiv.remove();
             }
        });

        $btnDelete.on('click', function(){
            if(confirm('Are you sure you want to delete ALL?')){
            var $divToDelete = $('#list .newDiv');
            $divToDelete.slideUp();   
            $divToDelete.remove();
             quantity=0;
             $quantityTasks.html('<em>' + quantity + '</em>');      
             $alertDiv.remove();
            }            
      });
        });

    $(function(){
        var $textEntered;
        var $container = $('#container');
        var $list = $('#list');
        // var $inputUser = $(':input:first');
        var $button = $('#create');
        $(':input:first').on('keyup', function(){
            $textEntered= $(':input:first').val();
            console.log("okay");
        });
        $($button).on('click', function(){
            var $newDiv = $('<div class="newDiv">');
            var $newEl = $('<li class="novoElTarefa">');
            var $newBtn = $('<button class="btnFinalizar">');
            $newBtn.prepend('DONE');
            $newEl.append($textEntered);
            $newDiv.append($newEl);
            $newDiv.append($newBtn);
            $list.append($newDiv);
            console.log("kay");
            $('<div></div>').attr('class', 'newDiv').insertBefore("$button");
        });
        // $(':button .btnFinalizar').on('click', function(){
        //     console.log('worked');
        //     $('$textEntered').addClass('done');
        // })
        $($list).on('click', '.btnFinalizar', function(){
            // These two first lines are only to check if the dynamical button was correct selected!!
            console.log('you clicked me!');
            console.log($(this).prev());
            //This line gives functionality to the button when the user finishes its to do:
            $(this).prev().addClass('finished');
            var $itemText = $textEntered;
            $(this).prev().append(' - Finished! ');

        });
        });
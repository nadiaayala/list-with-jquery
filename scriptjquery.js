
    $(function(){
        var $textEntered;
        var $container = $('#container');
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
            $container.append($newDiv);
            console.log("kay");
            $('<div></div>').attr('class', 'newDiv').insertBefore("$button");
        });
        // $(':button .btnFinalizar').on('click', function(){
        //     console.log('worked');
        //     $('$textEntered').addClass('done');
        // })
        });
$(document).ready(function () {
    // Lisää tehtävä
    $('#addTask').click(function () {
        const task = $('#taskInput').val().trim();

        if (task === '') {
            $('#errorMessage')
                .text('Tehtävä ei voi olla tyhjä!')
                .fadeIn()
                .delay(2000)
                .fadeOut();
            return;
        }

        const taskItem = $('<li></li>').addClass('task-item');

        // Tehtävän teksti
        const taskText = $('<span></span>').text(task).addClass('task-text');

        // Nappikontti
        const buttonContainer = $('<div></div>').addClass('button-container');

         // Tehty-nappi
         const doneButton = $('<button></button>')
         .text('Tehty')
         .addClass('done-btn')
         .click(function () {
             $(this).parent().parent().toggleClass('completed');
         });
        
        // Poista-nappi
        const deleteButton = $('<button></button>')
            .text('Poista')
            .addClass('delete-btn')
            .click(function () {
                $(this).parent().parent().fadeOut(300, function () {
                    $(this).remove();
                });
            });

       
            

        // Lisää napit nappikonttiin
        buttonContainer.append(doneButton, deleteButton);

        // Lisää elementit tehtävälistaan
        taskItem.append(taskText, buttonContainer).appendTo('#taskList');
        $('#taskInput').val('');
    });

    // Enter-näppäin lisää tehtävän
    $('#taskInput').keypress(function (e) {
        if (e.which === 13) {
            $('#addTask').click();
        }
    });
});
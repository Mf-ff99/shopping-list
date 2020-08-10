'use strict'
//this was my first attempt at writing the function. I decided to build a factory function instead.
// $(function () {
//     $('#js-shopping-list-form').submit(function (event) {
//         event.preventDefault();
//         // $('.shopping-list-entry').empty();

//         const newEntry = $(event.currentTarget).find('input[name="shopping-list-entry"]').val();

//         //make newEntry append an object to the ul
//         // console.log(newEntry);

//         $('.shopping-list').append(`<li class="item"><span class="shopping-item">${newEntry}</span>
//         <div class="shopping-item-controls">
//           <button class="shopping-item-toggle">
//             <span class="button-label">check</span>
//           </button>
//           <button class="shopping-item-delete">
//             <span class="button-label">delete</span>
//           </button>
//         </div></li>`)

//     }
//     );
//     //find and remove the li parent of the clicked remove button
//     //add the class shopping-item__checked to li shopping-item text

//     $('.shopping-item-delete').on('click', function (event) {
//         console.log('delete button pressed')

//         this.remove();
//     });

//     $('.shopping-item-toggle').on('click', function (e) {
//         console.log('button pressed')
//         $('.shopping-item').addClass($('shopping-item__checked'));
//     })

// });

const list = $('ul');

function addToList() {
    $('#js-shopping-list-form').submit(function (e) {
        e.preventDefault();
        let listItemName = $(e.currentTarget).find('input[name="shopping-list-entry"]').val();
        if (listItemName) {
            console.log(listItemName)
            let newItem = `<li class="item"><span class="shopping-item">${listItemName}</span>
                    <div class="shopping-item-controls">
                      <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                      </button>
                      <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                      </button>
                    </div>
                    </li>`;

                $('.shopping-list').append(newItem);
                $('#shopping-list-entry').val('');
        }
    });
}

function deleteListItem() {
    $('.shopping-list').on('click', '.shopping-item-delete', function(e) {
        //console.log('delete button clicked')
        e.preventDefault();
        if (e.target.closest('button').className === 'shopping-item-delete') {
            console.log(e.target)
            e.target.closest('li').remove();
        }
    })
}

function checkItem() {
    $('.container').on('click', '.shopping-item-toggle', function(e) {
        console.log(e.target)
        e.preventDefault();
        let clicked = e.target.closest('li');
        $(clicked.firstChild).toggleClass('shopping-item__checked')
        
    })
}

//First attempt at checking an item, i realized I was not nesting them correctly according to parent

// function checkItem() {
//     $('.shopping-list').on('click', '.shopping-item-toggle', function(e) {
//         e.preventDefault();
//         let clicked = e.target.closest('li');
        
//         if (e.target.closest('button').className === 'shopping-item-toggle') {
//             $(clicked.firstChild.nextSibling).toggleClass('shopping-item__checked')
//         }
//     })
// }

$(addToList) 
$(checkItem)
$(deleteListItem)

const checkboxes = document.querySelectorAll( '.filters input[type="checkbox"]' );
const productCards = document.querySelectorAll( '.product-card' );

// Function to show/hide products based on selected categories
function filterProducts () {
    const selectedCategories = Array.from( checkboxes )
        .filter( checkbox => checkbox.checked )
        .map( checkbox => checkbox.value.toLowerCase() );

    productCards.forEach( card => {
        const category = card.dataset.category.toLowerCase();
        if ( selectedCategories.length === 0 || selectedCategories.includes( category ) ) {
            card.classList.remove( 'hidden' ); // Show product card
        } else {
            card.classList.add( 'hidden' );// Hide product card
        }
    } );
}

// Attach event listeners to checkboxes
checkboxes.forEach( checkbox => {

    checkbox.addEventListener( 'change', () => {
        filterProducts();
    } );
} );

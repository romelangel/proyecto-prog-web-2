document.querySelectorAll('.btn-comprar').forEach(button => {
    button.addEventListener('click', (event) => {
        const gameTitle = event.target.getAttribute('data-title');
        const gamePrice = event.target.getAttribute('data-price');
        document.getElementById('modalGameTitle').innerText = gameTitle;
        document.getElementById('modalGamePrice').innerHTML = gamePrice;
    });
});

document.getElementById('confirmPurchase').addEventListener('click', () => {
    const paymentMethod = document.getElementById('paymentMethod').value;
    alert(`Compra confirmada con método de pago: ${paymentMethod}. ¡Gracias por comprar en nuestra página, disfruta de tu videojuego! :D`);
    $('#purchaseModal').modal('hide');
});
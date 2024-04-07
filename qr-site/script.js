function generateQR() {
    // Clear the previous QR code
    var qrOutput = document.getElementById('qrOutput');
    qrOutput.innerHTML = '';

    // Create a new QR code
    var qrText = document.getElementById('qrInput').value;
    if (qrText) {
        var qrCode = new QRious({
            size: 250,
            value: qrText
        });

        // Create an image to display the QR code
        var img = document.createElement('img');
        img.src = qrCode.toDataURL();
        qrOutput.appendChild(img);
    } else {
        qrOutput.innerHTML = 'Please enter text or a URL to generate a QR code.';
    }
}

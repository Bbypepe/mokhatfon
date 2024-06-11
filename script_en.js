
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const platformInput = document.getElementById('platformInput').value.trim();
    const searchType = document.getElementById('searchType').value;
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    
    if (!platformInput) {
        alert('Please enter the platform URL!');
        return;
    }
    
    if (!file) {
        alert('Please select a file!');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    const apiKey = 'YeQR8euN2UerJun9lYRI';  // Private API Key
    const uploadUrl = `https://api.roboflow.com/dataset/${platformInput}/upload?api_key=${apiKey}`;

    fetch(uploadUrl, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('result').textContent = `Result: ${JSON.stringify(data)}`;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').textContent = 'An error occurred while uploading the file.';
    });
});

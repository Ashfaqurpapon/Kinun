const ReturnApi = () => {
   
        fetch('http://192.168.1.89:4444/admin/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                key1: 'value1',
                key2: 'value2',
            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            })
          
    `   `
}
export default ReturnApi;
let array = [];

document.getElementById('insert').addEventListener('click', () => {
    const value = document.getElementById('inputField').value;
        if (value) {
            array.push(value);
            updateDisplay();
            const listItems = document.querySelectorAll('#arrayList li');
            const newItem = listItems[listItems.length - 1]; // Get the last added item
            newItem.style.backgroundColor = 'green'; // Set green background for inserted value
            document.getElementById('inputField').value = '';
        } else {
            alert('Please enter a value to insert.');
        }
});

document.getElementById('delete').addEventListener('click', () => {
    const value = document.getElementById('inputField').value;
    const index = array.indexOf(value);
        if (index !== -1) {
            const listItems = document.querySelectorAll('#arrayList li');
            const itemToDelete = listItems[index];
            const deleteMessage = document.createElement('span');
            deleteMessage.textContent = ' - Deleting this Value';
            itemToDelete.appendChild(deleteMessage);
            itemToDelete.classList.add('deleted'); 
            itemToDelete.style.backgroundColor = 'red'; 
              
            setTimeout(() => {
                array.splice(index, 1);
                updateDisplay();
            }, 3000);
            document.getElementById('inputField').value = '';
        } else {
            alert('Value not found in List.');
        }
});

document.getElementById('find').addEventListener('click', () => {
    const value = document.getElementById('inputField').value;
    const index = array.indexOf(value);
    const listItems = document.querySelectorAll('#arrayList li');
        if (index !== -1) {
           listItems[index].style.backgroundColor = 'orange'; 
        } else {
            alert('Value not found in list.');
        }
});

document.getElementById('print').addEventListener('click', () => {
    updateDisplay();
});

    function updateDisplay() {
        const displayDiv = document.querySelector('.manipulation');
        const arrayList = document.getElementById('arrayList');
        arrayList.innerHTML = ''; 
          
        if (array.length > 0) {
            displayDiv.querySelector('p').textContent = ''; 
            array.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item;
                arrayList.appendChild(listItem);
            });
        } else {
            displayDiv.querySelector('p').textContent = 'No list in inserted';
        }
        resetBackgrounds(); 
    }

    function resetBackgrounds() {
        const listItems = document.querySelectorAll('#arrayList');
        listItems.forEach(item => {
            item.style.backgroundColor = ''; 
        });
    }

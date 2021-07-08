function main(){
    const listContainer = document.querySelector('[data-list]');
    const newListForm   = document.querySelector('[data-list-form]');
    const newListInput  = document.querySelector('[data-list-input]');

    newListForm.addEventListener('submit',function(e){
        e.preventDefault();
        const listValue = newListInput.value;

        if (listValue === null || listValue === '') return;

        newListInput.value = null;
        listContainer.innerHTML += `
            <li>${listValue}</li>
        `;
    });
}

main();
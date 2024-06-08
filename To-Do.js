const inp = document.querySelector(".inp");
const list = document.querySelector(".list");
const add = document.querySelector(".btn");

add.addEventListener("click", () => {
    addItem(inp.value);
    inp.value = " ";
})

const addItem = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${item} <button class="del">Delete</button>`;

    listItem.querySelector(".del").addEventListener("click", ()=> {
        listItem.remove();
    })

    list.appendChild(listItem);
}
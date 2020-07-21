var ul = document.getElementsByTagName('ul')[0]

function btnAdd() {
    var userInput = document.getElementById('userInput')

    if (userInput.value.trim() !== "") {

        // ADDING VALUE IN LABEL
        var nodeLabel = document.createElement('LABEL')
        var textLabel = document.createTextNode(userInput.value)
        nodeLabel.appendChild(textLabel)

        // ADDING DEL TODO BUTTON
        var nodeBtn = document.createElement('BUTTON')

        // DEL TODO BTN: ADDDING ONCLICK ATTR 
        var attBtn = document.createAttribute('onclick')
        attBtn.value = 'delTodo(this)'
        nodeBtn.setAttributeNode(attBtn)

        // DEL TODO BTN: ADDDING ICON ATTR 
        var nodeIcon = document.createElement('i')
        nodeIcon.setAttribute('class', "fas fa-trash")
        nodeBtn.appendChild(nodeIcon)

        // ADDING EDIT BTN
        var nodeBtnEdit = document.createElement('BUTTON')
        nodeBtnEdit.setAttribute('onclick', 'btnEdit(this)')

        // DEL TODO BTN: ADDDING ICON ATTR 
        var nodeIcon = document.createElement('i')
        nodeIcon.setAttribute('class', "fas fa-pen")
        nodeBtnEdit.appendChild(nodeIcon)

        // ADDDING LI FOR TODO
        var nodeLi = document.createElement('LI')
        nodeLi.appendChild(nodeLabel)
        nodeLi.appendChild(nodeBtnEdit)
        nodeLi.appendChild(nodeBtn)

        ul.appendChild(nodeLi)
        userInput.value = ""
    }
}


function btnDelAll() {
    ul.innerHTML = ""
}

function delTodo(e) {
    e.parentNode.remove()
}

function btnEdit(e) {
    var val = e.parentNode.firstChild.firstChild
    var editValue = prompt("Enter new value", val.nodeValue)
    if (editValue.trim() !== "")
        val.nodeValue = editValue
}
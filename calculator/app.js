var oper = ''
var result = ''
var num = ''
var dot = ''

function getInput(num_input) {

    result += num_input
    document.getElementById('input').value = result
}

function getDot(dot_input) {

    if (result.length > 0 && dot.length === 0) {
        dot = dot_input
        result += dot_input
        document.getElementById('input').value = result
    }

}

function getOper(oper_input) {

    if (result.length > 0 && oper.length === 0) {
        oper = oper_input
        num = result
        result += oper_input
        dot = ''

        document.getElementById('input').value = result
    }
}


function getResult() {

    if (result.length > 0) {

        var arr = result.split(oper)
        var num1 = Number(arr[0])
        var num2 = Number(arr[1])

        switch (oper) {

            case '+':
                ans = num1 + num2
                break

            case '-':
                ans = num1 - num2
                break

            case '*':
                ans = num1 * num2
                break

            case '/':
                ans = num1 / num2
                break

            default:
                break
        }

        oper = ''
        if (ans.toString().length > 12) {
            ans = ans.toFixed(4)
        }
        result = ans.toString()
        document.getElementById('input').value = result
    }
}


function onClear() {
    result = ''
    oper = ''
    document.getElementById('input').value = '0'
}

function onDelete() {

    console.log('')
    if (result.length > 0) {

        if (result.endsWith(oper)) {
            oper = ''
        }

        if (result.endsWith(dot)) {
            dot = ''
        }

        result = result.substring(0, result.length - 1)
    }

    if (result.length === 0) {
        document.getElementById('input').value = '0'
        return
    }

    document.getElementById('input').value = result
}
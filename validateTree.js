function validateBst(tree) {
    return validateBstHelper(tree, -Infinity, Infinity)
}

function validateBstHelper(tree, minValue, maxValue) {
    if (tree === null) return true;
    if (tree.value < minValue || tree.value >= maxValue) return false;
    const leftValid = validateBstHelper(tree.left, minValue, tree.value)
    return leftValid && validateBstHelper(tree.right, tree.value, maxValue)
}
function validateBst(tree) {
    const minValue = -Infinity
    const maxValue = Infinity

    if (tree === null) return true;
    if (tree.value < minValue || tree.value >= maxValue) return false;
    const leftValid = validateBst(tree.left)
    return leftValid && validateBst(tree.right)
}
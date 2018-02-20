/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences) {
    count_lover_pare = 0;
    arr_lover = [];
    for(var i = 0; i<preferences.length; i ++) {
        lover_b_ind = parseInt(preferences[i] - 1);
        lover_c_ind = parseInt(preferences[lover_b_ind] - 1);
        lover_x_ind = parseInt(preferences[lover_c_ind] - 1);
        if (lover_b_ind != i && lover_c_ind != i && lover_x_ind == i && arr_lover.indexOf(i) == -1) {
            arr_lover.push(i);
            arr_lover.push(lover_b_ind);
            arr_lover.push(lover_c_ind);
            count_lover_pare++;
            }
        }
    return count_lover_pare;
};

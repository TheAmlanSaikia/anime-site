/**
 * 
 * @param {animelist} list 
 * @param {checkbox values} filters 
 * @returns new anime List
 */

export const CheckBoxFilter = (list, filters) => {
    if(Object.values(filters).every(value => value === false)){
        return list;
    } 

    return list && list.filter(item => filters[item.genres[0].name])


    
}
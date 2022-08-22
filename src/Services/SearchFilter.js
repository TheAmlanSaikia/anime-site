/**
 * 
 * @param {anime list} lists 
 * @param {search keywords} query 
 * @returns new anime list
 */

export const SearchFilter=(lists,query)=>{
    console.log(lists, query)
    if( query.length <= 0){
        return lists;

    }
   return lists && lists.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));

}
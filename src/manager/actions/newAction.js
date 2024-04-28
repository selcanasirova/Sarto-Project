// // export const addProduct=({id,title,desc,img})=>({
// //     type:"Add_Product",
// //     value:{
// //       id:id,
// //       title:title,
// //       desc:desc,
// //       img:img
// //     }
// // })

// // export const editProduct=(id,update)=>({
// //   type:"Edit_Product",
// //   id,
// //   update
// // })


// // export const removeProduct=({id})=>({
// //   type:"Remove_Product",
// //   id:id

// // })

// import database from '../../firebase/firebaseConfig';

// export const addProduct = (product) => ({
//     type: "Add_Product",
//     product
// })

// export const addProductToDatabase = (productData = {}) => {
//     return (dispatch) => {
//         const { title='', desc='',img='' } = productData;
//         const product = {title,desc,img};

//         database.ref("products").push(product).then((res) => {
//             dispatch(addProduct({
//                 id: res.key,
//                 ...product
//             }))
//         })
//     }
// }

// export const removeProduct = (id) => ({
//     type: "Remove_Product",
//     id: id
// });

// export const removeProductFromDatabase = (id) => {
//     return (dispatch) => {
//         return database.ref(`products/${id}`).remove().then(() => {
//             dispatch(removeProduct(id));
//         })
//     }   
// }

// export const editProduct = (id,updates) => ({
//     type: "Edit_Product",
//     id,
//     updates
// })

// export const editProductFromDatabase = (id, updates) => {
//     return (dispatch) => {
//         return database.ref(`products/${id}`).update(updates).then(() => {
//             dispatch(editProduct(id,updates));
//         })
//     }
// }

// export const setproducts = (products) => ({
//     type: "Set_Product",
//     products
// })

// export const getproductsFromDatabase = () => {
//     return (dispatch) => {
//         return database.ref("products").once("value").then((snapshot) => {
//             const products = [];

//             snapshot.forEach((product) => {
//                 products.push({
//                     id: product.key,
//                     ...product.val()
//                 })
//             })

//             dispatch(setproducts(products));
//         })
//     }
// }


import database from '../../firebase/firebaseConfig';

export const addNews = (news) => ({
    type: "ADD_NEWS",
    news
})

export const addNewsToDatabase = (newsData = {}) => {
    return (dispatch) => {
        const { title='', aztitle='', desc='',azdesc= '',photo='',date='' } = newsData;
        const news = {title,aztitle,desc,azdesc,photo,date};

        database.ref("newss").push(news).then((res) => {
            dispatch(addNews({
                id: res.key,
                ...news
            }))
        })
    }
}

export const removeNews = (id) => ({
    type: "REMOVE_NEWS",
    id: id
});

export const removeNewsFromDatabase = (id) => {
    return (dispatch) => {
        return database.ref(`newss/${id}`).remove().then(() => {
            dispatch(removeNews(id));
        })
    }   
}

export const editNews = (id,updates) => ({
    type: "EDIT_NEWS",
    id,
    updates
})

export const editNewsFromDatabase = (id, updates) => {
    return (dispatch) => {
        return database.ref(`newss/${id}`).update(updates).then(() => {
            dispatch(editNews(id,updates));
        })
    }
}

export const setnewss = (newss) => ({
    type: "SET_NEWSS",
    newss
})

export const getnewssFromDatabase = () => {
    return (dispatch) => {
        return database.ref("newss").once("value").then((snapshot) => {
            const newss = [];

            snapshot.forEach((news) => {
                newss.push({
                    id: news.key,
                    ...news.val()
                })
            })

            dispatch(setnewss(newss));
        })
    }
}
export const selectUser = (user) =>{
    console.log("you selected user" +user.name)
    return{
        type:"USER SELECTED",
        playload:user
    }
}  
export const fetchUser = ()=>{
    const userInfor =
        localStorage.getItem("user") !== "undefined"
            ? JSON.parse(localStorage.getItem("user"))
            : localStorage.clear();
    return userInfor
}
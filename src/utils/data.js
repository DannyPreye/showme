export const userQuery = (userid) => {
    const query = `*[_type == "user"  &&_id == "${userid}" ]`

    return query
}

export const SearchQuery = (searchTerm) => {
    const query = `*[_type== 'pin' && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*' ]
    
    image{
       asset ->{
           url
       },
    _id,
    destination,
    postedBy ->{
        id,
        userName,
        Image
    },
    save[]{
        _key,
        postedBy -> {
            _id,
            userName,
            image
        },
    },
    }`

    return query;

}

export const feedQuery = `*[_type == 'pin'] | order(_createAt desc ) {
     image{
       asset ->{
           url
       },
    _id,
    destination,
    postedBy ->{
        id,
        userName,
        Image
    },
    save[]{
        _key,
        postedBy -> {
            _id,
            userName,
            image
        },
    },
}`
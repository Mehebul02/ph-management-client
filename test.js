const adminPaths =[
    {
        name:'Dashboard',
        path:'dashboard',
       
    },
    {
        name:'User Management',
        children:[
            {
                name:'Create Admin',
                path:'create-admin',
               
            },
            {
                name:'Create Student',
                path:'create-student',
              
            },
            {
                name:'Create Faculty',
                path:'create-faculty',
                
            },
        ]
    }
]



const newArray = adminPaths.reduce((acc,item)=>{
    if(item.path && item.name){
      acc.push({
          key:item.name,
       label:"Navlink"
      })
    }

    return acc
},[])

console.log(newArray);
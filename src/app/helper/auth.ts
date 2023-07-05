import Cookies from 'universal-cookie';
 


const storeLoginToken=(token:string,days:number=10)=>{
    const cookies = new Cookies();
    cookies.set('shopy_token',token, { 
        path: '/',
        maxAge:(days*24*3600)
     });

}

const removeLoginToken=async()=>{
let cookie=new Cookies();
cookie.remove('shopy_token');
}

export  {storeLoginToken,removeLoginToken}
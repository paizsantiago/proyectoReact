
const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=e0473f36f945619d823839b782eeeef5&language=en-US&page=1";
const url2 = "https://api.themoviedb.org/3/movie/popular?api_key=e0473f36f945619d823839b782eeeef5&language=en-US&page=1";
const url3 = "https://api.themoviedb.org/3/movie/upcoming?api_key=e0473f36f945619d823839b782eeeef5&language=en-US&page=1";
const url4 = "https://api.themoviedb.org/3/movie/top_rated?api_key=e0473f36f945619d823839b782eeeef5&language=en-US&page=1"


 export const data = new Promise ((resolve, reject)=>{
    
    let condition = true;
    setTimeout(()=>{
     if (condition) {
      resolve(fetch(url).then((res)=>{
        return res.json();
    }).then((json)=>{
        const {results} = json;
        return results;
    }).catch((error) => console.log(error)))
     } else{
       reject("Ups, algo salio mal");
     }
    })
  })

  export const data2 = new Promise ((resolve, reject)=>{
    
    let condition = true;
    setTimeout(()=>{
     if (condition) {
      resolve(fetch(url2).then((res)=>{
        return res.json();
    }).then((json)=>{
        const {results} = json;
        return results;
    }).catch((error) => console.log(error)))
     } else{
       reject("Ups, algo salio mal");
     }
    })
  })

  export const data3 = new Promise ((resolve, reject)=>{
    
    let condition = true;
    setTimeout(()=>{
     if (condition) {
      resolve(fetch(url3).then((res)=>{
        return res.json();
    }).then((json)=>{
        const {results} = json;
        return results;
    }).catch((error) => console.log(error)))
     } else{
       reject("Ups, algo salio mal");
     }
    })
  })

  export const data4 = new Promise ((resolve, reject)=>{
    
    let condition = true;
    setTimeout(()=>{
     if (condition) {
      resolve(fetch(url4).then((res)=>{
        return res.json();
    }).then((json)=>{
        const {results} = json;
        return results;
    }).catch((error) => console.log(error)))
     } else{
       reject("Ups, algo salio mal");
     }
    })
  })


export const posterPeliculas = (poster_path) =>{
    return `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`
}
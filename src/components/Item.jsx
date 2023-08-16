import React from 'react'


const imgPath = 'https://image.tmdb.org/t/p/w500'
const unavailable = 'https://hf-files-oregon.s3.amazonaws.com/hdpcssd11_kb_attachments/2020/08-14/3c3584cf-21ca-4068-b7d8-ac169c5ae949/1.jpg'
function Item({x}) {
  return (
    <div style={{width:'', alignItems:'center', display:'grid', justifyContent:'center', margin:'10px'}}>
        <div style={{margin:'', alignItems:'center', display:'grid', justifyContent:'center'}}>
        <img style={{width:'300px', height:'200px', margin:'10px' }} src={x.poster_path ? `${imgPath}${x.poster_path}` : unavailable} alt="" />
        <h3 style={{marginLeft:'20px'}}>{x.original_title}</h3>
        </div>
        <main style={{marginLeft:'20px'}}>
            <span>{x.vote_average}</span>
            <span>{x.release_date}</span>
        </main>
    </div>
  )
}

export default Item
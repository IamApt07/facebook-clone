import React from 'react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'

const slug = () => {
  const [blog, setBlog] = useState();
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    const {slug} = router.query;
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
      return a.json();  })
      .then((parsed)=>{
      console.log(parsed)
      setBlog(parsed)
    })
  }, [router.isReady]) 
  return (
    <div className={styles.container2}>
      <main>
        <div className={styles.container2}>
          <img src={blog && blog.url} alt=''/>
       </div>
        <h1 className={styles.title1}>
          {blog && blog.title}
        </h1>
        <div className={styles.post}>
          {blog && blog.content}
        </div>
      </main>
    </div>
  )
}
export default slug
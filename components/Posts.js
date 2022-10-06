import React from 'react'
import {useCollection} from "react-firebase-hooks/firestore/compat/app"
import { db } from '../firebase/compat/app';
import Post from './Post';


function Posts() {
  const [ realtimePosts ] = useCollection(query (db.collection("posts").orderBy('timestamp', 'desc'),
  
  {
    snapshotListenOptions: { includeMetadataChanges: true },
    
  })
  
  );
 
  return (
    <div>
      {realtimePosts && (
          <span>
            
            Collection:{' '}
            {realtimePosts.docs.map((post) => (
              <Post key={post.id}name={post.data().name}
              message={post.data().message}
              email={post.data().email}
              timestamp={post.data().timestamp}
              image={post.data().image}
              postImage={post.data().postImage}
              />
            ))}
          </span>
        )}

      {/* {realtimePosts.docs.map((post)=>(
        <Post
        key={post.id}
        name={post.data().name}
        message={post.data().message}
        email={post.data().email}
        timestamp={post.data().timestamp}
        image={post.data().image}
        postImage={post.data().postImage}
        />
      ))}  */}
    </div>
  );
}

export default Posts

import React, { useState } from 'react';

const initialPosts = [
  { id: 1, title: 'First Post', content: 'This is the content of the first post.', image: 'https://imgs.search.brave.com/1FmRTsANLo_O2jC3pGrS5ExAF-mPa_-QY2B3cPlUV1c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NjM5NTQ2/NDU2NTUtYjU4OTAy/MzJiMTBmP2l4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4bFpHbDBi/M0pwWVd3dFptVmxa/SHd4TW54OGZHVnVm/REI4Zkh4OGZBPT0m/dz0xMDAwJnE9ODA.jpeg'},
  { id: 2, title: 'Second Post', content: 'This is the content of the second post.', image: 'https://imgs.search.brave.com/1FmRTsANLo_O2jC3pGrS5ExAF-mPa_-QY2B3cPlUV1c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NjM5NTQ2/NDU2NTUtYjU4OTAy/MzJiMTBmP2l4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4bFpHbDBi/M0pwWVd3dFptVmxa/SHd4TW54OGZHVnVm/REI4Zkh4OGZBPT0m/dz0xMDAwJnE9ODA.jpeg' },
  // ... more posts
];
function RedditPostUI() {
  const [posts, setPosts] = useState(initialPosts);

  return (
    <div className="flex" style={{ background: '#FBFDFF' }}>
      <div className="flex flex-col items-center min-h-screen text-white w-4/5">
        <header style={{ background: '#FBFDFF' }} className="py-4 text-white text-center">
          <h1 style={{ color: '#B8E8FC' }} className="text-6xl font-bold underline">CONNEXUS</h1>
        </header>
        <main style={{ background: '#FBFDFF' }} className="p-8">
          <div className="space-y-20">
            {posts.map((post, index) => (
              <div key={post.id} style={{ background: '#eeeeee', boxShadow: '0px 0px 40px #eeeeee' }} className="p-4 rounded shadow-md">
                <h2 style={{ color: '#A4A2F9' }} className="text-xl font-semibold mb-2">{post.title}</h2>
                {post.image && (
                  <img src={`${post.image}`} alt={post.title} style={{ width: '960px', height: '460px' }} className="mb-2 rounded-md" />
                )}
                <p>
                  <span style={{ color: '#a4a2f9' }}>{post.content.split(' ')[0]}</span>
                  <span style={{ color: '#C8FFD4' }}>{post.content.slice(post.content.indexOf(' ') + 1)}</span>
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
      <div className="flex flex-col w-1/5 bg-gray-500 bg-red-500 z-50 " style={{ position: 'absolute', height: '100vh' }}>
        <div className=" bg-red-500" style={{ marginTop: posts.length > 0 ? '5rem' : '0' }}></div>
      </div>
    </div>
  );
}

export default RedditPostUI;
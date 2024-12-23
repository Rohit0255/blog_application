import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  const posts = [
    {
      id: 1,
      tittle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptatibus accusamus nam cupiditate alias odit veritatis aliquam, consequatur sapiente corporis autem tempore, possimus excepturi velit earum doloremque aliquid quae vero.',
      img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      tittle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptatibus accusamus nam cupiditate alias odit veritatis aliquam, consequatur sapiente corporis autem tempore, possimus excepturi velit earum doloremque aliquid quae vero.',
      img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      tittle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptatibus accusamus nam cupiditate alias odit veritatis aliquam, consequatur sapiente corporis autem tempore, possimus excepturi velit earum doloremque aliquid quae vero.',
      img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 4,
      tittle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptatibus accusamus nam cupiditate alias odit veritatis aliquam, consequatur sapiente corporis autem tempore, possimus excepturi velit earum doloremque aliquid quae vero.',
      img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 5,
      tittle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptatibus accusamus nam cupiditate alias odit veritatis aliquam, consequatur sapiente corporis autem tempore, possimus excepturi velit earum doloremque aliquid quae vero.',
      img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ]

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`./post/${post.id}`}>
                <h1> {post.tittle}</h1>
                <p> {post.desc} </p>
                <button> Read more </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home

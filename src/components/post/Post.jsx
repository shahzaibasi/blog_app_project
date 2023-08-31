import './post.css';

export default function Post() {
  return (
    <div className='post'>
      <img src="https://images.pexels.com/photos/5232463/pexels-photo-5232463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='postImg'/>
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet 
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime neque fugiat impedit veritatis! Voluptatum porro doloribus alias, totam, ullam aperiam ipsum magni accusantium autem dolores temporibus architecto sit placeat quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime neque fugiat impedit veritatis! Voluptatum porro doloribus alias, totam, ullam aperiam ipsum magni accusantium autem dolores temporibus architecto sit placeat quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime neque fugiat impedit veritatis! Voluptatum porro doloribus alias, totam, ullam aperiam ipsum magni accusantium autem dolores temporibus architecto sit placeat quis.
      </p>
    </div>
  );
}

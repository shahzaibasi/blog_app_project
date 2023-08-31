import './singlePost.css';

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/5232463/pexels-photo-5232463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i class="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i class="singlePostIcon fa-regular fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Shahzaib</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className='singlePostDesc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti porro laboriosam atque doloremque nihil reprehenderit consectetur officiis, explicabo earum distinctio voluptas recusandae incidunt at. Ratione unde aperiam laudantium. Quod, necessitatibus at tempora ducimus porro pariatur exercitationem molestiae, assumenda minima adipisci quisquam quos quas? Dignissimos at dolorem est aut! Numquam iusto magnam officia voluptatibus perferendis fugiat enim exercitationem ipsa facere doloremque aliquam, adipisci dolorum rem aperiam labore harum explicabo unde, repudiandae illum aut quae totam. Architecto, quasi alias fuga quaerat dolore cumque odio, culpa deserunt vitae facilis eum accusamus ullam pariatur iure libero omnis labore doloremque. Aliquam, voluptatem perferendis? Vitae sequi repellendus, asperiores accusantium vero quas, officiis praesentium nihil facere quo incidunt in non ratione fugit aspernatur delectus! Aliquid ipsum est placeat ut eos error? Laudantium aliquid sapiente quae ipsa rerum repellat maxime repellendus tempora, impedit explicabo atque maiores dignissimos alias ratione sunt molestiae eaque ipsum? Quidem sequi cupiditate iste laboriosam?
                </p>
            </div>
        </div>
    );
}

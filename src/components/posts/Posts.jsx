import { Link } from 'react-router-dom';
import Post from '../post/Post';
import './posts.css';

export default function Posts() {
  return (
    <div className='posts'>
      <Link className='link' to="/post"><Post /></Link>
      <Link className='link' to="/post"><Post /></Link>
      <Link className='link' to="/post"><Post /></Link>
      <Link className='link' to="/post"><Post /></Link>
      <Link className='link' to="/post"><Post /></Link>
      <Link className='link' to="/post"><Post /></Link>
    </div>
  );
}
